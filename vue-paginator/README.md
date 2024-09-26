# @Vigilio/vue-paginator

A simple vue Hooks library for make paginator.

```bash
npm add  tslib
pnpm add tslib
```

### Getting Started

```vue
<script lang="ts" setup>
import { watch, onMounted, ref } from "vue";
import usePaginator from "./usePaginator";
interface ResultApi {
    count: number;
    results: { name: string }[];
}
const { pagination, updateData, search } = usePaginator(undefined, true);
const data = ref<ResultApi["results"] | null>(null);

// you can use @tanstack/vue-query or @vigilio/vue-fetching
async function fetching() {
    const url = new URLSearchParams();
    url.append("offset", String(pagination.value.offset));
    url.append("limit", String(pagination.value.limit));
    // data.append("search", String(search.debounceTerm.value));
    // your backend could have to this queries. you can play with orm

    // YOUR API shoould be response { data:[],total}
    // example https://pokeapi.co/  - https://pokeapi.co/api/v2/pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?${url}`);
    const result: ResultApi = await response.json();

    data.value = result.results;
    updateData({ total: result.count });
    return result;
}

onMounted(() => {
    fetching();
});

// search.debounceTerm, if you want to search add
watch(
    [pagination.page, () => pagination.value.limit],
    () => {
        fetching();
    },
    { deep: true }
);
</script>
<template>
    <div style="display: flex; flex-wrap: wrap; justify-content: center">
        <div :key="name" v-for="({ name }, i) in data">
            <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pagination.value.offset + i + 1
                }.png`"
                alt=""
            />
            <span style="color: white">{{ name }}</span>
        </div>
    </div>

    <!-- paginator -->
    <div>
        <button
            @click="() => pagination.onBackPage()"
            style="
                color: white;
                background-color: rgb(40, 16, 255);
                padding: 0.1rem 0.4rem;
            "
            type="button"
        >
            {{ "<" }}
        </button>
        <button
            style="
                color: white;
                background-color: rgb(40, 16, 255);
                padding: 0.1rem 0.4rem;
            "
            @click="() => pagination.onNextPage()"
            type="button"
        >
            {{ ">" }}
        </button>
    </div>
    <!-- search -->
    <!-- <div>
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            placeholder="search by name"
            :value="search.debounceTerm"
            @input="search.onSearchByName"
        />
    </div> -->
    <!-- limit -->
    <div>
        <label for="name">limit:</label>
        <input
            type="text"
            id="name"
            :value="pagination.value.limit"
            :placeholder="String(pagination.value.limit)"
            @input="(e) => pagination.onchangeLimit(Number((e.target as HTMLInputElement).value))"
        />
    </div>
</template>
```

## useTable

API REFERENCE

```ts
const {
    pagination, // paginations values properties
    updateData, // to inserte data
    search, // search properties
} = usePaginator(
    {
        limit, // limit to show - default 10
        offset, // offset to start - default 0
        maxPagesShown, // when you use paginator show quantity buttons - default 5
        page, // what page you want to start
    },
    isQueryPage // if you want to change the url in the document - default false
);
```

### Paginator advanced

```vue
<template>
    <ul>
        <li>
            <button @click="() => pagination.onInitialPage()" type="button">
                {{ "<<" }}
            </button>
            <button @click="() => pagination.onBackPage()" type="button">
                {{ "<" }}
            </button>
        </li>
        <li v-if="pagination.startingBreakPointButtonIfCondition.value">
            <button type="button" @click="() => pagination.onChangePage(1)">
                1
            </button>
            <span>...</span>
        </li>
        <li :key="page" v-for="page in pagination.paginator.value.pages">
            <span v-if="pagination.currentPage.value === page">{{ page }}</span>
            <button
                v-else
                type="button"
                @click="() => pagination.onChangePage(page)"
            >
                {{ page }}
            </button>
        </li>
        <li v-if="pagination.endingBreakPointButtonIfCondition.value">
            <span>...</span>
            <button
                type="button"
                @click="
                    () => pagination.onChangePage(pagination.totalPages.value)
                "
            >
                {{ pagination.totalPages.value }}
            </button>
        </li>
        <li>
            <button type="button" @click="() => pagination.onNextPage()">
                {{ ">" }}
            </button>
            <button type="button" @click="() => pagination.onFinalPage()">
                {{ ">>" }}
            </button>
        </li>
    </ul>
</template>
```
