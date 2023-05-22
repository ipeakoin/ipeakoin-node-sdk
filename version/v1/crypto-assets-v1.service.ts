import { ClientV1Mange } from '../../lib/dto/v1/v1.dto';
import { RequestBaseService } from '../../request.base.service';

export class CryptoAssetsV1Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }
  /**
   * List all wallet balances
   */
  public async getBalances(input: ClientV1Mange.cryptoAssets.BalancesInput): Promise<ClientV1Mange.cryptoAssets.BalancesOutput> {
    return this.getRequest('/open-api/v1/asset/wallets/balances', input);
  }
  /**
   * List all addresses
   */
  public async getAddresses(input: ClientV1Mange.cryptoAssets.AddressesInput): Promise<ClientV1Mange.cryptoAssets.AddressesOutput> {
    return this.getRequest('/open-api/v1/asset/wallets/addresses', input);
  }
  /**
   * Create a blockchain address
   */
  public async createBlockchainAddress(
    input: ClientV1Mange.cryptoAssets.CreateBlockchainAddressInput,
  ): Promise<ClientV1Mange.cryptoAssets.CreateBlockchainAddressOutput> {
    return this.postRequest('/open-api/v1/asset/wallets/addresses', input);
  }
  /**
   * List all deposit history
   */
  public async getDeposits(input: ClientV1Mange.cryptoAssets.DepositsInput): Promise<ClientV1Mange.cryptoAssets.DepositsOutput> {
    return this.getRequest('/open-api/v1/asset/wallets/deposits', input);
  }
  /**
   * List all withdrawal history
   */
  public async getWithdrawals(input: ClientV1Mange.cryptoAssets.WithdrawalsInput): Promise<ClientV1Mange.cryptoAssets.WithdrawalsOutput> {
    return this.getRequest('/open-api/v1/asset/wallets/withdrawals', input);
  }
  /**
   * Withdraw coin
   */
  public async withdrawal(input: ClientV1Mange.cryptoAssets.WithdrawalInput): Promise<ClientV1Mange.cryptoAssets.WithdrawalOutput> {
    return this.postRequest('/open-api/v1/asset/wallets/withdrawals', input);
  }
  /**
   * List all bills
   */
  public async getBills(input: ClientV1Mange.cryptoAssets.BillsInput): Promise<ClientV1Mange.cryptoAssets.BillsOutput> {
    return this.getRequest('/open-api/v1/asset/wallets/bills', input);
  }
  /**
   * Get a trade currency pair
   */
  public async getCurrencyPair(input: ClientV1Mange.cryptoAssets.CurrencyPairInput): Promise<ClientV1Mange.cryptoAssets.CurrencyPairOutput> {
    return this.getRequest('/open-api/v1/asset/convert/currency-pair', input);
  }
  /**
   * Get a estimate quote
   */
  public async estimateQuote(input: ClientV1Mange.cryptoAssets.EstimateQuoteInput): Promise<ClientV1Mange.cryptoAssets.EstimateQuoteOutput> {
    return this.postRequest('/open-api/v1/asset/convert/estimate-quote', input);
  }
  /**
   * List all trades
   */
  public async getTrades(input: ClientV1Mange.cryptoAssets.TradesInput): Promise<ClientV1Mange.cryptoAssets.TradesOutput> {
    return this.getRequest('/open-api/v1/asset/convert/trades', input);
  }
  /**
   * Create a trade
   */
  public async trade(input: ClientV1Mange.cryptoAssets.TradeInput): Promise<ClientV1Mange.cryptoAssets.TradeOutput> {
    return this.postRequest('/open-api/v1/asset/convert/trades', input);
  }
  /**
   * List all Wire bank accounts
   */
  public async getWires(input: ClientV1Mange.cryptoAssets.WiresInput): Promise<ClientV1Mange.cryptoAssets.WiresOutput> {
    return this.getRequest('/open-api/v1/asset/banks/wires', input);
  }
  /**
   * Create a wire bank account
   */
  public async wire(input: ClientV1Mange.cryptoAssets.WireInput): Promise<ClientV1Mange.cryptoAssets.WireOutput> {
    return this.postRequest('/open-api/v1/asset/banks/wires', input);
  }
  /**
   * Delete a Wire bank account
   */
  public async deleteWire(input: ClientV1Mange.cryptoAssets.DeleteWireInput): Promise<ClientV1Mange.cryptoAssets.DeleteWireOutput> {
    return this.deleteRequest(`/open-api/v1/asset/banks/wires/${input.id}`, { accessToken: input.accessToken });
  }
  /**
   * List all payouts
   */
  public async getPayouts(input: ClientV1Mange.cryptoAssets.PayoutsInput): Promise<ClientV1Mange.cryptoAssets.PayoutsOutput> {
    return this.getRequest('/open-api/v1/asset/payouts', input);
  }
  /**
   * Create a payout
   */
  public async payout(input: ClientV1Mange.cryptoAssets.PayoutInput): Promise<ClientV1Mange.cryptoAssets.PayoutOutput> {
    return this.postRequest('/open-api/v1/asset/payouts', input);
  }
  /**
   * Get a payout
   */
  public async getPayout(input: ClientV1Mange.cryptoAssets.PayoutInfoInput): Promise<ClientV1Mange.cryptoAssets.PayoutInfoOutput> {
    return this.getRequest(`/open-api/v1/asset/payouts/${input.id}`, { accessToken: input.accessToken });
  }
}
