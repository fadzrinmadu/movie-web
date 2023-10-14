import { setToken } from "../helpers/cookies";
import { ILoginType } from "../types";

const usernameAuth = process.env.REACT_APP_USERNAME || "";
const passwordAuth = process.env.REACT_APP_PASSWORD || "";
const bearerTokenAuth = process.env.REACT_APP_BEARER_TOKEN || "";

const loginApiService = async (payload: ILoginType) => {
  const isUser =
    payload.username === usernameAuth && payload.password === passwordAuth;

  if (!isUser) {
    return false;
  }

  setToken(bearerTokenAuth);
  return true;
};

export { loginApiService };
