import { ClientManage } from '../dto';
import * as fs from 'fs';
import { type } from 'os';

export namespace ClientV1Mange {
  export interface CreateAccountInput extends ClientManage.Input {
    phone?: string;
    email?: string;
    name: string;
  }

  export interface CreateAccountOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        accountId: string;
        userId: string;
      };
    };
  }

  export interface AccountsInput extends ClientManage.Input, ClientManage.ListInput {
    id?: string;
  }

  export interface AccountsDataOutput {
    /** 账户 ID */
    id: string;

    /** 创建时间 */
    createTime: Date;

    /** 账户类型 */
    type: string;

    /** 状态 */
    status: string;

    /** 认证名字 */
    name: string;

    /** 分配的唯一数字ID */
    displayId: string;

    /** kyc 状态 */
    kycStatus: string;

    /** 量子卡业务kyb状态 */
    cardKybStatus?: string;

    /** 全球账户业务kyb状态 */
    globalAccountKybStatus?: string;

    /** KYC失败原因 */
    message?: string;
  }

  export interface AccountsOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        data: AccountsDataOutput[];
        total: number;
        pageTotal: number;
      };
    };
  }

  export interface UsersInput extends ClientManage.Input, ClientManage.ListInput {
    id?: string;
    accountId?: string;
  }

  export interface UsersDataOutput {
    /** ID */
    id: string;

    /** 账户id */
    accountId: string;

    /** 创建时间 */
    createTime: Date;

    /** 状态 */
    status: string;

    /** phone */
    phone: string;

    /** email */
    email: string;

    /** 操作员名称 */
    name: string;
  }

  export interface UsersOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        data: UsersDataOutput[];
        total: number;
        pageTotal: number;
      };
    };
  }

  export interface UploadFileInput extends ClientManage.Input {
    files: {
      /** 文件名称 */
      filename: string;
      /** 文件类型 */
      contentType?: string;
      /** 源文件 */
      file: Blob | Buffer | fs.ReadStream | string | boolean | number;
    }[];
  }

  export interface UploadFileOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: string[];
    };
  }

  export interface OcrInput extends ClientManage.Input {
    /** 图片id */
    image: string;
  }

  export interface OcrIdCardFaceOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        /** 地址信息 */
        address: string;

        /** 姓名 */
        name: string;

        /** 身份证号 */
        num: string;

        /** 性别 */
        sex: string;

        /** 民族 */
        nationality: string;

        /** 出生日期 */
        birth: string;
      };
    };
  }

  export interface OcrIdCardBackOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        /** 有效期-到期时间 */
        endDate: string;

        /** 有效期-开始时间 */
        startDate: string;

        /** 签发机关 */
        issue: string;
      };
    };
  }

  export interface OcrPassportOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        /** 签发国家代码 */
        country: string;

        /** 签发机关 */
        issue: string;

        /** 签发日期 */
        issueDate: string;

        /** 签发地址 */
        issuePlace: string;

        /** 签发地址(带拼音) */
        issuePlaceRaw: string;

        /** 到期日期 */
        expiryDate: string;

        /** 生日 */
        birthDate: string;

        /** 出生地 */
        birthPlace: string;

        /** 出生地(带拼音) */
        birthPlaceRaw: string;

        line0: string;

        line1: string;

        /** 姓名(英文) */
        name: string;

        /** 姓名(中文) */
        nameCn: string;

        /** 姓名(姓名中文包含拼音) */
        nameCnRaw: string;

        /** 所在地 */
        nation: string;

        /** 护照号码 */
        passportNo: string;

        /** 持照人身份ID */
        personId: string;

        /** 性别 */
        sex: string;

        /** 护照类型 */
        type: string;
      };
    };
  }

  export interface CreateKycInput extends ClientManage.Input {
    accountId: string;
    address: ClientManage.Address;
    addressEn: ClientManage.Address;
    name: ClientManage.Name;
    dob: string;
    /** Country code */
    nationality: string;
    identification: {
      /** 证件类型 */
      type: 'CN-RIC' | 'HK-HKID' | 'SG-NRIC' | 'MY-NRIC' | 'CA-DLN' | 'CA-NRIC' | 'PW-IC' | 'PASSPORT';
      frontAttachmentId: string;
      backAttachmentId: string;
      /** 证件号 */
      number: string;
      /** 起始日期 */
      startDate: string;
      /** 过期日期 */
      expirationDate: string;
    };
  }

  export type CreateKycOutput = ClientManage.StringOutput;

  export interface ResetKycInput extends ClientManage.Input {
    accountId: string;
  }

  export type ResetKycOutput = ClientManage.BooleanOutput;

  export interface FaceAuthUrlInput extends ClientManage.Input {
    accountId: string;
  }

  export type FaceAuthUrlOutput = ClientManage.StringOutput;

  export interface FaceAuthInput extends ClientManage.Input {
    accountId: string;
    file: {
      /** 文件名称 */
      filename: string;
      /** 文件类型 */
      contentType?: string;
      /** 源文件 */
      file: Blob | Buffer | fs.ReadStream | string | boolean | number;
    };
  }

  export type FaceAuthOutput = ClientManage.BooleanOutput;

  export interface AccountKycInput extends ClientManage.Input {
    accountId: string;
  }

  export interface AccountKycOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        accountId: string;
        address: ClientManage.Address;
        addressEn: ClientManage.Address;
        name: ClientManage.Name;
        dob: string;
        /** Country code */
        nationality: string;
        identification: {
          frontAttachmentId: string;
          backAttachmentId: string;
          /** 证件号 */
          number: string;
          /** 起始日期 */
          startDate: string;
          /** 过期日期 */
          expirationDate: string;
        };
        status: string;
        message: string;
        attachments: string[];
      };
    };
  }

  export interface BalancesInput extends ClientManage.Input {
    id?: string;
    accountId?: string;
    walletType?: string;
  }

  export interface BalancesOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: {
        data: {
          id: string;
          accountId: string;
          available: number;
          pending: number;
          frozen: number;
          currency: string;
          status: string;
          createTime: Date;
        }[];
        total: number;
        pageTotal: number;
      };
    };
  }

  export interface CreateCryptoAssetsSource {
    type: 'crypto_assets';
    currency: string;
  }
  export interface CreateQuantumAccountSource {
    type: 'quantum_account';
  }

  export interface CreateQuantumSubAccountSource {
    type: 'quantum_sub_account';
    id: string;
  }

  export interface CreateTransferInput extends ClientManage.Input {
    source: CreateCryptoAssetsSource | CreateQuantumAccountSource | CreateQuantumSubAccountSource;
    destination: CreateCryptoAssetsSource | CreateQuantumAccountSource | CreateQuantumSubAccountSource;
    amount: string;
  }

  export interface TransferInfoData {
    id: string;
    accountId: string;
    source: {
      type: string;
      id?: string;
      currency?: string;
    };
    destination: {
      type: string;
      id?: string;
      currency?: string;
    };
    amount: ClientManage.Amount;
    settled?: ClientManage.Amount;
    fee?: ClientManage.Amount;
    status: string;
    createTime: Date;
    updateTime: Date;
  }

  export interface CreateTransferOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: TransferInfoData;
    };
  }

  export interface TransferInfoInput extends ClientManage.Input {
    id: string;
  }

  export interface TransferInfoOutput extends ClientManage.Output {
    content: {
      code: string;
      message: string;
      data: TransferInfoData;
    };
  }

  export interface TriggerWebhookInput extends ClientManage.Input {
    type: string;
    conditions: {
      chain: string;
      transactionHash: string;
    };
  }

  export type TriggerWebhookOutput = ClientManage.BooleanOutput;

  //#region 卡
  export namespace card {
    export interface BudgetsInput extends ClientManage.Input, ClientManage.ListInput {
      id?: string;
      accountId?: string;
    }

    export interface BudgetsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            name: string;
            balanceId: string;
            expiryDate: string;
            createTime: string;
            status: string;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export interface UpdateBudgetInput extends ClientManage.Input {
      budgetId: string;
      name: string;
    }

    export type UpdateBudgetOutput = ClientManage.BooleanOutput;

    export interface CreateBudgetInput extends ClientManage.Input {
      accountId?: string;
      name: string;
      cost: string;
    }

    export type CreateBudgetOutput = ClientManage.StringOutput;

    export interface IncreaseBudgetBalanceInput extends ClientManage.Input {
      budgetId: string;
      cost: string;
      clientTransactionId?: string;
    }

    export type IncreaseBudgetBalanceOutput = ClientManage.BooleanOutput;

    export type DecreaseBudgetBalanceInput = IncreaseBudgetBalanceInput;

    export type DecreaseBudgetBalanceOutput = ClientManage.BooleanOutput;

    export interface BudgetTxsInput extends ClientManage.Input, ClientManage.ListInput {
      id?: string;
      accountId?: string;
    }

    export interface BudgetTxsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            budgetId: string;
            cardId?: string;
            amount: number;
            fee: number;
            clientTransactionId: string;
            type: string;
            status: string;
            transactionTime: Date;
            detail: string;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export type CardBinsInput = ClientManage.Input;

    export interface CardBinsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          /** 卡 bin */
          bin: string;

          /** 卡类型(储值卡, 额度卡) */
          type: string;

          /** 卡网络(VISA, MASTERCARD) */
          network: string;

          /** 发行银行的国家代码。遵循 ISO 3166-1 alpha-2 标准 */
          issuerCountry: string;

          /** 验证信息 */
          verification: {
            avs: boolean;
            threeDs: boolean;
          };

          /** 消费上线 */
          purchaseLimit: {
            day: string;
            single: string;
          };
        }[];
      };
    }

    export interface CardsInput extends ClientManage.Input, ClientManage.ListInput {
      id?: string;
      accountId?: string;
      label?: string;
    }

    export interface CardsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            userName: string;
            currency: string;
            provider: string;
            status: number;
            cardNoLastFour: string;
            token: string;
            label: string;
            cardAddress: ClientManage.Address;
            balanceId: string;
            budgetId?: string;
            createTime: Date;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export interface CreatePrepaidCardCardInput extends ClientManage.Input {
      /** 账户id */
      accountId?: string;
      /** 卡类型(储值卡, 额度卡) */
      type: 'PrepaidCard';
      /** 卡bin */
      bin?: string;
      /** 批量的数目 */
      batchCount: number;
      /** 开卡的金额,默认为10USD */
      cost?: number;
      /** 卡地址 */
      cardAddress?: ClientManage.Address;
      /** 持卡人名 */
      firstName: string;
      /** 持卡人姓 */
      lastName: string;
      /** 持卡人邮箱 */
      email?: string;
      /** 手机号区号 */
      phoneCode?: string;
      /** 持卡人手机号 */
      phone?: string;
      /** 使用场景 */
      useType: string;
      /** Client交易id(方便关联订单) */
      clientTransactionId?: string;
      /** 标签 */
      label?: string;
    }

    export interface CreateBudgetCardCardInput extends ClientManage.Input {
      /** 账户id */
      accountId?: string;
      /** 卡类型(储值卡, 额度卡) */
      type: 'BudgetCard';
      /** 卡bin */
      bin?: string;
      /** 批量的数目 */
      batchCount: number;
      /** 卡地址 */
      cardAddress?: ClientManage.Address;
      /** 持卡人名 */
      firstName: string;
      /** 持卡人姓 */
      lastName: string;
      /** 持卡人邮箱 */
      email?: string;
      /** 手机号区号 */
      phoneCode?: string;
      /** 持卡人手机号 */
      phone?: string;
      /** 使用场景 */
      useType: string;
      /** Client交易id(方便关联订单) */
      clientTransactionId?: string;
      /** 标签 */
      label?: string;
      /** 预算id */
      budgetId: string;
    }

    export type CreateCardOutput = ClientManage.BooleanOutput;

    export interface DeleteCardInput extends ClientManage.Input {
      cardId: string;
    }

    export type DeleteCardOutput = ClientManage.BooleanOutput;

    export interface CardTransferInInput extends ClientManage.Input {
      cardId: string;
      clientTransactionId: string;
      cost: number;
    }

    export type CardTransferInOutput = ClientManage.BooleanOutput;
    export type CardTransferOutInput = CardTransferInInput;
    export type CardTransferOutOutput = ClientManage.BooleanOutput;

    export interface SuspendCardInput extends ClientManage.Input {
      cardId: string;
    }

    export type SuspendCardOutput = ClientManage.BooleanOutput;
    export type EnableCardInput = SuspendCardInput;
    export type EnableCardOutput = ClientManage.BooleanOutput;
    export type FrozenCardBalanceInput = CardTransferInInput;
    export type FrozenCardBalanceOutput = ClientManage.BooleanOutput;
    export type UnfrozenCardBalanceInput = FrozenCardBalanceInput;
    export type UnfrozenCardBalanceOutput = ClientManage.BooleanOutput;
    export type CardPrivateInfoInput = SuspendCardInput;

    export interface CardPrivateInfoOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          cardNo: string;
          cvv: string;
          expYear: string;
          expMonth: string;
        };
      };
    }

    export interface CardTxsInput extends ClientManage.Input, ClientManage.ListInput {
      accountId?: string;
      cardId?: string;
      type?: string;
      status?: string;
      startTime?: string;
      endTime?: string;
    }

    export interface CardTxsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            cardId: string;
            currency: string;
            amount: number;
            fee: number;
            clientTransactionId: string;
            type: string;
            status: string;
            transactionTime: Date;
            detail?: string;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }
  }
  //#endregion

  //#region 全球账户
  export namespace globalAccount {
    export interface GlobalAccountsInput extends ClientManage.Input, ClientManage.ListInput {
      id?: string;
      accountId: string;
    }

    export interface GlobalAccountsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            createTime: Date;
            nickname: string;
            purpose: string;
            currency: string;
            balanceId: string;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export interface CreateGlobalAccountInput extends ClientManage.Input {
      accountId: string;
      currency: string;
      purpose: string;
      nickname?: string;
    }

    export type CreateGlobalAccountOutput = ClientManage.BooleanOutput;

    export interface BanksInput extends ClientManage.Input, ClientManage.ListInput {
      accountId: string;
      globalSubAccountId: string;
      id?: string;
      currency?: string;
    }

    export interface BanksOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            createTime: Date;
            accountName: string;
            accountNo?: string;
            currency: string;
            bankName: string;
            bankAddress: string;
            swift?: string;
            routingNumber?: string;
            routingType: string;
            branchName: string;
            branchCode?: string;
            status: string;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export interface BeneficiariesInput extends ClientManage.Input {
      accountId: string;
      globalSubAccountId: string;
      id?: string;
      currency?: string;
    }

    export interface BeneficiarieInfo {
      id: string;
      accountId: string;
      currency: string;
      type: string;
      userName: string;
      accountNumber: string;
      relationship: string;
      receiverAddress: ClientManage.Address;
      bankName: string;
      bankAddress: ClientManage.Address;
      bankBranchName: string;
      certificateNo: string;
      routingType?: string;
      routingNumber?: string;
      bic?: string;
      iban?: string;
    }

    export interface BeneficiariesOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: BeneficiarieInfo[];
          total: number;
          pageTotal: number;
        };
      };
    }

    export interface CreateBeneficiarieInput extends ClientManage.Input {
      accountId: string;
      firstName?: string;
      lastName: string;
      currency: string;
      accountNumber?: string;
      relationship: string;
      receiverAddress?: ClientManage.Address;
      bankAddress?: ClientManage.Address;
      bankName?: string;
      type?: string;
      bankBranchName?: string;
      certificateNo?: string;
      bic?: string;
      iban?: string;
      routingNumber?: string;
      routingNumber2?: string;
    }

    export interface CreateBeneficiarieOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: BeneficiarieInfo[];
      };
    }

    export interface RateInput extends ClientManage.Input {
      accountId: string;
      buyCurrency: string;
      sellCurrency: string;
    }

    export interface RateOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          pair: string;
          rate: string;
          exchangeRateId: string;
        };
      };
    }

    export interface PaymentInfo {
      accountId: string;
      balanceId: string;
      receiverId: string;
      amount: number;
      clientTransactionId: string;
      reference: string;
      transferType?: string;
      feeType?: string;
      purposeCode?: string;
      exchangeRateId?: string;
      realPaymentAmount?: number;
      shopType?: string;
    }

    export interface PaymentInput extends ClientManage.Input, PaymentInfo {}

    export type PaymentOutput = ClientManage.BooleanOutput;

    export interface BatchPaymentInput extends ClientManage.Input {
      paymentList: PaymentInfo[];
    }

    export type BatchPaymentOutput = ClientManage.BooleanOutput;

    export interface PaymentFeeInput extends ClientManage.Input {
      accountId: string;
      balanceId: string;
      receiverId: string;
      amount: number;
      feeType?: string;
      transferType?: string;
      shopType?: string;
    }

    export interface PaymentFeeOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          total: number;
          fee: number;
        };
      };
    }

    export interface PaymentTxsInput extends ClientManage.Input, ClientManage.ListInput {
      accountId: string;
      clientTransactionId?: string;
      currency?: string;
      id?: string;
    }

    export interface PaymentTxsOutput extends ClientManage.Output {
      content: {
        code: string;
        message: string;
        data: {
          data: {
            id: string;
            accountId: string;
            currency: string;
            settlementCurrency: string;
            counterparty: string;
            transactionAmount: number;
            fee: number;
            businessType: string;
            status: string;
            clientTransactionId: string;
            transactionId: string;
            createTime: Date;
            transactionTime: Date;
          }[];
          total: number;
          pageTotal: number;
        };
      };
    }
  }
  //#endregion
}
