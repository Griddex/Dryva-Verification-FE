import axios from "axios";
import baseURL from "../../utils/config";

const token = sessionStorage.getItem("token");
if (token === null) sessionStorage.getItem("token");
const AUTH_TOKEN = `Bearer ${token}`;

const globalHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Accept-Language": "en-US, en;q=0.8",
  Authorization: AUTH_TOKEN
};

const axiosOthers = axios.create({
  baseURL: baseURL,
  headers: globalHeaders
});

axiosOthers.interceptors.request.use(null, error => {
  alert("Something is wrong with your request");
  return Promise.reject(error);
});
axiosOthers.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
  }
  return Promise.reject(error);
});

const httpOthers = (method, url, otherHeaders, data = null) => {
  return axiosOthers({
    method: method,
    url: url,
    headers: { ...globalHeaders, ...otherHeaders },
    data: data
  });
};

export default httpOthers;
