import { VNode, computed, createApp, reactive, ref } from "vue";

type KeyColumn<T, K extends string> = keyof (T & {
    [A in K]: string;
});
export type Columns<T, K extends string> = {
    key: KeyColumn<T, K>;
    header?:
        | string
        | ((props: KeyColumn<T, K>, sorting: (key: keyof T) => void) => any);
    cell?: string | ((props: T, index: number) => any);
}[];
export interface UseTableProps<T extends object, K extends string> {
    columns: Columns<T, K>;
    data?: T[];
    pagination?: Pagination;
}
export interface Pagination {
    limit?: number;
    offset?: number;
    total?: number;
}
function useTable<T extends object, K extends string>(
    props: UseTableProps<T, K>
) {
    const data = ref<T[]>([]);
    const {
        limit = 20,
        offset = 0,
        total = data.value.length,
    } = props.pagination || {
        limit: 20,
        offset: 0,
        total: data.value.length,
    };

    const page = ref(1);
    const pagination: Required<Pagination & { total: number }> = reactive({
        limit,
        offset,
        total,
    });

    const sort = reactive<{
        [x: string]: string;
    }>({});

    const currentPage = computed(
        () => Math.floor(pagination.offset / pagination.limit) + 1
    );

    const totalPages = computed(() =>
        Math.ceil(pagination.total / pagination.limit)
    );

    function updateData(datas: T[], paginate?: Pagination) {
        (data as any).value = datas;
        if (paginate) {
            Object.assign(pagination, { ...paginate });
        }
    }

    /* PAGINATION */
    function onNextPage() {
        pagination.offset = pagination.offset + 10;
        page.value = page.value + 1;
    }
    function onBackPage() {
        pagination.offset = pagination.offset - 10;
        page.value = page.value - 1;
    }
    function onchangeLimit(limit = 10) {
        pagination.limit = limit;
    }

    function onChangePage(pag: number) {
        pagination.offset = (pag - 1) * pagination.limit;
        page.value = pag;
    }
    function onFinalPage() {
        pagination.offset = (totalPages.value - 1) * pagination.limit;
        page.value = totalPages.value;
    }
    function backInitialPage() {
        pagination.offset = (page.value - 1) * pagination.limit;
        page.value = 1;
    }

    function paginator() {
        return Array.from({ length: totalPages.value }).map((_, i) => {
            const startPage = Math.max(
                1,
                page.value - Math.floor(pagination.limit / 2)
            );
            const endPage = Math.min(
                totalPages.value,
                startPage + pagination.limit - 1
            );

            return {
                startPage,
                endPage,
                totalPages,
                actualPage: page.value,
                isActualPage: page.value === i + 1,
                page: i + 1,
            };
        });
    }

    /* SORTING */
    function sorting(key: keyof T) {
        const sorted = {
            [key]: (sort as any)[key] === "ASC" ? "DESC" : "ASC",
        };
        Object.assign(sort, sorted);
    }

    /* TABLE */
    function Thead() {
        return props.columns.map(({ key, header }) => {
            let value: any = key;
            if (header && header instanceof Function) {
                value = vnodeToString(header(key, sorting));
            }
            if (typeof header === "string") {
                value = header;
            }
            return { key, value };
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
        return props.columns.map(({ key, cell }) => {
            let value = data[key];
            if (cell && cell instanceof Function) {
                value = vnodeToString(
                    cell(data, pagination.offset + data.index)
                );
            }
            if (typeof cell === "string") {
                value = data[cell];
            }
            return { key, value };
        });
    }

    function vnodeToString(vnode: VNode) {
        const container = document.createElement("th");
        const app = createApp({ render: () => vnode });
        app.mount(container);
        const htmlString = container.innerHTML;
        app.unmount();
        return htmlString;
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
        pagination: {
            onNextPage,
            onBackPage,
            onchangeLimit,
            onChangePage,
            backInitialPage,
            paginator,
            onFinalPage,
            pagination,
            totalPages,
            page,
            currentPage,
        },
        sort: {
            sort,
            sorting,
        },
    };
}

export default useTable;
