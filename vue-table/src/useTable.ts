import { computed, reactive, ref, toRefs } from "vue";
import useDebounce from "./useDebounce";

type KeyColumn<T, K extends string> = keyof (T & {
    [A in K]: string;
});
export type Columns<T, K extends string, Y = any> = {
    key: KeyColumn<T, K>;
    header?:
        | string
        | ((
              props: KeyColumn<T, K>,
              sorting: (key: keyof T) => void,
              methods: Y
          ) => any);
    cell?: string | ((props: T, index: number, methods: Y) => any);
    isSort?: boolean;
}[];
export interface UseTableProps<T extends object, K extends string, Y = any> {
    columns: Columns<T, K, Y>;
    data?: T[];
    pagination?: Pagination;
    methods?: Y;
}
export interface Pagination {
    limit?: number;
    offset?: number;
    total?: number;
    maxPagesShown?: number;
}
function useTable<T extends object, K extends string, Y>(
    props: UseTableProps<T, K, Y>
) {
    const data = ref<T[]>([]);
    const {
        limit = 20,
        offset = 0,
        total = data.value.length,
        maxPagesShown = 10,
    } = props.pagination || {
        limit: 20,
        offset: 0,
        total: data.value.length,
        maxPagesShown: 10,
    };
    const methods = props.methods || {};
    const search = ref("");
    const debounceTerm = useDebounce(search);

    const page = ref(1);
    const pagination: Required<Pagination & { total: number }> = reactive({
        limit,
        offset,
        total,
        maxPagesShown,
    });

    const sort = ref<{
        [x: string]: string;
    }>({});

    function updateData(datas: T[], paginate?: Pagination) {
        (data as any).value = datas;
        if (paginate) {
            Object.assign(pagination, { ...paginate });
        }
    }

    /* PAGINATION */
    function onNextPage(pemittion: boolean = true) {
        if (page.value === totalPages.value && pemittion) return;
        pagination.offset = pagination.offset + pagination.limit;
        page.value = page.value + 1;
    }
    function onBackPage(pemittion: boolean = true) {
        if (page.value === 1 && pemittion) return;
        pagination.offset = pagination.offset - pagination.limit;
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

    /*  paginator */
    const paginator = computed(() => {
        let startPage: number, endPage: number;
        // if total pages are less than maximum pages to be displayed (maxPagesShown), then show all pages

        if (totalPages.value <= pagination.maxPagesShown) {
            startPage = 1;
            endPage = totalPages.value;
        } else {
            // total pages is more than maxPagesShown...
            // calculating start and end pages
            let maxPagesShownBeforeCurrentPage = Math.floor(maxPagesShown / 2);
            let maxPagesShownAfterCurrentPage =
                Math.ceil(pagination.maxPagesShown / 2) - 1;
            if (currentPage.value <= maxPagesShownBeforeCurrentPage) {
                // current page is at the start of the pagination
                startPage = 1;
                endPage = maxPagesShown;
            } else if (
                currentPage.value + maxPagesShownAfterCurrentPage >=
                totalPages.value
            ) {
                // current page is at the end of the pagination
                startPage = totalPages.value - pagination.maxPagesShown + 1;
                endPage = totalPages.value;
            } else {
                // current page is somewhere in the middle of the pagination
                startPage = currentPage.value - maxPagesShownBeforeCurrentPage;
                endPage = currentPage.value + maxPagesShownAfterCurrentPage;
            }
        }
        // create an array of pages to be displayed
        let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
            (i) => startPage + i
        );

        return {
            totalItems: pagination.total,
            currentPage: currentPage.value,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages,
        };
    });
    const currentPage = computed(
        () => Math.floor(pagination.offset / pagination.limit) + 1
    );

    const totalPages = computed(() =>
        Math.ceil(pagination.total / pagination.limit)
    );
    const itemsForPage = computed(() => {
        return Row().length;
    });
    const startingBreakPointButtonIfCondition = computed(() => {
        return paginator.value.pages[0] >= 3;
    });
    const endingBreakPointButtonIfCondition = computed(() => {
        return (
            paginator.value.pages[paginator.value.pages.length - 1] <
            totalPages.value - 1
        );
    });

    /* SORTING */
    function sorting(key: keyof T) {
        if (page.value > 1) {
            onChangePage(1);
        }
        const sorted = {
            [key]: (sort as any).value[key] === "ASC" ? "DESC" : "ASC",
        };
        sort.value = sorted;
    }

    /* TABLE */
    function Thead() {
        return props.columns.map(({ key, header, isSort }) => {
            let value: any = key;
            if (header && header instanceof Function) {
                value = header(key, sorting, methods as Y);
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
        return props.columns.map(({ key, cell }) => {
            let value = data[key];
            if (cell && cell instanceof Function) {
                value = cell(
                    data,
                    pagination.offset + data.index,
                    methods as Y
                );
            }
            if (typeof cell === "string") {
                value = data[cell];
            }
            return { key, value };
        });
    }

    // name
    function onSearchByName(e: Event) {
        if (page.value > 1) {
            onChangePage(1);
        }
        search.value = (e.target as HTMLInputElement).value;
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
            paginator,
            onNextPage,
            onBackPage,
            onchangeLimit,
            onChangePage,
            backInitialPage,
            onFinalPage,
            totalPages,
            page,
            currentPage,
            endingBreakPointButtonIfCondition,
            startingBreakPointButtonIfCondition,
            itemsForPage,
            ...toRefs(pagination),
        },
        sort: {
            sort,
            sorting,
        },
        search: {
            value: debounceTerm,
            onSearchByName,
        },
    };
}

export default useTable;
