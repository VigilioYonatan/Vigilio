# @Vigilio/vue-table

A simple vue Hooks library for table.

```bash
npm add tslib
npm add @vigilio/vue-paginator # 2kb
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
        pagination, // @vigilio/vue-paginator
        sort: {
            sort,
            sorting,
        },
    }}=useTable({
    columns: columns,
    pagination: { limit: 10, offset: 0 },// @vigilio/vue-paginator
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
        isSort: true,
    },

    {
        key: "acciones",
        cell: () => {
            function clicked() {
                console.log("hola bro");
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
    "/paginator/product",
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
            updateData(
                { total: data.count, data: data.results },
                // if you want to add methods {}
            );
        },
    }
);

watch(
    [pagination.page, () => pagination.value.limit, sort.sort],
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
                        <template v-if="typeof value === 'string'">{{
                            value
                        }}</template>
                        <component v-else :is="value" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <p v-if="isLoading">loading...</p>
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
                        <template v-if="typeof value === 'string'">{{
                            value
                        }}</template>
                        <component v-else :is="value" />
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- if you want to see paginator  -->
        <!-- @vigilio/vue-paginator -->
    </div>
</template>
```
