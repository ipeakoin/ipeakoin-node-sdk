import { Qbit } from './dto';
import { getRequest, postRequest } from './utils/request';

export class AccountService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 注册 Qbit 账户
   */
  public async register(params: Qbit.Account.IRegisterInput, token: string): Promise<Qbit.Account.IRegisterOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/register`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取Account列表
   */
  public async accounts(params: Qbit.Account.IAccountsInput, token: string): Promise<Qbit.Account.IAccountsOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
