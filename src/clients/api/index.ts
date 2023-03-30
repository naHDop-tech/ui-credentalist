import { AxiosApiClient } from "@root/clients/api/axios.client";

const baseUrl: string = process.env.REACT_APP_BASE_URL as string
export const apiClient = Object.freeze(new AxiosApiClient(baseUrl))