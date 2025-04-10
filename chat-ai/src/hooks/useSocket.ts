import { signal } from "@preact/signals";
import type { Socket } from "socket.io-client";
import socket from "socket.io-client";
import { useEffect } from "preact/hooks";

function generateId() {
    return Date.now().toString(32).slice(2);
}
const storageEmpresa = { slug: "" };
export function getId() {
    const key = `${storageEmpresa?.slug}:chatUserId`;
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, generateId());
    }

    return localStorage.getItem(key);
}

const io = signal<Socket | null>(null);
const isConnect = signal<boolean>(false);

export function useSocketStore() {
    /* contectar socket */
    function connectSocket() {
        console.log(window.location.href);

        const socketio = socket("http://localhost:4003", {
            query: {
                "x-token": getId() ?? "null",
                "x-vigilio-token": "vigilio-727lk841iof2468i",
            },
            autoConnect: true,
            forceNew: true,
            transports: ["websocket"],
        });
        io.value = socketio;

        return () => socketio.disconnect();
    }

    useEffect(() => {
        io.value?.on("connect", () => {
            console.log("cponectado");

            isConnect.value = true;
        });
    }, [io.value]);
    useEffect(() => {
        io.value?.on("disconnect", () => {
            isConnect.value = false;
        });
    }, [io.value]);
    return {
        io: io.value,
        connectSocket,
        isConnect: isConnect.value,
    };
}
export default useSocketStore;
