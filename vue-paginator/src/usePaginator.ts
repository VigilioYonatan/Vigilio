import { computed, reactive, ref, watch } from "vue";
import { useDebounce } from "./useDebounce";
export interface Pagination {
    limit?: number;
    offset?: number;
    maxPagesShown?: number;
    page?: number;
}
export type UpdateDate = Pagination & { total: number | null };
function usePaginator(props?: Pagination, isQueryPage: boolean = false) {
    const {
        limit = 10,
        offset = 0,
        maxPagesShown = 5,
        page: pages = 1,
    } = props || {
        limit: 10,
        offset: 0,
        maxPagesShown: 5,
        page: 1,
    };
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const page = ref(isQueryPage ? Number(params.get("page")) || pages : pages);
    const search = ref("");
    const debounceTerm = useDebounce(search);
    const pagination: Required<Omit<Pagination, "page">> & {
        total: number | null;
    } = reactive({
        limit,
        offset: (page.value - 1) * limit + offset,
        maxPagesShown,
        total: null,
    });

    function updateData(paginate?: UpdateDate) {
        Object.assign(pagination, { ...paginate });
    }

    watch(page, (page) => {
        if (isQueryPage) {
            params.set("page", String(page));
            const nuevaURL = `${url.origin}${
                url.pathname
            }?${params.toString()}`;
            window.history.pushState({}, "", nuevaURL);
        }
    });

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
        if (page.value > 1) {
            onChangePage(1);
        }
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
            let maxPagesShownBeforeCurrentPage = Math.floor(
                pagination.maxPagesShown / 2
            );
            let maxPagesShownAfterCurrentPage =
                Math.ceil(pagination.maxPagesShown / 2) - 1;
            if (currentPage.value <= maxPagesShownBeforeCurrentPage) {
                // current page is at the start of the pagination
                startPage = 1;
                endPage = pagination.maxPagesShown;
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
        Math.ceil(pagination.total! / pagination.limit)
    );

    const startingBreakPointButtonIfCondition = computed(() => {
        return paginator.value.pages[0] >= 3;
    });
    const endingBreakPointButtonIfCondition = computed(() => {
        return (
            paginator.value.pages[paginator.value.pages.length - 1] <
            totalPages.value - 1
        );
    });
    function onSearchByName(e: Event) {
        if (page.value > 1) {
            onChangePage(1);
        }
        search.value = (e.target as HTMLInputElement).value;
    }
    return {
        updateData,
        pagination: {
            value: pagination,
            page,
            paginator,
            startingBreakPointButtonIfCondition,
            endingBreakPointButtonIfCondition,
            currentPage,
            totalPages,
            onNextPage,
            onBackPage,
            onchangeLimit,
            onChangePage,
            onFinalPage,
            backInitialPage,
        },
        search: { debounceTerm, onSearchByName },
    };
}

export default usePaginator;
