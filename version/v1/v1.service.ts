import { ClientV1Mange } from '../../lib/dto/v1/v1.dto';
import { RequestBaseService } from '../../request.base.service';
import { CardV1Service } from './card-v1.service';
import { CryptoAssetsV1Service } from './crypto-assets-v1.service';
import { GlobalAccountV1Service } from './global-account-v1.service';

/**
 * v1 版本接口
 */
export class V1Service extends RequestBaseService {
  private static cardV1Instance: CardV1Service;
  private static globalAccountV1Instance: GlobalAccountV1Service;
  private static cryptoAssetsV1Instance: CryptoAssetsV1Service;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }
  /**
   * Create a account
   */
  public async createAccount(input: ClientV1Mange.CreateAccountInput): Promise<ClientV1Mange.CreateAccountOutput> {
    return this.postRequest('/open-api/v1/accounts/register', input);
  }
  /**
   * List all accounts
   */
  public async getAccounts(input: ClientV1Mange.AccountsInput): Promise<ClientV1Mange.AccountsOutput> {
    return this.getRequest('/open-api/v1/accounts', input);
  }
  /**
   * List all users
   */
  public async getUsers(input: ClientV1Mange.UsersInput): Promise<ClientV1Mange.UsersOutput> {
    return this.getRequest('/open-api/v1/users', input);
  }
  /**
   * Upload file
   */
  public async uploadFile(input: ClientV1Mange.UploadFileInput): Promise<ClientV1Mange.UploadFileOutput> {
    return this.uploadFiles('/open-api/v1/files/upload', input);
  }
  /**
   * OCR (ID card - Face)
   */
  public async ocrIdCardFace(input: ClientV1Mange.OcrInput): Promise<ClientV1Mange.OcrIdCardFaceOutput> {
    return this.postRequest('/open-api/v1/ocr/idcard/face', input);
  }
  /**
   * OCR (ID card - Back)
   */
  public async ocrIdCardBack(input: ClientV1Mange.OcrInput): Promise<ClientV1Mange.OcrIdCardBackOutput> {
    return this.postRequest('/open-api/v1/ocr/idcard/back', input);
  }
  /**
   * OCR (Passport)
   */
  public async ocrPassport(input: ClientV1Mange.OcrInput): Promise<ClientV1Mange.OcrPassportOutput> {
    return this.postRequest('/open-api/v1/ocr/passport', input);
  }
  /**
   * Submit account KYC
   */
  public async submitAccountKyc(input: ClientV1Mange.CreateKycInput): Promise<ClientV1Mange.CreateKycOutput> {
    return this.postRequest('/open-api/v1/kyc/submit', input);
  }
  /**
   * Reset account KYC
   */
  public async resetAccountKyc(input: ClientV1Mange.ResetKycInput): Promise<ClientV1Mange.ResetKycOutput> {
    return this.postRequest('/open-api/v1/kyc/reset', input);
  }
  /**
   * Get a face authentication url
   */
  public async getFaceAuthUrl(input: ClientV1Mange.FaceAuthUrlInput): Promise<ClientV1Mange.FaceAuthUrlOutput> {
    return this.getRequest('/open-api/v1/kyc/face-auth-url', input);
  }
  /**
   * Face authentication
   */
  public async faceAuth(input: ClientV1Mange.FaceAuthInput): Promise<ClientV1Mange.FaceAuthOutput> {
    return this.faceAuthRequest('/open-api/v1/kyc/face-auth', input);
  }
  /**
   * Get a account KYC
   */
  public async getAccountKyc(input: ClientV1Mange.AccountKycInput): Promise<ClientV1Mange.AccountKycOutput> {
    return this.getRequest(`/open-api/v1/kyc/${input.accountId}`, { accessToken: input.accessToken });
  }
  /**
   * List all balances
   */
  public async getBalances(input: ClientV1Mange.BalancesInput): Promise<ClientV1Mange.BalancesOutput> {
    return this.getRequest('/open-api/v1/balances', input);
  }
  /**
   * Create a transfer
   */
  public async createTransfer(input: ClientV1Mange.CreateTransferInput): Promise<ClientV1Mange.CreateTransferOutput> {
    return this.postRequest('/open-api/v1/asset/transfers', input);
  }
  /**
   * Get a transfer
   */
  public async getTransfer(input: ClientV1Mange.TransferInfoInput): Promise<ClientV1Mange.TransferInfoOutput> {
    return this.getRequest(`/open-api/v1/asset/transfers/${input.id}`, { accessToken: input.accessToken });
  }
  /**
   * Trigger webhook
   */
  public async triggerWebhook(input: ClientV1Mange.TriggerWebhookInput): Promise<ClientV1Mange.TriggerWebhookOutput> {
    return this.postRequest('/open-api/v1/notifications/trigger', input);
  }
  /**
   * V1 版本 card 接口
   */
  public get card(): CardV1Service {
    if (!V1Service.cardV1Instance) {
      V1Service.cardV1Instance = new CardV1Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V1Service.cardV1Instance;
  }
  /**
   * V1 版本 global account 接口
   */
  public get globalAccount(): GlobalAccountV1Service {
    if (!V1Service.globalAccountV1Instance) {
      V1Service.globalAccountV1Instance = new GlobalAccountV1Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V1Service.globalAccountV1Instance;
  }
  /**
   * V1 版本 crypto assets 接口
   */
  public get cryptoAssets(): CryptoAssetsV1Service {
    if (!V1Service.cryptoAssetsV1Instance) {
      V1Service.cryptoAssetsV1Instance = new CryptoAssetsV1Service(this.clientId, this.clientSecret, this.baseUrl);
    }
    return V1Service.cryptoAssetsV1Instance;
  }
}
