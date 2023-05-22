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
  /**
   * List all beneficiaries
   */
  public async getBeneficiaries(input: ClientV1Mange.globalAccount.BeneficiariesInput): Promise<ClientV1Mange.globalAccount.BeneficiariesOutput> {
    return this.getRequest('/open-api/v1/global/beneficiaries', input);
  }
  /**
   * Create a beneficiary
   */
  public async createBeneficiarie(
    input: ClientV1Mange.globalAccount.CreateBeneficiarieInput,
  ): Promise<ClientV1Mange.globalAccount.CreateBeneficiarieOutput> {
    return this.postRequest('/open-api/v1/global/beneficiaries', input);
  }
  /**
   * Get a exchange rate
   */
  public async getRate(input: ClientV1Mange.globalAccount.RateInput): Promise<ClientV1Mange.globalAccount.RateOutput> {
    return this.getRequest('/open-api/v1/global/exchange_rates', input);
  }
  /**
   * Create a payment
   */
  public async payment(input: ClientV1Mange.globalAccount.PaymentInput): Promise<ClientV1Mange.globalAccount.PaymentOutput> {
    return this.postRequest('/open-api/v1/global/payment', input);
  }
  /**
   * Batch create payments
   */
  public async batchPayment(input: ClientV1Mange.globalAccount.BatchPaymentInput): Promise<ClientV1Mange.globalAccount.BatchPaymentOutput> {
    return this.postRequest('/open-api/v1/global/payment/batch', input);
  }
  /**
   * Get a payment fee
   */
  public async getPaymentFee(input: ClientV1Mange.globalAccount.PaymentFeeInput): Promise<ClientV1Mange.globalAccount.PaymentFeeOutput> {
    return this.getRequest('/open-api/v1/global/payment/fee', input);
  }
  /**
   * List all payment transactions
   */
  public async getPaymentTransactions(input: ClientV1Mange.globalAccount.PaymentTxsInput): Promise<ClientV1Mange.globalAccount.PaymentTxsOutput> {
    return this.getRequest('/open-api/v1/global/transactions', input);
  }
}
