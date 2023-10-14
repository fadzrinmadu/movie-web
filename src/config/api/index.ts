import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../../helpers/cookies";

interface CallAPIProps extends AxiosRequestConfig {
  url: string;
  method: string;
  data?: any;
  token?: boolean;
  contentType?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  contentType = "application/json",
}: CallAPIProps) {
  let headers = {};

  if (token) {
    const bearerToken = getToken();
    headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": contentType,
    };
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((error) => error.response);

  if (response.status > 300) {
    const responseSchema = {
      error: true,
      message: response.data.message,
      data: response.data,
    };

    return responseSchema;
  }

  const { length } = Object.keys(response.data);

  const responseSchema = {
    error: false,
    message: "success",
    data: length > 1 ? response.data : response.data.data,
  };

  return responseSchema;
}
