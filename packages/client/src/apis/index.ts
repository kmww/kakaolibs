import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://localhost:8000",
  withCredentials: true,
});

export default AxiosInstance;
