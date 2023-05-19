/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace ClientManage {
  /** 统一返回 */
  export interface IOutput {
    status: number;
    error?: any;
    errRaw?: any;
    content: any;
  }
  /** 获取code 入参 */
  export interface IGetCodeInput {
    state?: string;
    redirectUri?: string;
  }
  /** 获取code 出参 */
  export interface IGetCodeOutput extends IOutput {
    content: {
      timestamp: number;
      state?: string;
      code: string;
    };
  }

  /** 获取access token */
  export interface IGetAccessTokenOutput extends IOutput {
    content: {
      code?: number;
      message?: string;
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }

  /** 刷新access token  */
  export interface IRefreshAccessTokenOutput extends IOutput {
    content: {
      code?: number;
      message?: string;
      accessToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }

  export interface IContentOutput {
    code: number;
    message: string;
    data?: any;
  }
}
