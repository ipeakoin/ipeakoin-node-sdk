import { ClientV2Mange } from '../../lib/dto/v2/v2.dto';
import { ClientManage } from '../../lib/dto/dto';
import { RequestBaseService } from '../../request.base.service';
import { CardV2Service } from './card-v2.service';
import { QuantumAccountV2Service } from './quantum-account.service';

/**
 * v2 版本接口
 */
export class V2Service extends RequestBaseService {
  private static cardV2Instance: CardV2Service;
  private static quantumAccountV2Instance: QuantumAccountV2Service;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }

  /**
   * Delete account
   */
  public async deleteAccount(input: ClientV2Mange.DeleteAccountInput): Promise<ClientV2Mange.DeleteAccountOutput> {
    return this.deleteRequest(`/open-api/v2/accounts/${input.id}`, { accessToken: input.accessToken });
  }

  /**
   * Update a account
   */
  public async updateAccount(input: ClientV2Mange.UpdateAccountInput): Promise<ClientManage.BooleanOutput> {
    return this.putRequest(`/open-api/v2/accounts/${input.id}`, { accessToken: input.accessToken, email: input.email });
  }

  /**
   * V2 版本 card 接口
   */
  public get card(): CardV2Service {
    if (!V2Service.cardV2Instance) {
      V2Service.cardV2Instance = new CardV2Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V2Service.cardV2Instance;
  }

  /**
   * V2 版本 card 接口
   */
  public get quantumAccount(): QuantumAccountV2Service {
    if (!V2Service.cardV2Instance) {
      V2Service.quantumAccountV2Instance = new QuantumAccountV2Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V2Service.quantumAccountV2Instance;
  }
}
