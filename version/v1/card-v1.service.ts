import { ClientV1Mange } from '../../lib/dto/v1/v1.dto';
import { RequestBaseService } from '../../request.base.service';

export class CardV1Service extends RequestBaseService {
  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    super(clientId, clientSecret, baseUrl);
  }
  /**
   * List all budgets
   */
  public async getBudgets(input: ClientV1Mange.card.BudgetsInput): Promise<ClientV1Mange.card.BudgetsOutput> {
    return this.getRequest('/open-api/v1/budget', input);
  }
  /**
   * Update a budget
   */
  public async updateBudget(input: ClientV1Mange.card.UpdateBudgetInput): Promise<ClientV1Mange.card.UpdateBudgetOutput> {
    return this.putRequest('/open-api/v1/budget', input);
  }
  /**
   * Create a budget
   */
  public async createBudget(input: ClientV1Mange.card.CreateBudgetInput): Promise<ClientV1Mange.card.CreateBudgetOutput> {
    return this.postRequest('/open-api/v1/budget', input);
  }
  /**
   * Increase the budget balance
   */
  public async increaseBudgetBalance(input: ClientV1Mange.card.IncreaseBudgetBalanceInput): Promise<ClientV1Mange.card.IncreaseBudgetBalanceOutput> {
    return this.postRequest('/open-api/v1/budget/add', input);
  }
  /**
   * Decrease the budget balance
   */
  public async decreaseBudgetBalance(input: ClientV1Mange.card.DecreaseBudgetBalanceInput): Promise<ClientV1Mange.card.DecreaseBudgetBalanceOutput> {
    return this.postRequest('/open-api/v1/budget/sub', input);
  }
  /**
   * List all budget transactions
   */
  public async getBudgetTransactions(input: ClientV1Mange.card.BudgetTxsInput): Promise<ClientV1Mange.card.BudgetTxsOutput> {
    return this.getRequest('/open-api/v1/budget/transactions', input);
  }
  /**
   * List all available card BIN
   */
  public async getCardBins(input: ClientV1Mange.card.CardBinsInput): Promise<ClientV1Mange.card.CardBinsOutput> {
    return this.getRequest('/open-api/v1/cards/bins', input);
  }
  /**
   * List all quantum cards
   */
  public async getCards(input: ClientV1Mange.card.CardsInput): Promise<ClientV1Mange.card.CardsOutput> {
    return this.getRequest('/open-api/v1/cards', input);
  }
  /**
   * Create a quantum card
   */
  public async createCard(
    input: ClientV1Mange.card.CreatePrepaidCardCardInput | ClientV1Mange.card.CreateBudgetCardCardInput,
  ): Promise<ClientV1Mange.card.CreateCardOutput> {
    return this.postRequest('/open-api/v1/cards', input);
  }
  /**
   * Create Quantum card parameters check
   */
  public async createCardCheck(
    input: ClientV1Mange.card.CreatePrepaidCardCardInput | ClientV1Mange.card.CreateBudgetCardCardInput,
  ): Promise<ClientV1Mange.card.CreateCardCheckOutput> {
    return this.postRequest('/open-api/v1/cards/create/check', input);
  }
  /**
   * Delete quantum card
   */
  public async deleteCard(input: ClientV1Mange.card.DeleteCardInput): Promise<ClientV1Mange.card.DeleteCardOutput> {
    return this.deleteRequest('/open-api/v1/cards', input);
  }
  /**
   * Quantum card transfer in
   */
  public async cardTransferIn(input: ClientV1Mange.card.CardTransferInInput): Promise<ClientV1Mange.card.CardTransferInOutput> {
    return this.postRequest('/open-api/v1/cards/transfer/in', input);
  }
  /**
   * Quantum card transfer out
   */
  public async cardTransferOut(input: ClientV1Mange.card.CardTransferOutInput): Promise<ClientV1Mange.card.CardTransferOutOutput> {
    return this.postRequest('/open-api/v1/cards/transfer/out', input);
  }
  /**
   * Frozen quantum card
   */
  public async suspendCard(input: ClientV1Mange.card.SuspendCardInput): Promise<ClientV1Mange.card.SuspendCardOutput> {
    return this.putRequest('/open-api/v1/cards/suspend', input);
  }
  /**
   * Unfrozen quantum card
   */
  public async enableCard(input: ClientV1Mange.card.EnableCardInput): Promise<ClientV1Mange.card.EnableCardOutput> {
    return this.putRequest('/open-api/v1/cards/enable', input);
  }
  /**
   * Velocity Control
   */
  public async velocityControl(input: ClientV1Mange.card.VelocityControlInput): Promise<ClientV1Mange.card.VelocityControlOutput> {
    return this.putRequest('/open-api/v1/cards/velocity-control', input);
  }
  /**
   * Frozen quantum card balance
   */
  public async frozenCardBalance(input: ClientV1Mange.card.FrozenCardBalanceInput): Promise<ClientV1Mange.card.FrozenCardBalanceOutput> {
    return this.postRequest('/open-api/v1/cards/frozen', input);
  }
  /**
   * Unfrozen quantum card balance
   */
  public async unfrozenCardBalance(input: ClientV1Mange.card.UnfrozenCardBalanceInput): Promise<ClientV1Mange.card.UnfrozenCardBalanceOutput> {
    return this.postRequest('/open-api/v1/cards/unfrozen', input);
  }
  /**
   * Get a quantum card private info
   */
  public async getCardPrivateInfo(input: ClientV1Mange.card.CardPrivateInfoInput): Promise<ClientV1Mange.card.CardPrivateInfoOutput> {
    return this.getRequest('/open-api/v1/cards/info', input);
  }
  /**
   * List all quantum card transactions
   */
  public async getCardTransactions(input: ClientV1Mange.card.CardTxsInput): Promise<ClientV1Mange.card.CardTxsOutput> {
    const res = await this.getRequest('/open-api/v1/cards/transactions', input);
    const data = res.content?.data;
    const pageTotal = res.content?.pageTotal || 0;
    const total = res.content?.total;
    return {
      ...res,
      content: {
        ...res.content,
        data: {
          data,
          pageTotal,
          total,
        },
      },
    };
  }
}
