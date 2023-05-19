import { ClientManage } from './lib/dto';
import { RequestBaseService } from './request.base.service';
import { V1Service } from './version/v1/v1.serivce';
import { V2Service } from './version/v2/v2.service';

class Client extends RequestBaseService {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api-global.ipeakoinnetwork.com';

  private static V1Instance: V1Service;
  private static V2Instance: V2Service;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super();
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
    const res = await this.getRequest(url, {
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
    const res = await this.postRequest(url, {
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
    const res = await this.postRequest(url, {
      clientId: this.clientId,
      refreshToken,
    });
    return res;
  }
  //#region 签名
  /**
   * HMAC-SHA256 签名
   */
  public encryptHmacSHA256(params: Record<string, any>, clientSecret?: string): string {
    const _clientSecret = clientSecret || this.clientSecret;
    return this.encryptHmacSHA256(params, _clientSecret);
  }
  //#endregion 签名
}

export = Client;
