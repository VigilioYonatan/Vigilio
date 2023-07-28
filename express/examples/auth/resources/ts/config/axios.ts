import axios from "axios";

export const BASE_URL = axios.create({
    baseURL: `${import.meta.env.VITE_URL}/api`,
});
