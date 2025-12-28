import { computed, effect, useSignal } from "@preact/signals";
import { useDebounce } from "./useDebounce.js";
export interface Pagination {
    limit?: number;
    offset?: number;
    maxPagesShown?: number;
    page?: number;
}
export type UpdateDate = Pagination & { total: number | null };
export type UsePaginator = {
    updateData: (paginate?: UpdateDate) => void;
    pagination: {
        value: Required<Omit<Pagination, "page">> & { total: number | null };
        page: number;
        paginator: {
            totalItems: number | null;
            currentPage: number;
            totalPages: number;
            startPage: number;
            endPage: number;
            pages: number[];
        };
        startingBreakPointButtonIfCondition: boolean;
        endingBreakPointButtonIfCondition: boolean;
        currentPage: number;
        totalPages: number;
        onNextPage: (pemittion?: boolean) => void;
        onBackPage: (pemittion?: boolean) => void;
        onchangeLimit: (limit?: number) => void;
        onChangePage: (pag: number) => void;
        onFinalPage: () => void;
        backInitialPage: () => void;
    };
    search: {
        value: string;
        debounceTerm: string;
        onSearchByName: (term: string) => void;
    };
};
export function usePaginator(
    props?: Pagination,
    isQueryPage = false
): UsePaginator {
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

    const page = useSignal(
        isQueryPage ? Number(params.get("page")) || pages : pages
    );
    const search = useSignal("");

    const debounceTerm = useDebounce(search.value);
    const pagination = useSignal<
        Required<Omit<Pagination, "page">> & {
            total: number | null;
        }
    >({
        limit,
        offset: (page.value - 1) * limit + offset,
        maxPagesShown,
        total: null,
    });

    function updateData(paginate?: UpdateDate) {
        pagination.value = { ...pagination.value, ...paginate };
    }
    effect(() => {
        if (isQueryPage && page.value > 1) {
            params.set("page", String(page.value));
            const nuevaURL = `${url.origin}${
                url.pathname
            }?${params.toString()}`;
            window.history.pushState({}, "", nuevaURL);
        }
    });

    /* PAGINATION */
    function onNextPage(pemittion = true) {
        if (page.value === totalPages.value && pemittion) return;
        pagination.value = {
            ...pagination.value,
            offset: pagination.value.offset + pagination.value.limit,
        };
        page.value = page.value + 1;
    }
    function onBackPage(pemittion = true) {
        if (page.value === 1 && pemittion) return;
        pagination.value = {
            ...pagination.value,
            offset: pagination.value.offset - pagination.value.limit,
        };

        page.value = page.value - 1;
    }
    function onchangeLimit(limit = 10) {
        if (page.value > 1) {
            onChangePage(1);
        }
        pagination.value = {
            ...pagination.value,
            limit,
        };
    }

    function onChangePage(pag: number) {
        pagination.value = {
            ...pagination.value,
            offset: (pag - 1) * pagination.value.limit,
        };
        page.value = pag;
    }
    function onFinalPage() {
        pagination.value = {  
            ...pagination.value,
            offset: (totalPages.value - 1) * pagination.value.limit,
        };
        page.value = totalPages.value;
    }

    function backInitialPage() {
        pagination.value = {
            ...pagination.value,
            offset: (page.value - 1) * pagination.value.limit,
        };
        page.value = 1;
    }
    const currentPage = computed(
        () => Math.floor(pagination.value.offset / pagination.value.limit) + 1
    );

    const totalPages = computed(() =>
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        Math.ceil(pagination.value.total! / pagination.value.limit)
    );
    /*  paginator */
    const paginator = computed(() => {
        let startPage: number;
        let endPage: number;

        if (totalPages.value <= pagination.value.maxPagesShown) {
            startPage = 1;
            endPage = totalPages.value;
        } else {
            const maxPagesShownBeforeCurrentPage = Math.floor(
                pagination.value.maxPagesShown / 2
            );
            const maxPagesShownAfterCurrentPage =
                Math.ceil(pagination.value.maxPagesShown / 2) - 1;
            if (currentPage.value <= maxPagesShownBeforeCurrentPage) {
                startPage = 1;
                endPage = pagination.value.maxPagesShown;
            } else if (
                currentPage.value + maxPagesShownAfterCurrentPage >=
                totalPages.value
            ) {
                startPage =
                    totalPages.value - pagination.value.maxPagesShown + 1;
                endPage = totalPages.value;
            } else {
                startPage = currentPage.value - maxPagesShownBeforeCurrentPage;
                endPage = currentPage.value + maxPagesShownAfterCurrentPage;
            }
        }
        const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
            (i) => startPage + i
        );

        return {
            totalItems: pagination.value.total,
            currentPage: currentPage.value,
            totalPages: totalPages.value,
            startPage: startPage,
            endPage: endPage,
            pages: pages,
        };
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
    function onSearchByName(term: string) {
        if (page.value > 1) {
            onChangePage(1);
        }
        search.value = term;
    }
    return {
        updateData,
        pagination: {
            value: pagination.value,
            page: page.value,
            paginator: paginator.value,
            startingBreakPointButtonIfCondition:
                startingBreakPointButtonIfCondition.value,
            endingBreakPointButtonIfCondition:
                endingBreakPointButtonIfCondition.value,
            currentPage: currentPage.value,
            totalPages: totalPages.value,
            onNextPage,
            onBackPage,
            onchangeLimit,
            onChangePage,
            onFinalPage,
            backInitialPage,
        },
        search: { value: search.value, debounceTerm, onSearchByName },
    };
}
