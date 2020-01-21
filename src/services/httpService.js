import axios from "axios";
import baseURL from "./../utils/config";

//(A) Axios Login Configuration
const axiosLogin = axios.create({
  baseURL: baseURL,
  timeout: 1000
});
axiosLogin.interceptors.request.use(
  config => config,
  error => {
    alert("Something is wrong with your Login request");
    return Promise.reject(error);
  }
);
axiosLogin.interceptors.response.use(
  response => console.log(response),
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

//(B) Axios Others Configuration
const AUTH_TOKEN = `Bearer ` + localStorage.getItem("token");
const axiosOthers = axios.create({
  baseURL: baseURL,
  timeout: 1000
});
axiosOthers.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axiosOthers.defaults.headers.post["Content-Type"] = "multipart/form-data";

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
    console.log(error);
  }
  return Promise.reject(error);
});

const axiosLoginFunc = (method, url, data = null) => {
  return axiosLogin({
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
  httpLogin: axiosLoginFunc,
  httpOthers: axiosOthersFunc
};
// export default {
//   httpLogin: axiosLogin.post,
//   httpOthers: axiosOthersFunc
// };
