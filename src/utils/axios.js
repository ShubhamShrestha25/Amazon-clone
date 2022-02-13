import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-6cba9/us-central1/api",
});

export default instance;
