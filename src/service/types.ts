export interface IDataType<T = any> {
  code: number;
  data: T;
  info?: T;
  msg?: T;
}
