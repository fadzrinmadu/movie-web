import Cookies from "js-cookie";

const setToken = (token: string) => {
  const tokenBase64 = btoa(token);
  Cookies.set("token", tokenBase64, { expires: 1 });
};

const getToken = () => {
  const token = Cookies.get("token");
  if (token) {
    const jwtToken = atob(token);
    return jwtToken;
  }
  return "";
};

const removeToken = () => {
  Cookies.remove("token");
};

export { setToken, getToken, removeToken };
