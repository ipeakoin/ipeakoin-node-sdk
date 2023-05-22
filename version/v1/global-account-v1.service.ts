import { ClientV1Mange } from '../../lib/dto/v1/v1.dto';
import { RequestBaseService } from '../../request.base.service';

export class GlobalAccountV1Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }
  /**
   * List all global accounts
   */
  public async getGlobalAccounts(input: ClientV1Mange.globalAccount.GlobalAccountsInput): Promise<ClientV1Mange.globalAccount.GlobalAccountsOutput> {
    return this.getRequest('/open-api/v1/global/accounts', input);
  }
  /**
   * Create a global account
   */
  public async createGlobalAccount(
    input: ClientV1Mange.globalAccount.CreateGlobalAccountInput,
  ): Promise<ClientV1Mange.globalAccount.CreateGlobalAccountOutput> {
    return this.postRequest('/open-api/v1/global/accounts', input);
  }
  /**
   * List all bank accounts
   */
  public async getBanks(input: ClientV1Mange.globalAccount.BanksInput): Promise<ClientV1Mange.globalAccount.BanksOutput> {
    return this.getRequest('/open-api/v1/global/accounts/banks', input);
  }
}
