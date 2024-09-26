# control-react-native-hook-form

```bash
#   Install react hook form
npm install @vigilio/controller-react-native-hook-form
#or
yarn add @vigilio/controller-react-native-hook-form

```

Simple package to optimize code using react hook form when you use Controller

## basic Example

```tsx
// components/FormControl.jsx
import { FormController } from "@vigilio/controller-react-native-hook-form";

const FormControl = (props) => {
    return (
        <FormController style={{}} {...props}>
            <FormController.label style={{}} />
            <FormController.control style={{}} customError={{}} />
            <FormController.error style={{}} />
        </FormController>
    );
};

export default FormControl;
```

-   You can add this file in another folder

```ts
// utils/forms/userForm.ts
export const formAddUsuario = {
    name: {
        title: "name",
        name: "name",
        placeholder: "username",
        rules: { required: { message: "This field is required", value: true } }, //
        inputMode: "default",
    },
    password: {
        title: "password",
        inputMode: "default",
        name: "password",
        placeholder: "user password",
        rules: { required: { message: "This field is required", value: true } },
    },
    // ... more
};
```

```tsx
// form
const App = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); //
    };

    return (
        <>
            <FormControlBasic control={control} {...addProductoForm.name} />
            <FormControlBasic control={control} {...addProductoForm.password} />
            <Button title="send" onPress={handleSubmit(onSubmit)} />
        </>
    );
};
```

## Custom

if you want to customize you form control

```tsx
// file control example
import {
    FormController,
    FormControlComponent,
    FormControlPropsTotal,
} from "control-react-hook-form";

const FormControlCustom = (props) => {
    return (
        <FormController style={{}} custom {...props}>
            {({ props, renderMethods }) => {
                const { placeholder, onChange, value, ...rest } = props; // properties react hook form controller like error , placeholder,value,onChange,... etc
                return (
                    <>
                        <FormController.label style={{}} />
                        <TextInput
                            {...rest}
                            onChange={(value) => onChange(value)}
                        />
                        <FormController.error style={{}} />
                    </>
                );
            }}
        </FormController>
    );
};
```

## Using Typescript

```tsx
import { FormController, FormControlComponent } from "control-react-hook-form";

const FormControl = <T extends object>(props: FormControlComponent<T>) => {
    return (
        <FormController style={{}} {...props}>
            <FormController.label style={{}} />
            <FormController.control style={{}} customError={{}} />
            <FormController.error style={{}} />
        </FormController>
    );
};

export default FormControl;
```

```ts
interface Usuario {
    id: string;
    name: string;
    password: string;
}

export type AddUsuario = Omit<Usuario, "id">;

export const formAddUsuario: FormControlsCustom<AddUsuario> = {
    name: {
        title: "name",
        name: "name",
        placeholder: "user name",
        inputMode: "default",
        rules: { required: { message: "This field is required", value: true } },
    },
    password: {
        title: "password",
        inputMode: "password",
        name: "numeric",
        placeholder: "user password ",
        rules: { required: { message: "This field is required", value: true } },
    },
};

const App = () => {
    const { control, handleSubmit } = useForm<AddUser>();

    const onSubmit = (data: AddUser) => {
        console.log(data); //
    };

    return (
        <>
            <FormControlBasic control={control} {...addProductoForm.name} />
            <FormControlBasic control={control} {...addProductoForm.password} />
            <Button title="send" onPress={handleSubmit(onSubmit)} />
        </>
    );
};
```

```tsx
const FormControlCustom = (props) => {
    return (
        <FormController style={{}} custom {...props}>
            (
            {({ props, renderMethods }) => {
                const { placeholder, onChange, value, ...rest } = props; // properties react hook form controller like error , placeholder,value,onChange,... etc
                return (
                    <>
                        <FormController.label style={{}} />
                        <TextInput
                            {...rest}
                            onChange={(value) => onChange(value)}
                        />
                        <FormController.error style={{}} />
                    </>
                );
            }}
            ) as any
        </FormController>
    );
};
```

- With tailwindcss natilwind
  

```jsx
export function ControlCustomTailwind<T extends object>(props: FormControlComponent<T>) {
  return (
    <FormController {...props} custom>
      {
        (({props: properties, renderMethods}: FormControlPropsTotal<T>) => {
          return (
            <>
              <Text className="">{props.title}</Text>
              <TextInput
                className=""
                {...properties}
                onChangeText={value => properties.onChange(value)}
              />
              <Text className="">
                {renderMethods.error && renderMethods.error.message}
              </Text>
            </>
          );
        }) as any
      }
    </FormController>
  );
}

```