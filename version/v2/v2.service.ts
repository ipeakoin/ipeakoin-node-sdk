import { ClientV2Mange } from '../../lib/dto/v1/v2.dto';
import { RequestBaseService } from '../../request.base.service';

/**
 * v2 版本接口
 */
export class V2Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }

  /**
   * List all cards
   */
  public async getCards(input: ClientV2Mange.CardsInput): Promise<ClientV2Mange.CardsOutput> {
    return this.getRequest('/open-api/v2/cards', input);
  }
  /**
   * Get a card
   */
  public async getCard(input: ClientV2Mange.CardInfoInput): Promise<ClientV2Mange.CardInfoOutput> {
    return this.getRequest(`/open-api/v2/cards/${input.id}`, { accessToken: input.accessToken });
  }
}
