import axios from "axios";
// const API_URL = `${process.env.VUE_APP_API_URL}`;
const API_URL = process.env.VUE_APP_API_URL;
export default axios.create({
  baseURL: API_URL,
  headers: {"Content-type": "application/json"},
  credentials: "include",
});
