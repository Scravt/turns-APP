import axios from "axios";

 export const conn = axios.create({
    baseURL: "http://localhost:8000/api/",
});