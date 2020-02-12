import axios from "axios";
import baseURL from "../../utils/config";

const axiosLoginOrRegister = axios.create({
  baseURL: baseURL,
  headers: { "Access-Control-Allow-Origin": "*" }
});
axiosLoginOrRegister.interceptors.request.use(null, error => {
  alert("Something is wrong with your Login request");
  return Promise.reject(error);
});
axiosLoginOrRegister.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error);
  }
  return Promise.reject(error);
});

const httpLoginOrRegister = (method, url, data = null) => {
  return axiosLoginOrRegister({
    method: method,
    url: url,
    data: data
  });
};

export default httpLoginOrRegister;
