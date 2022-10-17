import { AccountService } from './lib/account.service';
import { BalanceService } from './lib/balance.service';
import { QbitManage } from './lib/dto';
import { UserService } from './lib/user.service';
import { deleteRequest, getRequest, postRequest, putRequest } from './lib/utils/request';
import * as crypto from 'crypto';

class Qbit {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api-global.qbitnetwork.com';
  private accessToken = '';

  /** 其他模块接口 */
  private static accountInstance: AccountService;
  private static userInstance: UserService;
  private static balanceInstance: BalanceService;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    if (baseUrl) this.baseUrl = baseUrl;
  }

  /**
   * 获取code
   */
  public async getCode(state?: string, redirectUri?: string): Promise<QbitManage.IGetCodeOutput> {
    const url = `${this.baseUrl}/open-api/oauth/authorize`;
    return await getRequest(url, {
      clientId: this.clientId,
      state,
      redirectUri,
    });
  }
  /**
   * 获取access token
   */
  public async getAccessToken(code: string): Promise<QbitManage.IGetAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/access-token`;
    return await postRequest(url, {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      code: code,
    });
  }
  /**
   * 刷新access token
   */
  public async refreshAccessToken(refreshToken: string): Promise<QbitManage.IRefreshAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/refresh-token`;
    return await postRequest(url, {
      clientId: this.clientId,
      refreshToken,
    });
  }
  /**
   * 获取Account 模块接口
   */
  public get account() {
    if (Qbit.accountInstance) return Qbit.accountInstance;
    Qbit.accountInstance = new AccountService(this.baseUrl);
    return Qbit.accountInstance;
  }
  /**
   * 获取User 模块接口
   */
  public get user() {
    if (Qbit.userInstance) return Qbit.userInstance;
    Qbit.userInstance = new UserService(this.baseUrl);
    return Qbit.userInstance;
  }
  /**
   * 获取Balance 模块接口
   */
  public get balance() {
    if (Qbit.balanceInstance) return Qbit.balanceInstance;
    Qbit.balanceInstance = new BalanceService(this.baseUrl);
    return Qbit.balanceInstance;
  }
  //#region 请求
  public config(accessToken: string) {
    this.accessToken = accessToken;
    return this;
  }
  /**
   * post 请求
   * @param url
   * @param params
   * @returns
   */
  public async postRequest(url: string, params: Record<string, any>): Promise<QbitManage.IOutput> {
    return await postRequest(url, params, {
      'x-qbit-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * put 请求
   * @param url
   * @param params
   * @returns
   */
  public async putRequest(url: string, params: Record<string, any>): Promise<QbitManage.IOutput> {
    return await putRequest(url, params, {
      'x-qbit-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * delete 请求
   * @param url
   * @param params
   * @returns
   */
  public async deleteRequest(url: string, params: Record<string, any>): Promise<QbitManage.IOutput> {
    return await deleteRequest(url, params, {
      'x-qbit-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * get 请求
   * @param url
   * @param params
   * @returns
   */
  public async getRequest(url: string, query: Record<string, any>): Promise<QbitManage.IOutput> {
    return await getRequest(url, query, {
      'x-qbit-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  //#endregion 请求
  //#region 签名
  /**
   * HMAC-SHA256 签名
   */
  public encryptHmacSHA256(params: Record<string, any>, clientSecret?: string): string {
    const _clientSecret = clientSecret || this.clientSecret;

    const keys = Object.keys(params);
    keys.sort();

    const result = [];

    for (const key of keys) {
      let val = params[key];
      if (val == null) {
        val = '';
      }
      result.push(`${key}=${val}`);
    }

    const str = result.join('&');

    const hmac = crypto.createHmac('sha256', _clientSecret);
    const sign = hmac.update(str).digest('hex');
    return sign;
  }
  //#endregion 签名
}

export = QbitManage;
