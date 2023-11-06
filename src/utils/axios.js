import axios from "axios";


//base url =>http://localhost:3001/
import { Base_url } from "../config";
const axiosInstance = axios.create({ baseURL: Base_url })
axios.interceptors.response.use((response) => response, (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")) 
export default axiosInstance;