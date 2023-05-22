import { ClientManage } from './lib/dto/dto';
import { RequestBaseService } from './request.base.service';
import { V1Service } from './version/v1/v1.service';
import { V2Service } from './version/v2/v2.service';

class Client extends RequestBaseService {
  private static V1Instance: V1Service;
  private static V2Instance: V2Service;

  constructor(arg1: ClientManage.ClientInput);
  constructor(arg1: string, clientSecret: string, baseUrl?: string);

  constructor(arg1: ClientManage.ClientInput | string, clientSecret?: string, baseUrl?: string) {
    if (typeof arg1 === 'string') {
      super(arg1, clientSecret || '', baseUrl);
    } else {
      super(arg1.clientId, arg1.clientSecret, arg1?.baseUrl);
    }
  }

  /**
   * V1 版本接口
   */
  public get V1(): V1Service {
    if (!Client.V1Instance) {
      Client.V1Instance = new V1Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return Client.V1Instance;
  }
  /**
   * V2 版本接口
   */
  public get V2(): V2Service {
    if (!Client.V2Instance) {
      Client.V2Instance = new V2Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return Client.V2Instance;
  }

  /**
   * 获取code
   */
  public async getCode(params?: ClientManage.GetCodeInput): Promise<ClientManage.GetCodeOutput> {
    const url = `/open-api/oauth/authorize`;
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
  public async getAccessToken(code: string): Promise<ClientManage.GetAccessTokenOutput> {
    const url = `/open-api/oauth/access-token`;
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
  public async refreshAccessToken(refreshToken: string): Promise<ClientManage.RefreshAccessTokenOutput> {
    const url = `/open-api/oauth/refresh-token`;
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
