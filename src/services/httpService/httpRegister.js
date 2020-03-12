import axios from "axios";
import baseURL from "../../utils/config";

const AUTH_TOKEN = `Bearer ${sessionStorage.getItem("token")}`;
const globalHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Accept-Language": "en-US, en;q=0.8",
  "Content-Type": "Application/json",
  Authorization: AUTH_TOKEN
};

const axiosRegister = axios.create({
  baseURL: baseURL,
  headers: globalHeaders
});

axiosRegister.interceptors.request.use(null, error => {
  alert("Something is wrong with your request");
  return Promise.reject(error);
});
axiosRegister.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
  }
  return Promise.reject(error);
});

const httpRegister = (method, url, otherHeaders, data = null) => {
  return axiosRegister({
    method: method,
    url: url,
    headers: { ...globalHeaders, ...otherHeaders },
    data: data
  });
};

export default httpRegister;
