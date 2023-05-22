export const ACCESS_TOKEN_NAME = 'x-ipeakoin-access-token';
export const BASE_URL = 'https://api-global.ipeakoinnetwork.com';

/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace ClientManage {
  export interface ClientInput {
    clientId: string;
    clientSecret: string;
    baseUrl?: string;
  }
  /** 统一返回 */
  export interface Output {
    status: number;
    error?: any;
    errRaw?: any;
    content: any;
  }

  /** 统一返回Boolean */
  export interface BooleanOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: boolean;
    };
  }

  /** 统一返回String */
  export interface StringOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: string;
    };
  }

  /** 统一金额参数 */
  export interface Amount {
    amount: string;
    currency: string;
  }

  /** 统一入参 */
  export interface Input {
    accessToken: string;
  }
  /** 分页 */
  export interface ListInput {
    limit?: number;
    page?: number;
  }

  /** 统一地址格式 */
  export interface Address {
    /**
     * Line one of the street address.
     */
    addressLine1: string;

    /**
     * Line two of the street address.
     */
    addressLine2?: string;

    /**
     * City portion of the address.
     */
    city: string;

    /**
     * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
     */
    country: string;

    /**
     * Postal / ZIP code of the address.
     */
    postalCode: string;

    /**
     * State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.
     */
    state: string;
  }

  /** 统一名称格式 */
  export interface Name {
    /** 名：类举：林峰 */
    firstName: string;

    /** 名英文：类举：Auspicious */
    firstNameEn?: string;

    /** 名拼音：类举：LinFeng */
    firstNamePinYin?: string;

    /** 姓：类举：侯 */
    lastName: string;

    /** 姓英文：类举：Monkey */
    lastNameEn?: string;

    /** 姓拼音：类举：Hou */
    lastNamePinYin?: string;
  }

  /** 获取code 入参 */
  export interface GetCodeInput {
    state?: string;
    redirectUri?: string;
  }
  /** 获取code 出参 */
  export interface GetCodeOutput extends Output {
    content: {
      timestamp: number;
      state?: string;
      code: string;
    };
  }

  /** 获取access token */
  export interface GetAccessTokenOutput extends Output {
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
  export interface RefreshAccessTokenOutput extends Output {
    content: {
      code?: number;
      message?: string;
      accessToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }

  export interface ContentOutput {
    code: number;
    message: string;
    data?: any;
  }
}
