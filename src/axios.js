import axios from "axios";

axios.defaults.baseURL = "http://localhost:8082/";

axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

axios.defaults.headers.common["verification"] = "Bearer " + localStorage.getItem("tokenV");
