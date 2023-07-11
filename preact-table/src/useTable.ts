import { JSX } from "preact/jsx-runtime";
import { useMemo, useState } from "preact/hooks";

type KeyColumn<T, K extends string> = keyof (T & {
    [A in K]: string;
});
export type Columns<T, K extends string> = {
    key: KeyColumn<T, K>;
    header?:
        | string
        | ((
              props: KeyColumn<T, K>,
              sorting: (key: keyof T) => void
          ) => JSX.Element | JSX.Element[] | string);
    cell?:
        | KeyColumn<T, K>
        | ((props: T, index: number) => JSX.Element | JSX.Element[] | string);
}[];
interface UseTableProps<T extends object, K extends string> {
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
    const [data, setData] = useState<T[]>([]);
    const {
        limit = 20,
        offset = 0,
        total = data.length,
    } = props.pagination || {
        limit: 20,
        offset: 0,
        total: data.length,
    };

    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState<
        Required<Pagination & { total: number }>
    >({
        limit,
        offset,
        total,
    });

    const [sort, setSort] = useState<{
        [x: string]: string;
    }>({});

    const currentPage = useMemo(
        () => Math.floor(pagination.offset / pagination.limit) + 1,
        [pagination.offset, pagination.limit]
    );

    const totalPages = useMemo(() => {
        return Math.ceil(pagination.total / pagination.limit);
    }, [pagination.limit, pagination.total]);

    function updateData(data: T[], paginate?: Pagination) {
        setData(data);
        if (paginate) {
            setPagination({ ...pagination, ...paginate });
        }
    }

    /* PAGINATION */
    function onNextPage() {
        setPagination({
            ...pagination,
            offset: pagination.offset + 10,
        });
        setPage(page + 1);
    }
    function onBackPage() {
        setPagination({
            ...pagination,
            offset: pagination.offset - 10,
        });
        setPage(page - 1);
    }
    function onchangeLimit(limit = 10) {
        setPagination({ ...pagination, limit });
    }

    function onChangePage(page: number) {
        setPagination({
            ...pagination,
            offset: (page - 1) * pagination.limit,
        });
        setPage(page);
    }
    function onFinalPage() {
        setPagination({
            ...pagination,
            offset: (totalPages - 1) * pagination.limit,
        });
        setPage(totalPages);
    }
    function backInitialPage() {
        setPagination({
            ...pagination,
            offset: (page - 1) * pagination.limit,
        });
        setPage(1);
    }

    function paginator() {
        return Array.from({ length: totalPages }).map((_, i) => {
            const startPage = Math.max(
                1,
                page - Math.floor(pagination.limit / 2)
            );
            const endPage = Math.min(
                totalPages,
                startPage + pagination.limit - 1
            );

            return {
                startPage,
                endPage,
                totalPages,
                actualPage: page,
                isActualPage: page === i + 1,
                page: i + 1,
            };
        });
    }

    /* SORTING */
    function sorting(key: keyof T) {
        const sorted = {
            [key]: (sort as any)[key] === "ASC" ? "DESC" : "ASC",
        };
        setSort(sorted);
    }

    /* TABLE */
    function Thead() {
        return props.columns.map(({ key, header }) => {
            let value: any = key;
            if (header && header instanceof Function) {
                value = header(key, sorting);
            }
            if (typeof header === "string") {
                value = header;
            }
            return { key, value };
        });
    }

    function Row() {
        return data.map((data, index) => ({
            ...data,
            index,
        }));
    }

    function Cell(data: any) {
        return props.columns.map(({ key, cell }) => {
            let value = data[key];
            if (cell && cell instanceof Function) {
                value = cell(data, pagination.offset + data.index);
            }
            if (typeof cell === "string") {
                value = data[cell];
            }
            return { key, value };
        });
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
