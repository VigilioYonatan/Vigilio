import { ref } from "vue";
import vuePaginator, { type Pagination } from "@vigilio/vue-paginator";

type KeyColumn<T, K extends string> = keyof (T & {
    [A in K]: string;
});
export type Columns<T, K extends string = "", Y = any> = {
    key: KeyColumn<T, K>;
    header?:
        | string
        | ((
              props: KeyColumn<T, K>,
              sorting: (key: keyof T | K) => void,
              methods: Y
          ) => any);
    cell?: string | ((props: T, index: number, methods: Y) => any);
    isSort?: boolean;
}[];
export interface UseTableProps<T extends object, K extends string, Y = any> {
    columns: Columns<T, K, Y>;
    pagination?: Pagination;
    methods?: Y;
}

function useTable<T extends object, K extends string, Y>(
    props: UseTableProps<T, K, Y>,
    isQueryPage: boolean = false
) {
    const { pagination: paginationProps, columns } = props || { methods: {} };
    const data = ref<T[]>([]);
    const methods = ref(props.methods);
    const {
        pagination,
        search,
        updateData: update,
    } = vuePaginator(paginationProps, isQueryPage);

    const sort = ref<{
        [x: string]: string;
    }>({});

    function updateData({
        result,
        count,
        methods: m,
    }: {
        result: T;
        count: number;
        methods?: Y;
    }) {
        (data as any).value = result;
        update({ total: count });
        if (m) {
            Object.assign(methods, m);
        }
    }

    /* SORTING */
    function sorting(key: keyof T | K) {
        if (pagination.page.value > 1) {
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
            if (header && header instanceof Function) {
                value = header(key, sorting, methods.value as Y);
            }
            if (typeof header === "string") {
                value = header;
            }
            return { key, value, isSort, sorting };
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
                value = cell(
                    data,
                    pagination.value.offset + data.index,
                    methods.value as Y
                );
            }
            if (typeof cell === "string") {
                value = data[cell];
            }
            return { key, value };
        });
    }

    // name

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
            sort,
            sorting,
        },
        search,
    };
}

export default useTable;
