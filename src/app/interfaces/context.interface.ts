export interface IContext {
  api: any;
  endpoint: string;
  accessToken?: string;
  linkResolver: Function;
  toolbar: Function;
};
