# @Vigilio/react-table

A simple react Hooks library for table.

```bash
npm add  tslib
npm add @vigilio/react-paginator

```

### Getting Started

## useTable

API REFERENCE

```tsx
{
      const {  table: {
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
    }}=useTable({
    columns: columns,
    pagination: { limit: 10, offset: 0 },
});
```

```tsx
import { useEffect } from "react";
import useTable, { Columns } from "./useTable";
const columns: Columns<{ name: string }, "index" | "image" | "acciones"> = [
    {
        key: "index",
        cell(_, index) {
            return index;
        },
    },
    { key: "name", isSort: true },
    {
        key: "image",
        cell(props, index, _methods) {
            return (
                <>
                    <img
                        width={50}
                        height={50}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            index + 1
                        }.png`}
                        alt={props.name}
                    />
                </>
            );
        },
    },
    {
        key: "acciones",
        cell(props) {
            return (
                <div>
                    <button
                        type="button"
                        onClick={() => console.log(props.name)}
                    >
                        Editar
                    </button>
                </div>
            );
        },
    },
];
const App = () => {
    interface ResultApi {
        count: number;
        results: { name: string }[];
    }
    const { pagination, updateData, search, table } = useTable(
        { columns },
        true // false for default to see on the url when you change the page
    );
    async function fetching() {
        const url = new URLSearchParams();
        url.append("offset", String(pagination.value.offset));
        url.append("limit", String(pagination.value.limit));
        // data.append("search", String(search.debounceTerm.value));
        // your backend could have to this queries. you can play with orm

        // YOUR API shoould be response { data:[],total}
        // example https://pokeapi.co/  - https://pokeapi.co/api/v2/pokemon
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?${url}`
        );
        const result: ResultApi = await response.json();
        updateData({
            count: result.count,
            result: result.results,
            methods: { fetching },
        });
    }

    useEffect(() => {
        fetching();
    }, [pagination.page, pagination.value.limit]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {table.Thead().map((val) => (
                            <th
                                key={val.key}
                                onClick={() => {
                                    if (val.isSort) {
                                        val.sorting(val.key);
                                    }
                                }}
                            >
                                {val.isSort ? <span>{"^"}</span> : val.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.TBody.Row().map((data) => (
                        <tr key={data.name}>
                            {table.TBody.Cell(data).map((val) => (
                                <td key={val.key}>{val.value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* paginator */}
            {/* @vigilio/react-paginator */}
        </div>
    );
};
```
