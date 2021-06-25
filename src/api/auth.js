import axios from "axios";
import Cookies from "js-cookie";

const apiUrl =
  process.env.NODE_ENV == "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

// サインアップ（新規アカウント作成）
export const signUp = (name, email, password, passwordConfirmation) => {
  const params = {
    name: name,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };
  return axios.post(`${apiUrl}/api/v1/auth`, params);
};

// サインイン（ログイン）
export const signIn = (email, password) => {
  const params = {
    email: email,
    password: password,
  };
  return axios.post(`${apiUrl}/api/v1/auth/sign_in`, params);
};

// サインアウト（ログアウト）
export const signOut = () => {
  return axios.delete(`${apiUrl}/api/v1/auth/sign_out`, {
    headers: {
      'access-token': Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid"),
    },
  });
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return axios.get("/api/v1/auth/sessions", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})
}