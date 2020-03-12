import decodeJwt from "jwt-decode";

const authService = () => {
  const token = sessionStorage.getItem("token");
  if (token !== null) {
    const identity = decodeJwt(token);
    return identity;
  }
  return "";
};

export default authService;
