// service统一出口
import EWRequest from "./axios/request";
import { BASE_URL, TIME_OUT } from "./axios/config";
// import { handleError } from "./error-code";

const ewRequest = new EWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log("请求", config);
      // 设置请求头
      // config.headers = {
      //   "x-requested-with": "XMLHttpRequest",
      //   token: JSON.parse(<string>localStorage.getItem("userEntity")).Token,
      // };
      // 判断是否为登录接口
      // if (config.url == "/Login/CheckLogin") {
      //   config.headers = {
      //     "x-requested-with": "XMLHttpRequest",
      //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      //   };
      // }
      return config;
    },

    requestInterceptorCatch: (err) => {
      console.log("请求错误", err);
      return err;
    },

    responseInterceptor: (res) => {
      // console.log("响应成功", res);
      // const code = res.data.code;
      // handleError(code, res.data);
      return res;
    },

    responseInterceptorCatch: (err) => {
      console.log("响应错误");
      return err;
    },
  },
});

export default ewRequest;
