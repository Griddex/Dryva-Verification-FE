import decodeJwt from "jwt-decode";

let currentUserToken = null;

export function setToken(token) {
  currentUserToken = token;
}

export default function authService(type) {
  if (currentUserToken !== null) {
    if (type === "token") {
      return currentUserToken;
    } else {
      const identity = decodeJwt(currentUserToken);
      return identity;
    }
  }
  return "";
}
