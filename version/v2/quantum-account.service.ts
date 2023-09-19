import { ClientV2Mange } from '../../lib/dto/v2/v2.dto';
import { RequestBaseService } from '../../request.base.service';

export class QuantumAccountV2Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }

  /**
   * List all quantum account transactions
   */
  public async getAccountTransactions(input: ClientV2Mange.AccountTransactionsInput): Promise<ClientV2Mange.AccountTransactionsOutput> {
    return this.getRequest('/open-api/v2/quantum-account/transactions', input);
  }

  /**
   * Get a quantum account transaction
   */
  public async getAccountTransaction(input: ClientV2Mange.AccountTransactionInput): Promise<ClientV2Mange.AccountTransactionOutput> {
    return this.getRequest(`/open-api/v2/quantum-account/transactions/${input.id}`, { accessToken: input.accessToken });
  }
}
