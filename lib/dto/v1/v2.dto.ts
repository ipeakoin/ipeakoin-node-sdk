import { ClientManage } from '../dto';

export namespace ClientV2Mange {
  export interface CardsInput extends ClientManage.Input, ClientManage.ListInput {
    id?: string;
    accountId?: string;
    label?: string;
    status?: string;
  }

  export interface CardsDataOutput {
    /**
     * 卡id
     */
    id: string;
    /**
     * 账号id
     */
    accountId: string;
    /**
     * 储值卡/额度卡
     */
    type: 'PrepaidCard' | 'BudgetCard';
    /**
     * 卡bin
     */
    bin: string;
    /**
     * 卡号后四位
     */
    last4: string;
    /**
     * 卡网络
     */
    network: 'MasterCard' | 'VISA';
    /**
     * 持卡人 firstName
     */
    firstName: string;
    /**
     * 持卡人 lastName
     */
    lastName: string;
    /**
     * 卡label
     */
    label: string;
    /**
     * 量子优选卡
     * Intelligent Purchases Routing
     */
    ipr: boolean;
    /**
     * 卡状态
     */
    status: string;
    /**
     * 预算id
     */
    budgetId?: string;
    createTime: string;
    /**
     * 余额
     */
    balance?: {
      /**
       * 可用余额
       */
      available: string;
      /**
       * 处理中的余额
       */
      pending: string;
      /**
       * 冻结的金额
       */
      frozen: string;
      /**
       * 币种
       */
      currency: string;
    };
    /**
     * 账单地址
     */
    billingAddress?: ClientManage.Address;
    velocityControl?: {
      type: string;
      limit: string;
    };
  }

  export interface CardsOutput extends ClientManage.Output {
    content: {
      code: number;
      message: string;
      data: {
        data: CardsDataOutput[];
        total: number;
        pageTotal: number;
      };
    };
  }

  export interface CardInfoInput extends ClientManage.Input {
    id: string;
  }

  export interface CardInfoOutput extends ClientManage.Output {
    content: {
      code: number;
      message: string;
      data: CardsDataOutput;
    };
  }
}
