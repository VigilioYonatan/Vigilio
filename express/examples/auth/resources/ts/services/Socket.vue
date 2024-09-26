<script lang="ts" setup>
import io, { Socket } from "socket.io-client";
import { onMounted, ref, watch } from "vue";

const client = io();

const socket = ref<Socket | null>(null);

onMounted(() => {
    socket.value = client;
    console.log(socket.value);
});

watch(socket, (web) => {
    web?.on("connect", () => {
        console.log("conectado");
    });
});
watch(socket, (web) => {
    web?.on("disconnect", () => {
        console.log("disconectedd");
    });
});
watch(socket, (web) => {
    web?.on("message", (data) => {
        console.log(data);
    });
});
watch(socket, (web) => {
    web?.emit("message", "jajaj");
});
</script>
<template>
    <h1>Hola</h1>
</template>
