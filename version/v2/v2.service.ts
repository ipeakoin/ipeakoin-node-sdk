import { RequestBaseService } from '../../request.base.service';
import { CardV2Service } from './card-v2.service';

/**
 * v2 版本接口
 */
export class V2Service extends RequestBaseService {
  private static cardV2Instance: CardV2Service;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }

  /**
   * V1 版本 card 接口
   */
  public get card(): CardV2Service {
    if (!V2Service.cardV2Instance) {
      V2Service.cardV2Instance = new CardV2Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V2Service.cardV2Instance;
  }
}
