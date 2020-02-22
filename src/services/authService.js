import decodeJwt from "jwt-decode";

const authService = () => {
  const token = localStorage.getItem("token");
  const identity = decodeJwt(token);
  return identity;
};

export default authService;
