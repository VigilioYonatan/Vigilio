# @Vigilio/preact-table

A simple preact Hooks library for table.

```bash
npm add -D tslib

```

### Getting Started

## useTable

API REFERENCE

```ts
{
      const {  table: {
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
    }}=useTable({
    columns: columns,
    pagination: { limit: 10, offset: 0 },
});
```

```tsx
import { Columns } from "@vigilio/preact-table";

const columns: Columns<{ name: string }, "index" | "acciones"> = [
    {
        key: "index",
    },
    {
        key: "name",
        cell: (props) => props.name.toUpperCase(),
        header: (head, sort) => (
            <div>
                <button type="button" onClick={() => sort("name")}>
                    {"^"}
                </button>
                <p>{head.toUpperCase()}</p>
            </div>
        ),
    },

    {
        key: "acciones",
        cell(index) {
            return (
                <div>
                    <button>Editar</button>
                    <button
                        onClick={() => {
                            console.log(index);
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            );
        },
    },
];
const { pagination, sort, table, updateData } = useTable({
    columns: columns,
    pagination: { limit: 10, offset: 0 },
});
// You can use @vigilio/react-fetching
const { refetch, isLoading } = useQuery(
    "/product",
    async function (url) {
        const data = new URLSearchParams();
        data.append("offset", String(pagination.pagination.offset));
        data.append("limit", String(pagination.pagination.limit));
        for (const [key, value] of Object.entries(sort.sort)) {
            data.append(key, value);
        }
        const response = await fetch(`http://localhost:4000${url}?${data}`);
        const result = await response.json();
        return result;
    },
    {
        onSuccess(data) {
            updateData(data.results, { total: data.count });
        },
    }
);

 useEffect(() => {
        refetch();
    }, [pagination.page, pagination.pagination.limit, sort.sort]);
    <h1>@VIGILIO/TABLE</h1>
    <div>
        <table >
                    <thead >
                        <tr>
                            {table.Thead().map((val) => (
                                <th
                                    key={val.key}
                                >
                                    {val.value}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table.TBody.Row().map((data) => (
                            <tr

                                key={data.index}
                            >
                                {table.TBody.Cell(data).map((val) => (
                                    <td  key={val.key}>
                                        {val.value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
        <nav>
                    <ul >
                        <li>
                            <button
                                type="button"
                                onClick={pagination.onBackPage}

                            >{"<"}
                            </button>
                        </li>
                        <div >
                            {pagination
                                .paginator()
                                .map(({ isActualPage, page }) => {
                                    return (
                                        <li key={page}>
                                            {isActualPage ? (
                                                <span >
                                                    {page}
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        pagination.onChangePage(
                                                            page
                                                        )
                                                    }

                                                >
                                                    {page}
                                                </button>
                                            )}
                                        </li>
                                    );
                                })}
                        </div>

                        <li>
                            <button
                                onClick={pagination.onNextPage}
                                type="button"

                            >
                               {">"}
                            </button>
                            <button
                                onClick={pagination.onFinalPage}
                                type="button"

                            >
                                {">>"}
                            </button>
                        </li>
                    </ul>
                    <div className="">
                        <label className="text-white" htmlFor="">
                            Limit
                        </label>
                        <input
                            type="text"
                            placeholder="Max Limit"
                            onChange={(e) =>
                                pagination.onchangeLimit(Number(e.target.value))
                            }
                        />
                    </div>
                </nav>
    </div>
```
