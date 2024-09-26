import { useEffect, useMemo, useState } from "react";
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

    const [page, setPage] = useState(
        isQueryPage ? Number(params.get("page")) || pages : pages
    );
    const [search, setSearch] = useState("");
    const debounceTerm = useDebounce(search);
    const [pagination, setPagination] = useState<
        Required<Omit<Pagination, "page">> & {
            total: number | null;
        }
    >({
        limit,
        offset: (page - 1) * limit + offset,
        maxPagesShown,
        total: null,
    });

    function updateData(paginate?: UpdateDate) {
        Object.assign(pagination, { ...paginate });
    }
    useEffect(() => {
        if (isQueryPage) {
            params.set("page", String(page));
            const nuevaURL = `${url.origin}${
                url.pathname
            }?${params.toString()}`;
            window.history.pushState({}, "", nuevaURL);
        }
    }, [page]);

    /* PAGINATION */
    function onNextPage(pemittion: boolean = true) {
        if (page === totalPages && pemittion) return;
        setPagination({
            ...pagination,
            offset: pagination.offset + pagination.limit,
        });

        setPage(page + 1);
    }
    function onBackPage(pemittion: boolean = true) {
        if (page === 1 && pemittion) return;
        setPagination({
            ...pagination,
            offset: pagination.offset - pagination.limit,
        });

        setPage(page - 1);
    }
    function onchangeLimit(limit = 10) {
        if (page > 1) {
            onChangePage(1);
        }
        setPagination({
            ...pagination,
            limit,
        });
    }

    function onChangePage(pag: number) {
        setPagination({
            ...pagination,
            offset: (pag - 1) * pagination.limit,
        });
        setPage(pag);
    }
    function onFinalPage() {
        setPage(totalPages);
    }

    function backInitialPage() {
        setPage(1);
    }
    const currentPage = useMemo(
        () => Math.floor(pagination.offset / pagination.limit) + 1,
        [pagination.offset, pagination.limit]
    );

    const totalPages = useMemo(
        () => Math.ceil(pagination.total! / pagination.limit),
        [pagination.total, pagination.limit]
    );
    /*  paginator */
    const paginator = useMemo(() => {
        let startPage: number, endPage: number;

        if (totalPages <= pagination.maxPagesShown) {
            startPage = 1;
            endPage = totalPages;
        } else {
            let maxPagesShownBeforeCurrentPage = Math.floor(
                pagination.maxPagesShown / 2
            );
            let maxPagesShownAfterCurrentPage =
                Math.ceil(pagination.maxPagesShown / 2) - 1;
            if (currentPage <= maxPagesShownBeforeCurrentPage) {
                startPage = 1;
                endPage = pagination.maxPagesShown;
            } else if (
                currentPage + maxPagesShownAfterCurrentPage >=
                totalPages
            ) {
                startPage = totalPages - pagination.maxPagesShown + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesShownBeforeCurrentPage;
                endPage = currentPage + maxPagesShownAfterCurrentPage;
            }
        }
        let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
            (i) => startPage + i
        );

        return {
            totalItems: pagination.total,
            currentPage: currentPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages,
        };
    }, [pagination.maxPagesShown, currentPage, totalPages]);

    const startingBreakPointButtonIfCondition = useMemo(() => {
        return paginator.pages[0] >= 3;
    }, [paginator.pages]);

    const endingBreakPointButtonIfCondition = useMemo(() => {
        return paginator.pages[paginator.pages.length - 1] < totalPages - 1;
    }, [paginator.pages, totalPages]);
    function onSearchByName(search: string) {
        if (page > 1) {
            onChangePage(1);
        }
        setSearch(search);
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
