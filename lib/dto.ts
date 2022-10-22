import { Readable } from 'stream';

/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace QbitManage {
  export interface IContentOutput {
    code: number;
    message: string;
    data?: any;
  }
  /** 统一返回 */
  export interface IOutput {
    status: number;
    reason: string;
    content: IContentOutput;
  }
  /** 获取code */
  export interface IGetCodeOutput {
    timestamp: number;
    state: string;
    code: string;
  }
  /** 获取access token */
  export interface IGetAccessTokenOutput {
    code?: number;
    message?: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    timestamp: number;
  }
  /** 刷新access token  */
  export interface IRefreshAccessTokenOutput {
    code?: number;
    message?: string;
    accessToken: string;
    expiresIn: number;
    timestamp: number;
  }
}
