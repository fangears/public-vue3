import request from "@/service";
import { IDataType } from "@/service/types";

// axios post参数放在data里；get参数放在params里
// 测试接口
export function getTest(data: object) {
  return request.post<IDataType>({
    url: "/user/test",
    data: data,
  });
}
