import axios from "../service/axios";

const API = {

    getAll: async () => axios.get("/products"),
}

export default API;
