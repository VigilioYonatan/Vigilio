import usePaginator, {
    type Pagination,
    UsePaginator,
} from "@vigilio/preact-paginator";
import { useSignal } from "@preact/signals";

type KeyColumn<T, K extends string> = keyof (T & {
    [A in K]: string;
});
export type Columns<T, K extends string = "", Y extends object = any> = {
    key: KeyColumn<T, K>;
    header?:
        | string
        | ((
              props: KeyColumn<T, K>,
              methods: Y & UseTableMethods<T, K>,
              data: T[]
          ) => any);
    cell?:
        | string
        | ((props: T, index: number, methods: Y, checks: number[]) => any);
    isSort?: boolean | keyof T;
}[];
export type UseTableMethods<T, K extends string = ""> = {
    sorting: (key: keyof T | K) => void;
    onCheck: (value: number) => void;
    existCheck: (value: number) => boolean;
    isEmptyCheck: () => boolean;
};
export interface UseTableProps<
    T extends object,
    K extends string,
    Y extends object = any
> {
    columns: Columns<T, K, Y>;
    pagination?: Pagination;
    methods?: Y;
}
export interface UseTable<
    T extends object,
    K extends string,
    Y extends object = any
> {
    table: {
        Thead: () => {
            key: K | keyof T;
            value: any;
            isSort: boolean | keyof T | undefined;
            methods?: Y & UseTableMethods<T, K>;
        }[];
        TBody: {
            Row: () => (T & {
                index: number;
            })[];
            Cell: (data: any) => {
                key: K | keyof T;
                value: any;
            }[];
        };
    };
    updateData: ({
        result,
        count,
        methods,
    }: {
        result: T[];
        count: number;
        methods?: Y | undefined;
    }) => void;
    pagination: UsePaginator["pagination"];
    sort: {
        value: {
            [x: string]: string;
        };
        sorting: (key: keyof T | K) => void;
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
    };
    methods: Y;
}

function useTable<T extends object, K extends string, Y extends object>(
    props: UseTableProps<T, K, Y>,
    isQueryPage = false
): UseTable<T, K, Y> {
    const { pagination: paginationProps, columns } = props || { methods: {} };
    const data = useSignal<T[]>([]);
    const methods = useSignal(props.methods || {});
    const checks = useSignal<number[]>([]);

    const {
        pagination,
        search,
        updateData: update,
    } = usePaginator(paginationProps, isQueryPage);

    const sort = useSignal<{
        [x: string]: string;
    }>({});

    function updateData({
        result,
        count,
        methods: m,
    }: {
        result: T[];
        count: number;
        methods?: Y;
    }) {
        data.value = result;
        update({ total: count });
        if (m) {
            methods.value = { ...methods.value, ...m };
        }
    }

    /* SORTING */
    function sorting(key: keyof T | K) {
        if (pagination.page > 1) {
            pagination.onChangePage(1);
        }
        const sorted = {
            [key]: (sort as any).value[key] === "ASC" ? "DESC" : "ASC",
        };
        sort.value = sorted;
    }

    /* TABLE */
    function Thead() {
        return columns.map(({ key, header, isSort }) => {
            let value: any = key;
            const methds = {
                ...methods.value,
                sorting,
                onCheck,
                existCheck,
                isEmptyCheck,
            };
            if (header && header instanceof Function) {
                value = header(
                    key,
                    methds as Y & UseTableMethods<T, K>,
                    data.value
                );
            }
            if (typeof header === "string") {
                value = header;
            }
            return { key, value, isSort, methds };
        });
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
        return columns.map(({ key, cell }) => {
            let value = data[key];
            if (cell && cell instanceof Function) {
                const methds = {
                    ...methods.value,
                    sorting,
                    onCheck,
                    existCheck,
                    isEmptyCheck,
                };

                value = cell(
                    data,
                    pagination.value.offset + data.index,
                    methds as Y & UseTableMethods<T, K>,
                    checks.value
                );
            }
            if (typeof cell === "string") {
                value = data[cell];
            }
            return { key, value };
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
            value: sort.value,
            sorting,
        },
        search,
        checks: {
            value: checks.value,
            onCheck,
            existCheck,
            isEmptyCheck,
        },
        methods: methods.value as Y,
    };
}

export default useTable;
