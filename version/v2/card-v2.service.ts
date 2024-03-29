import { ClientV2Mange } from '../../lib/dto/v2/v2.dto';
import { RequestBaseService } from '../../request.base.service';

export class CardV2Service extends RequestBaseService {
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
  /**
   * Update card
   * @deprecated
   */
  public async updateCard(input: ClientV2Mange.UpdateCardInput): Promise<ClientV2Mange.UpdateCardOutput> {
    const obj: any = { ...input };
    delete obj.id;
    return this.putRequest(`/open-api/v2/cards/${input.id}`, obj);
  }
}
