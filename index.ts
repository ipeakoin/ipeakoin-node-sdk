import { ClientManage } from './lib/dto';
import { encryptHmacSHA256 } from './lib/utils/crypto';
import { deleteRequest, getRequest, postRequest, putRequest } from './lib/utils/request';
import { V1Service } from './version/v1/v1.serivce';
import { V2Service } from './version/v2/v2.service';

class Client {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api-global.ipeakoinnetwork.com';
  private accessToken = '';

  private static V1Instance: V1Service;
  private static V2Instance: V2Service;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    if (baseUrl) this.baseUrl = baseUrl;
  }

  /**
   * V1 版本接口
   */
  public get V1(): V1Service {
    if (!Client.V1Instance) {
      Client.V1Instance = new V1Service();
    }
    return Client.V1Instance;
  }
  /**
   * V2 版本接口
   */
  public get V2(): V2Service {
    if (!Client.V2Instance) {
      Client.V2Instance = new V2Service();
    }
    return Client.V2Instance;
  }

  /**
   * 获取code
   */
  public async getCode(params?: ClientManage.IGetCodeInput): Promise<ClientManage.IGetCodeOutput> {
    const url = `${this.baseUrl}/open-api/oauth/authorize`;
    const res = await getRequest(url, {
      clientId: this.clientId,
      ...(params?.redirectUri && { redirectUri: params?.redirectUri }),
      ...(params?.state && { state: params?.state }),
    });
    return res;
  }
  /**
   * 获取access token
   */
  public async getAccessToken(code: string): Promise<ClientManage.IGetAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/access-token`;
    const res = await postRequest(url, {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      code: code,
    });
    return res;
  }
  /**
   * 刷新access token
   */
  public async refreshAccessToken(refreshToken: string): Promise<ClientManage.IRefreshAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/refresh-token`;
    const res = await postRequest(url, {
      clientId: this.clientId,
      refreshToken,
    });
    return res;
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
  public async postRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await postRequest(url, params, {
      'x-ipeakoin-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * put 请求
   * @param url
   * @param params
   * @returns
   */
  public async putRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await putRequest(url, params, {
      'x-ipeakoin-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * delete 请求
   * @param url
   * @param params
   * @returns
   */
  public async deleteRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await deleteRequest(url, params, {
      'x-ipeakoin-access-token': this.accessToken,
      'Content-Type': 'application/json',
    });
  }
  /**
   * get 请求
   * @param url
   * @param params
   * @returns
   */
  public async getRequest(url: string, query: Record<string, any>): Promise<ClientManage.IOutput> {
    return await getRequest(url, query, {
      'x-ipeakoin-access-token': this.accessToken,
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
    return encryptHmacSHA256(params, _clientSecret);
  }
  //#endregion 签名
}

export = Client;
