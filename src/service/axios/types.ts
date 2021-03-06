import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface EWRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface EWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: EWRequestInterceptors<T>;
  showLoading?: boolean;
}
