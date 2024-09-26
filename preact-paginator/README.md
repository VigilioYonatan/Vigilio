# @Vigilio/preact-table

A simple preact Hooks library for table.

```bash
npm add tslib
npm add @preact/signals

```

### Getting Started

## useTable

API REFERENCE

```tsx
function Component() {
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
    }, [pagination.page, pagination.value.limit, search.debounceTerm]);
    let component: null | JSX.Element = null;
    if (isLoading) {
        component = <div>cargando...</div>;
    }
    if (isFetching) {
        component = <div>fetching...</div>;
    }
    if (isSuccess) {
        component = <div>{JSON.stringify(data?.results)}</div>;
    }
    if (isError) {
        component = <div>{JSON.stringify(error, null, 3)}</div>;
    }

    return (
        <div class="text-white">
            <button
                class="bg-red-600 px-4 rounded-sm"
                type="button"
                onClick={() => refetch()}
            >
                Refetch
            </button>

            {component}
            {/* search */}
            <div>
                <label for="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="search by name"
                    value={search.value}
                    onChange={(e) =>
                        search.onSearchByName(e.currentTarget.value)
                    }
                />
            </div>
            {/* limit */}
            <div>
                <label for="name">limit:</label>
                <input
                    type="number"
                    id="name"
                    value={String(pagination.value.limit)}
                    placeholder={String(pagination.value.limit)}
                    onChange={(e) =>
                        pagination.onchangeLimit(Number(e.currentTarget.value))
                    }
                />
            </div>
            <div class="flex items-center gap-2">
                <button type="button" onClick={() => pagination.onBackPage()}>
                    {"<"}
                </button>
                <button onClick={() => pagination.onNextPage()} type="button">
                    {">"}
                </button>
            </div>

            <pre>
                {JSON.stringify({
                    isLoading,
                    isError,
                    data: data?.results,
                    error,
                    isFetching,
                    isSuccess,
                })}
            </pre>
        </div>
    );
}
```
