# @Vigilio/vue-form

A simple vue Hooks library for forms.

```bash
npm add -D tslib

```

### Getting Started

## useTable

API REFERENCE

```ts
const {
    handleSubmit,
    control,
    opciones,
    reset,
    values,
    errores,
    methods: { onFocus, setValues, setErrors, setValue, getValue, setError },
    formState,
} = useForm({ defaultValues, type });
```

```vue
<script lang="ts" setup>
const { control, values, handleSubmit, reset, errores, methods } =
    useForm<User>({
        defaultValues: {
            nombre: "Yonatan",
            juegos: ["crash", "god of war"],
            color: "#0070C0",
        },
        type: "blur",
    });
const submit = handleSubmit(() => {
    reset();
});

// You can use @vigilio/vue-fetching mutation
</script>
<template>
    <form @submit="submit">
        <div>
            <div>
                <label for="">Nombre</label>
                <input
                    type="text"
                    placeholder="nombre"
                    v-bind="
                        control('nombre', {
                            required: true,
                        })
                    "
                />
                <p v-if="errores.nombre">
                    {{ errores.nombre.message }}
                </p>
            </div>
            <div>
                <label for="telefono">Telefono</label>
                <input
                    type="text"
                    placeholder="XXX-XXX-XXX"
                    v-bind="
                        control('telefono', {
                            required: true,
                            stopValue: 11,
                        })
                    "
                />
                <p v-if="errores.telefono">
                    {{ errores.telefono.message }}
                </p>
            </div>
            <div>
                <label for="">edad</label>
                <input
                    type="text"
                    placeholder="edad"
                    v-bind="
                        control('edad', {
                            required: true,
                            min: 1,
                            max: 150,
                            isNumber: true,
                        })
                    "
                />
                <p v-if="errores.edad">
                    {{ errores.edad.message }}
                </p>
            </div>
        </div>
        <div>
            <div>
                <label for="">Precio</label>
                <input
                    type="text"
                    placeholder="precio"
                    v-bind="
                        control('precio', {
                            transformValue: Number,
                            required: true,
                            min: 0,
                            max: 10000,
                            isNumber: true,
                        })
                    "
                />
                <p v-if="errores.precio">
                    {{ errores.precio.message }}
                </p>
            </div>
        </div>
        <div>
            <div>
                <label for="">Categoria</label>
                <select
                    v-bind="
                        control('categoria', {
                            required: true,
                            transformValue: Number,
                        })
                    "
                >
                    <option value="">Escoger</option>
                    <option
                        :value="value"
                        v-for="{ title, value } in categorias"
                    >
                        {{ title }}
                    </option>
                </select>
                <p v-if="errores.categoria">
                    {{ errores.categoria.message }}
                </p>
            </div>
            <div>
                <label for="">Sexo</label>
                <div>
                    <div>
                        <label for="masculino">Masculino</label>
                        <input
                            type="radio"
                            v-bind="
                                control('sexo', {
                                    required: true,
                                    value: 'M',
                                })
                            "
                        />
                    </div>
                    <div>
                        <label for="femenino">Femenino</label>
                        <input
                            type="radio"
                            v-bind="
                                control('sexo', {
                                    required: true,
                                    value: 'F',
                                })
                            "
                        />
                    </div>
                </div>
                <p v-if="errores.sexo">
                    {{ errores.sexo.message }}
                </p>
            </div>
            <div>
                <label for="">Juegos</label>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            :checked="
                                        methods
                                        .getValue('juegos')
                                        ?.some((c:string) => c === 'crash')
                                "
                            v-bind="
                                    control('juegos', {
                                        required: true,
                                        value: ('crash' as  Juegos),
                                        isArray:true

                                    })
                                "
                        />
                        <label for="masculino">Crash Bandicoot</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            :checked="
                                    methods
                                        .getValue('juegos')
                                        .some((c:string) => c === 'god of war')
                                "
                            v-bind="
                                    control('juegos', {
                                        required: true,
                                        value: ('god of war' as Juegos),
                                        isArray:true
                                    })
                                "
                        />
                        <label for="masculino">Gof of war</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            :checked="
                                    methods
                                        .getValue('juegos')
                                        .some((c:string) => c === 'gta')
                                "
                            v-bind="
                                    control('juegos', {
                                        required: true,
                                        value: ('gta' as Juegos ),
                                        isArray:true
                                    })
                                "
                        />
                        <label for="masculino">Grand theft auto</label>
                    </div>
                </div>

                <p v-if="errores.sexo">
                    {{ errores.sexo.message }}
                </p>
            </div>
        </div>
        <div>
            <label for="">Descripcion</label>
            <textarea
                type="text"
                placeholder="descripcion"
                rows="5"
                v-bind="
                    control('descripcion', {
                        required: true,
                    })
                "
                >{{ values.descripcion }}</textarea
            >

            <p v-if="errores.descripcion">
                {{ errores.descripcion.message }}
            </p>
        </div>
        <!-- Image -->
        <div>
            <div>
                <label for="">Imagen</label>
                <input
                    type="file"
                    placeholder="edad"
                    v-bind="control('file',{
                        custom:e=>validateFile(e,{
                            required:true,
                            minFiles:3
                        })
                        },(e) => (e.target as HTMLInputElement).files)"
                    multiple
                />
                <p v-if="errores.file">
                    {{ errores.file.message }}
                </p>
            </div>
            <div class="mb-3">
                <label for="">Color</label>
                <input
                    type="color"
                    v-bind="
                        control('color', {
                            required: true,
                        })
                    "
                />
                <p v-if="errores.color">
                    {{ errores.color.message }}
                </p>
            </div>
        </div>

        <button
            :style="`background-color: ${methods.getValue('color')}`"
            type="submit"
        >
            Enviar
        </button>
        <button type="button" @click="methods.onFocus('descripcion')">
            Focus
        </button>
        <div>
            <p>Values</p>
            <div>
                <div v-for="value of Object.entries(values)">
                    <p>
                        {{ value[0] }}
                    </p>
                    :
                    <b>{{ valueFilter(value) }}</b>
                </div>
            </div>
            <div class="">
                <p>Errors</p>
                <div>
                    <div v-for="value of Object.entries(errores)">
                        <p>
                            {{ value[0] }}
                        </p>
                        :
                        <b>{{ value[1].message }}</b>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
```
