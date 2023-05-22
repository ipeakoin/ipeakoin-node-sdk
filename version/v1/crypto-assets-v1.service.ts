import { ClientV1Mange } from '../../lib/dto/v1/v1.dto';
import { RequestBaseService } from '../../request.base.service';

export class CryptoAssetsV1Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }
}
