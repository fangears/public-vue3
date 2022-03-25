let BASE_URL: string;
const TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://www.baidu.com";
  // BASE_URL = "/";
}

export { BASE_URL, TIME_OUT };
