# @Vigilio/Preact-fetching

A simple Preact Hooks library for data fetching.

```cmd
pnpm add @vigilio/preact-fetching
pnpm add @preact/signals
pnpm add tslib
```

### Getting Started

### useQuery: to consume data fetching GET

```tsx
    function getUsers = async(url:string) => {
        const response = await fetch("http://yourhost/api" + url);
        const result:Datatype = await response.json();
        return result;
    }


    const { isLoading, data, isSuccess,isError,...rest} = useQuery("/users", getUsers);

    let component = null

    if(isLoading){
        component = <Spinner/>
    }
    if(isSuccess){
        component = <div>{JSON.stringify(data)}</div>
    }
    if(isError){
        component = <div>Oppss error!</div>
    }
    <div>
        {component}
    </div>;
```

-   Api reference

```ts
const options = {};

const showUser = useQuery("/users", getUsers, options);

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
    clean: true, // it no clean when refetch data //default clean,
    transformData: (data) => Data, // callback that modify data
};
```

### useMutation: to consume data fetching POST-PUT-DELETE-PATCH

```tsx
interface Body {
    name: string;
}

async function addUser(url: string, body: Body) {
    const data = await fetch(url, {
        method: "POST",
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
const [name, setName] = useState("");

// mutate
function handleSubmit(e: JSXInternal.TargetedEvent) {
    e.preventDefault();

    //mutate(body,options) :
    mutate(
        { nombre },
        {
            onSuccess: (data) => {
                console.log(data);
                // you can pass for props  showUser to update users GET
                //  when add a user for example
                showUser.refetching();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
}

<form onSubmit={handleSubmit}>
    <div className="">
        <label htmlFor="">name</label>
        <input
            type="text"
            value={nombre}
            placeholder="name"
            onChange={(e) => setName(e.currentTarget.value)}
        />
    </div>
    <button type="submit">{isLoading ? "loading" : "send"}</button>
</form>;
```

You can use Mutate async if you prefer

```ts
const { mutateAsync, isLoading, isSuccess, ...rest } = useMutation(
    "/users",
    addUser
);
// mutateAsync
async function handleSubmit(e: JSXInternal.TargetedEvent) {
    e.preventDefault();
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

Dinamic Params

```tsx
interface UserTypeApi {
    id: number;
    nombre: string;
}
async function showById(url: string) {
    const { data } = await baseurl.get<UserTypeApi>(url);
    return data;
}
export function UserPageById() {
    const { id } = useParams() as { id: string };

    const { isLoading, data, isSuccess, isError, error } = useQuery(
        `/users/${id}`,
        showById
    );
    let component = null;
    if (isLoading) {
        component = <h2>Cargandoo...</h2>;
    }
    if (isSuccess) {
        component = <p>{JSON.stringify(data)}</p>;
    }
    if (isError) {
        component = <p>{JSON.stringify(error)}</p>;
    }
    return <div>{component}</div>;
}
```
