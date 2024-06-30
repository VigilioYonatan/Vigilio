# @vigilio/valibot

<div style="display:flex; gap:1rem;">
<img src="./logo.png" width="150" style="object-fit: contain"/>
<img src="./valibot.png" width="150" style="object-fit: cover"/>
</div>
<br/>
Forked valibot 0.20.1 , library to valid forms o data object.

### Getting Started

```ts
import * as v from "@vigilio/valibot";
const testSchema = v.object({
    name: v.string("This field is required."), // custom message
    email: v.string([v.minLength(4)]), // default is spanish error messagef
    password: v.string(),
});

type TestSchema = v.Input<typeof testSchema>;

function test() {
    try {
        const data = v.parse(testSchema, { email: "xd", password: "" }); //
    } catch (error) {
        console.log(error.message);
    }
}
test();
```

### import

```ts
import { object, string, type Input, minLength } from "@vigilio/valibot";
const testSchema = object({
    name: string("This field is required."),
    email: string([minLength(4)]),
    password: string(),
});

type TestSchema = Input<typeof testSchema>;
```

### Async

```ts
const testSchema = v.objectAsync({
    name: v.stringAsync("This field is required."),
    email: v.stringAsync([v.minLength(4)]),
    password: v.stringAsync(),
});

type TestSchema = v.Input<typeof testSchema>;

function test() {
    v.parseAsync(testSchema, { email: "xd", password: "" });
}
test();
```

### custom

```ts
export const usersStoreDto = omit(
    // omit to omit. you can pick,omit,merge,etc..
    usersSchema,
    ["id"], //
    [
        // custom validation
        (input) => {
            const validPassword = input.password !== "test";
            if (validPassword) {
                return getPipeIssues("password", "password no similar", input);
            }
            return getOutput(input);
        },
    ]
);
```

# MORE INFORMATION

https://valibot.dev/guides/introduction/ -- i recommend find 0.20.1 version

### REACT HOOK FORM RESOLVER

```

```