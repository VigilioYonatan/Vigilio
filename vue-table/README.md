# @Vigilio/vue-table

A simple vue Hooks library for table.

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

```vue
<script lang="ts" setup>
import { Columns } from "@vigilio/vue-table";

const columns: Columns<{ name: string }, "index" | "acciones"> = [
    {
        key: "index",
        header: () => {
            return h("div", { class: "flex items-center" }, [
                h("input", {
                    id: "checkbox-table-search-1",
                    type: "checkbox",
                }),
                h(
                    "label",
                    {
                        for: "checkbox-table-search-1",
                    },
                    "checkbox"
                ),
            ]);
        },
        cell: () => {
            return h("div", { class: "flex items-center" }, [
                h("input", {
                    id: "checkbox-table-search-1",
                    type: "checkbox",
                }),
            ]);
        },
    },
    {
        key: "name",
        cell: (props, index) => props.name.toUpperCase() + " " + (index + 1),
        header: (props) => h("span", null, props + "^"),
    },

    {
        key: "acciones",
        cell: () => {
            function clicked() {
                console.log("hola mierda");
            }
            return h("div", null, [
                h("button", { class: "" }, "Editar"),
                h(
                    "button",
                    {
                        onClick: clicked,
                    },
                    "Eliminar"
                ),
            ]);
        },
    },
];
const { pagination, sort, table, updateData } = useTable({
    columns: columns,
    pagination: { limit: 10, offset: 0 },
});
// You can use @vigilio/vue-fetching
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

watch(
    [pagination.page, () => pagination.pagination.limit, sort.sort],
    () => {
        refetch();
    },
    { deep: true }
);
</script>
<template>
    <h1>@VIGILIO/TABLE</h1>
    <div>
        <table>
            <thead>
                <tr>
                    <th scope="col" v-for="{ value } in table.Thead()">
                        <template v-if="typeof value === 'string' ">{{ value }}</template>
                     <component  v-else :is="value"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <p v-if="isLoading">Cargandoo...</p>

                <tr
                    v-else
                    v-for="{ ...data } in table.TBody.Row()"
                    :key="data.index"
                >
                    <td
                        class="px-6 py-4"
                        v-for="{ key, value } in table.TBody.Cell(data)"
                        :key="key"
                    >
                        <template v-if="typeof value === 'string' ">{{ value }}</template>
                     <component  v-else :is="value"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav>
            <ul>
                <li>
                    <button
                        type="button"
                        @click="() => pagination.onBackPage()"
                    >
                        {{ "<" }}
                    </button>
                </li>

                <div>
                    <li
                        :key="page"
                        v-for="{ isActualPage, page } in pagination.paginator()"
                    >
                        <span v-if="isActualPage">
                            {{ page }}
                        </span>
                        <button
                            v-else
                            @click="() => pagination.onChangePage(page)"
                        >
                            {{ page }}
                        </button>
                    </li>
                </div>

                <li>
                    <button @click="pagination.onNextPage" type="button">
                        {{ ">" }}
                    </button>
                </li>
            </ul>
            <div class="">
                <label class="text-white" for=""> Limite </label>
                <input
                    type="text"
                    placeholder="Max Limit"
                    class="w-[30px]"
                    @input="
                        (e) => {
                            pagination.onchangeLimit(
                                Number((e.target as HTMLInputElement).value)
                            );
                        }
                    "
                />
            </div>
        </nav>
    </div>
</template>
```
