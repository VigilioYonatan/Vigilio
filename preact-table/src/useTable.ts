import { useSignal } from "@preact/signals";
import usePaginator, {
  type Pagination,
  type UsePaginator,
} from "@vigilio/preact-paginator";

type KeyColumn<T, K extends string> = keyof (T & {
  [A in K]: string;
});
export type ColumnDef<
  T,
  K extends string = "",
  Y extends object = UseTableMethods<T, K>,
> = {
  key: KeyColumn<T, K>;
  header?:
    | string
    | ((
        props: KeyColumn<T, K>,
        methods: Y & UseTableMethods<T, K>,
        data: T[],
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ) => any);
  cell?:
    | string
    | ((
        props: T,
        index: number,
        methods: Y & UseTableMethods<T, K>,
        checks: number[],
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ) => any);
  isSort?: boolean | keyof T;
  columns?: ColumnDef<T, K, Y>[];
  colSpan?: number;
  rowSpan?: number;
};

export type Columns<
  T,
  K extends string = "",
  Y extends object = UseTableMethods<T, K>,
> = ColumnDef<T, K, Y>[];
export type UseTableMethods<T, K extends string = ""> = {
  sorting: (key: keyof T | K) => void;
  onCheck: (value: number) => void;
  existCheck: (value: number) => boolean;
  isEmptyCheck: () => boolean;
  updateData(
    props:
      | {
          result: T[];
          count: number;
          methods?: UseTableMethods<T, K>;
          cursor?: string | number | null;
        }
      | ((
          data: T[],
          total: number,
        ) => {
          result: T[];
          count: number;
          methods?: UseTableMethods<T, K>;
          cursor?: string | number | null;
        }),
  ): void;
};
export interface UseTableProps<
  T extends object,
  K extends string,
  Y extends object = any,
> {
  columns: Columns<T, K, Y>;
  pagination?: Pagination;
  methods?: Y;
  filters?: Record<string, string | number | boolean | null>;
}
export interface UseTable<
  T extends object,
  K extends string,
  Y extends object = any,
> {
  table: {
    Thead: () => {
      key: K | keyof T | string;
      value: any;
      isSort?: boolean | keyof T;
      methods?: Y & UseTableMethods<T, K>;
      colSpan?: number;
      rowSpan?: number;
    }[][];
    TBody: {
      Row: () => (T & {
        index: number;
      })[];
      Cell: (data: any) => {
        key: K | keyof T | string;
        value: any;
      }[];
    };
  };
  updateData: (
    props:
      | {
          result: T[];
          count: number;
          methods?: Y;
          cursor?: string | number | null;
        }
      | ((
          data: T[],
          total: number,
        ) => {
          result: T[];
          count: number;
          methods?: Y;
          cursor?: string | number | null;
        }),
  ) => void;
  pagination: UsePaginator["pagination"];
  sort: {
    value: {
      [x: string]: string;
    };
    sorting: (key: keyof T | K) => void;
  };
  filters: {
    value: Record<string, string | number | boolean | null>;
    update: (name: string, value: string | number | boolean | null) => void;
    set: (values: Record<string, string | number | boolean | null>) => void;
    clear: () => void;
  };
  search: {
    value: string;
    debounceTerm: string;
    onSearchByName: (term: string) => void;
  };
  checks: {
    value: number[];
    onCheck: (value: number) => void;
    existCheck: (value: number) => boolean;
    isEmptyCheck: () => boolean;
    clearChecks: () => void;
  };
  methods: Y;
}

function useTable<T extends object, K extends string, Y extends object>(
  props: UseTableProps<T, K, Y>,
  isQueryPage = false,
): UseTable<T, K, Y> {
  const { pagination: paginationProps, columns } = props || { methods: {} };
  const data = useSignal<T[]>([]);
  const methods = useSignal(props.methods || {});
  const checks = useSignal<number[]>([]);

  const {
    pagination,
    search,
    updateData: update,
    sort,
    filters,
  } = usePaginator({ ...paginationProps, filters: props.filters }, isQueryPage);

  function updateData(
    props:
      | {
          result: T[];
          count: number;
          methods?: Y;
          cursor?: string | number | null;
        }
      | ((
          data: T[],
          total: number,
        ) => {
          result: T[];
          count: number;
          methods?: Y;
          cursor?: string | number | null;
        }),
  ) {
    if (typeof props === "function") {
      const {
        result,
        count,
        methods: m,
        cursor,
      } = props(data.value, pagination.value.total || 0);
      data.value = result;
      update({ total: count, cursor: cursor ?? null });
      if (m) {
        methods.value = { ...methods.value, ...m };
      }
    } else {
      const { result, count, methods: m, cursor } = props;
      data.value = result;
      update({ total: count, cursor: cursor ?? null });
      if (m) {
        methods.value = { ...methods.value, ...m };
      }
    }
  }

  /* TABLE */
  function getFlatColumns(cols: Columns<T, K, Y>): Columns<T, K, Y> {
    return cols.flatMap((col) => {
      if (col.columns) return getFlatColumns(col.columns);
      return [col];
    });
  }
  const flatColumns = getFlatColumns(columns);

  function getDepth(col: ColumnDef<T, K, Y>): number {
    if (!col.columns || col.columns.length === 0) return 1;
    return 1 + Math.max(...col.columns.map(getDepth));
  }
  const maxDepth = Math.max(...columns.map(getDepth));

  function getHeaderRows() {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const rows: any[][] = Array.from({ length: maxDepth }, () => []);

    function traverse(cols: Columns<T, K, Y>, depth: number) {
      cols.forEach((col) => {
        // const nodeDepth = getDepth(col);
        const leaves = getFlatColumns([col]).length;
        const isLeaf = !col.columns || col.columns.length === 0;
        const rowSpan = isLeaf ? maxDepth - depth : 1;
        const colSpan = leaves;

        const processedCol = { ...col, rowSpan, colSpan };

        let value: any = col.key;
        const metodos = {
          ...methods.value,
          sorting: sort.sorting,
          onCheck,
          existCheck,
          isEmptyCheck,
          updateData,
        } as Y & UseTableMethods<T, K>;
        if (col.header && col.header instanceof Function) {
          value = col.header(
            col.key as any,
            metodos as Y & UseTableMethods<T, K>,
            data.value,
          );
        }
        if (typeof col.header === "string") {
          value = col.header;
        }

        rows[depth].push({
          ...processedCol,
          key: col.key!, // Assert key exists, or use default if needed for groups
          value,
          isSort: col.isSort,
          methods: metodos,
          colSpan,
          rowSpan,
        });

        if (col.columns) {
          traverse(col.columns, depth + 1);
        }
      });
    }
    traverse(columns, 0);
    return rows;
  }

  function Thead() {
    return getHeaderRows();
  }

  function Row() {
    return data.value.map((data, index) => {
      return {
        ...data,
        index,
      };
    });
  }

  function Cell(data: any) {
    return flatColumns.map(({ key, cell }) => {
      let value = data[key as string];
      if (cell && cell instanceof Function) {
        const methds = {
          ...methods.value,
          sorting: sort.sorting,
          onCheck,
          existCheck,
          isEmptyCheck,
          updateData,
        };

        value = cell(
          data,
          pagination.value.offset + data.index,
          methds as Y & UseTableMethods<T, K>,
          checks.value,
        );
      }
      if (typeof cell === "string") {
        value = data[cell as string];
      }
      return { key: key as string, value };
    });
  }

  // checks
  function onCheck(value: number) {
    if (existCheck(value)) {
      checks.value = checks.value.filter((val) => val !== value);
    } else {
      checks.value = [...checks.value, value];
    }
  }

  function existCheck(value: number) {
    return checks.value.some((val) => val === value);
  }
  function isEmptyCheck() {
    return checks.value.length === 0;
  }
  function clearChecks() {
    checks.value = [];
  }

  return {
    table: {
      Thead,
      TBody: {
        Row,
        Cell,
      },
    },
    updateData,
    pagination,
    sort: {
      get value() {
        return sort.value;
      },
      sorting: sort.sorting as (key: keyof T | K) => void,
    },
    filters,
    search,
    checks: {
      get value() {
        return checks.value;
      },
      onCheck,
      existCheck,
      isEmptyCheck,
      clearChecks,
    },
    methods: methods.value as Y,
  };
}

export default useTable;
