/* eslint-disable no-unused-vars */
import axios from "axios";

const LOCAL_URL = "http://127.0.0.1:8000/carbon/";
const API_URL = "https://climate-carbon-footprint.onrender.com/";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
