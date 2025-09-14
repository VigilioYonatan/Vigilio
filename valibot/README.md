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
    address: v.object({ zip: string() }),
    enabled: v.boolean(),
    gnre: union([literal("male"), literal("female")]),
    date: coerce(date(), (val) => new Date(val)),
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

https://valibot.dev/guides/introduction/ --

### REACT HOOK FORM RESOLVER

```

```
