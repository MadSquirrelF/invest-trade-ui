import { axiosClassic } from "api/interceptors";
import { getAuthUrl } from "config/api.config";

import Cookies from "js-cookie";

import { getContentType } from "api/api.helper";
import { removeTokensStorage, saveToStorage } from "./auth.helper";
import { IAuthResponse } from "@/store/user/user.interface";

export const AuthService = {
  async register(email: string, password: string, username: string, sex: string, phone_number: string, avatar?: string) {
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl(`/register`), {
      email,
      password,
      username,
      sex,
      avatar,
      phone_number,
    });
    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },

  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl(`/login`), {
      email,
      password,
    });
    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },

  logout() {
    removeTokensStorage();
    localStorage.removeItem(`user`);
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(`refreshToken`);
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl(`/login/access-token`), { refreshToken }, { headers: getContentType() });

    if (response.data.accessToken) saveToStorage(response.data);
    return response;
  },
};
