import axios from "axios";
import baseURL from "./../utils/config";

//(A) Axios Login Configuration
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

//(B) Axios Others Configuration
const AUTH_TOKEN = `Bearer ${localStorage.getItem("token")}`;
const axiosOthers = axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Accept-Language": "en-US, en;q=0.8"
  }
});
axiosOthers.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axiosOthers.defaults.headers.post["Content-Type"] = "multipart/form-data";

axiosOthers.interceptors.request.use(null, error => {
  alert("Something is wrong with your request");
  return Promise.reject(error);
});
axiosOthers.interceptors.response.use(
  res => console.log(res),
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

const axiosLoginOrRegisterFunc = (method, url, data = null) => {
  return axiosLoginOrRegister({
    method: method,
    url: url,
    data: data
  });
};
const axiosOthersFunc = (method, url, data = null) => {
  return axiosOthers({
    method: method,
    url: url,
    data: data
  });
};

export default {
  httpLoginOrRegister: axiosLoginOrRegisterFunc,
  httpOthers: axiosOthersFunc
};
// export default {
//   httpLogin: axiosLoginOrRegister.post,
//   httpOthers: axiosOthersFunc
// };
