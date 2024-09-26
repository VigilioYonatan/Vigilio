<script lang="ts" setup>
import { useForm } from "@vigilio/vue-form";
import { useMutation } from "@vigilio/vue-fetching";
import { BASE_URL } from "~/config/axios";
interface User {
    email: string;
    password: string;
}
const { control, handleSubmit, errores } = useForm<User>();
const { mutate, error, isError, isLoading } = useMutation(
    "/auth/login",
    async (url, user: User) => {
        const { data } = await BASE_URL.post(url, user);

        return data;
    },
    { retry: 0 }
);
const onLogin = handleSubmit((data) => {
    mutate(data, {
        onSuccess(result) {
            if (result.success) {
                window.location.href = result.page;
            }
        },
    });
});
</script>
<template>
    <form
        class="w-10/12 lg:w-[450px] mx-auto bg-black bg-opacity-80 p-8 rounded-md"
        @submit="onLogin"
    >
        <img class="mx-auto mb-4" width="150" src="/logo.png" alt="" />
        <p class="text-white text-4xl text-center mb-4 uppercase font-bold">
            Iniciar Session
        </p>
        <p v-if="isError" class="text-red-600 text-center">
            {{ (error as any).response.data.message }}
        </p>

        <div class="mb-3">
            <label for="" class="text-white text-xs font-bold mb-2 block"
                >Email</label
            >
            <input
                type="text"
                placeholder="digite su email"
                class="w-full py-1 px-4 rounded-md"
                :="control('email', { required: true })"
            />
            <p class="text-red-600 text-xs mt-2" v-if="errores.email">
                {{ errores.email.message }}
            </p>
        </div>
        <div class="mb-3">
            <label for="" class="text-white text-xs font-bold mb-2 block"
                >contraseña</label
            >
            <input
                type="password"
                placeholder="digite su contraseña"
                class="w-full py-1 px-4 rounded-md"
                :="control('password', { required: true })"
            />
            <p class="text-red-600 text-xs mt-2" v-if="errores.password">
                {{ errores.password.message }}
            </p>
        </div>
        <button
            type="submit"
            class="px-8 block mx-auto mt-5 rounded-md text-white font-bold py-2 bg-green-600"
        >
            <template v-if="isLoading"> Cargando </template>
            <template v-else> Login </template>
        </button>
    </form>
</template>
