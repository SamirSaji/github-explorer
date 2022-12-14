import Axios from "axios";
import { NetWorkCallMethods } from "../utils";
import { config } from "../config";
export const NetworkCall = (
  url,
  method,
  body,
  headers,
  isAuthorized = false,
  notValidateURL = false
) => {
  //Check for URL,method,body
  let fullURL = config.api_url + url;
  console.log(fullURL);
  if (!fullURL && !method) {
    return Promise.reject({ message: "URL and HTTP Method is not mentioned." });
  }

  //Check for proper URL
  if (fullURL && !notValidateURL) {
    const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);

    if (!fullURL.match(regex)) {
      return Promise.reject({ message: "Malformed URL, Please check" });
    }
  }

  //Check for body of the POST method
  if (method && method === NetWorkCallMethods.post && !body) {
    return Promise.reject({
      message: "POST method must contain Request Body.",
    });
  }

  //Checking the Internet connection
  if (!navigator.onLine) {
    return Promise.reject({ message: "Unable to connect with Internet!" });
  }

  //Initializing the header
  let newHeader = headers;

  //Adding Authorization to headers if it is requested
  if (isAuthorized) {
    newHeader = {
      ...headers,
      //   Authorization: `Bearer ${LocalStorageKeys.auth_token}`,
    };
  }

  return Axios({
    method: method,
    url: fullURL,
    data: body,
    headers: newHeader,
  });
};
