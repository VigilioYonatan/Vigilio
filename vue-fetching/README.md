# @Vigilio/vue-fetching

A simple vue Hooks library for data fetching.

### Getting Started

### useQuery: to consume data fetching GET

```vue
<script lang="ts" setup>
function getUsers = async(url:string) => {
  const response = await fetch("http://yourhost/api" + url);
  const result:Datatype = await response.json();
  return result;
}
const { isLoading, data, isSuccess,isError,...rest} = useQuery("/users", getUsers);
</script>

<template>
    <p v-if="isLoading">Loading...</p>
    <p v-if="isError">error...{{ JSON.stringify(rest, error) }}</p>
    <p v-if="isSuccess">{{ JSON.stringify(data, null, 3) }}</p>
</template>
```

-   Api reference

```ts

const options ={
   skipFetching: boolean; // skip the fetch
   placeholderData; //  before consume fetch show placeholder
   transformData:; // custome response data
}

const showUser = useQuery("/users", getUsers,options);

const options = {
    skipFetching: false, // skip fetch ->default false
    placeholderData: null, //placeholder  ->default null
    transformData: null, //transform success data ->default null
    staleTime: null, // if you want refetch for a seconds 1 = 1000 ms
    refetchIntervalInBackground: false, // when the client change the page, it will refetch
    onError: null, // callback when the fetch is not success (err)=>{} //default null
    onSuccess: null, // callback when the fetch is  success (data)=>{} //default null
    refetchOnReconnect: false, // when the net back it fetching // default false
    delay: null, // delay to consume fetch //default null
    clean: true, // it no clean when refetch data //default clean
};
```

### useMutation: to consume data fetching POST-PUT-DELETE-PATCH

```vue
<script>
interface Body {
    name: string;
}
async function addUser(url: string, body: Body) {
    const data = await fetch(url, {
        method: "POST", // method
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return data;
}

const { mutate, isLoading, isSuccess, ...rest } = useMutation(
    "/users",
    addUser
);
const name = ref("");
// mutate
function onSubmit() {
    //mutate(body,options) :
    mutate(
        { name }, // inputs fields
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
}
</script>
<template>
    <template>
        <form @submit.prevent="onSubmit" novalidate>
            <div class="">
                <label for="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    v-model="name"
                    placeholder="your name"
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    </template>
</template>
```

You can use Mutate async if you prefer

```ts
const { mutateAsync, isLoading, isSuccess, ...rest } = useMutation(
    "/users",
    addUser
);
// mutateAsync
async function handleSubmit() {
    try {
        const data = await mutateAsync({ nombre });
        //
    } catch (err) {
        // your error response
    }
}
```

-   Api reference

```ts
// mutate options
{
    onSuccess?: (data) => {};
    onError?: (error) => {};
    transformData?: (data) => Data; // you cand modify response data
}
```

### USING AXIOS

```ts
const baseurl = axios.create({ baseURL: "http://yourhost/api" });

interface Api {
    id: number;
    name: string;
}

async function showUsers(url: string) {
    const { data } = await baseurl.get<Api[]>(url);
    return data;
}

const { isLoading, data, ...rest } = useQuery("/users", showUsers);

//....
```

## MORE EXAMPLES

Dinamic Params usando vue-router

```vue
<script langs="ts" setup>
interface UserTypeApi {
    id: number;
    nombre: string;
}
async function showById(url: string) {
    const { data } = (await baseurl.get) < UserTypeApi > url;
    return data;
}
const { id } = useRoute().params;
const { isLoading, data, isSuccess, isError, error } = useQuery(
    `/users/${id}`,
    showById
);
</script>
```
