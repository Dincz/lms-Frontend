import axios from "axios";
//backend url
const BASE_URL = "https://lmsbackend-phtd.onrender.com/api/v1/";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
