import Client from '../index';
import * as fs from 'fs';
import { ClientV1Mange } from '../lib/dto/v1/v1.dto';
import { ApiException } from '../api-exception';
describe('V1', () => {
  jest.setTimeout(30000);

  let client: Client;
  let accessToken = '126b01fb256607b7f3b45713501edf33fb94d7be';

  beforeAll(async () => {
    client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'https://global.service.test.qbitnetwork.com');
  });

  it('List account fee rates', async () => {
    const res = await client.v1.accountFeeRates({
      accessToken,
    });

    console.log(res.content);
  });

  it('Create a account', async () => {
    try {
      const res = await client.v1.createAccount({
        phone: '+8613100200004',
        name: 'klover',
        accessToken,
      });
      console.log(JSON.stringify(res));
    } catch (error) {
      console.log(error);
      if (error instanceof ApiException) {
        console.log(error.getErrorMessage);
      }
    }
  });

  it('List all accounts', async () => {
    const res = await client.v1.getAccounts({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });

  it('List all users', async () => {
    const res = await client.v1.getUsers({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });

  it('Upload file', async () => {
    const res = await client.v1.uploadFile({
      accessToken,
      files: [
        {
          filename: '1.jpg',
          file: fs.readFileSync('./test/1.jpg'),
          contentType: 'image/jpg',
        },
        {
          filename: '2.png',
          file: fs.readFileSync('./test/2.png'),
          contentType: 'image/png',
        },
        {
          filename: '3.jpg',
          file: fs.readFileSync('./test/3.jpg'),
          contentType: 'image/jpg',
        },
      ],
    });

    console.log(JSON.stringify(res.content.data));
    // ["042bd6dd-0652-4071-9151-adfec3ec6f76","50093652-b423-4093-8dde-bd5026027f7c","8434a222-4289-46e0-b317-b93c4558ea98"]}
  });
  it('OCR (ID card - Face)', async () => {
    const res = await client.v1.ocrIdCardFace({
      accessToken,
      image: '042bd6dd-0652-4071-9151-adfec3ec6f76',
    });
    console.log(JSON.stringify(res));
  });
  it('OCR (ID card - Back)', async () => {
    const res = await client.v1.ocrIdCardBack({
      accessToken,
      image: '50093652-b423-4093-8dde-bd5026027f7c',
    });
    console.log(JSON.stringify(res));
  });
  it('OCR (Passport)', async () => {
    const res = await client.v1.ocrPassport({
      accessToken,
      image: '8434a222-4289-46e0-b317-b93c4558ea98',
    });
    console.log(JSON.stringify(res));
  });
  it('Submit account KYC', async () => {
    const res = await client.v1.submitAccountKyc({
      accessToken,
      address: {
        addressLine1: '39#',
        city: '杭州',
        state: '浙江',
        country: '中国',
        postalCode: '330000',
      },
      addressEn: {
        addressLine1: '39#',
        city: 'hangzhou',
        state: 'zhejiang',
        country: 'CN',
        postalCode: '330000',
      },
      name: {
        firstName: 'klover',
        lastName: 'w',
        firstNamePinYin: 'klover',
        lastNamePinYin: 'w',
      },
      identification: {
        type: 'CN-RIC',
        frontAttachmentId: '042bd6dd-0652-4071-9151-adfec3ec6f76',
        backAttachmentId: '50093652-b423-4093-8dde-bd5026027f7c',
        number: '130521200005181911',
        startDate: '2022-01-01',
        expirationDate: '2025-01-01',
      },
      accountId: 'a2ef49cb-2bf6-49e5-bce3-2af2c5c0a2b7',
      dob: '1996-12-04',
      nationality: 'CN',
    });
    console.log(res);
    console.log(res.content.data);
  });
  it('Reset account KYC', async () => {
    const res = await client.v1.resetAccountKyc({
      accessToken,
      accountId: '39794c87-0edd-4633-a521-c0a754171663',
    });
    console.log(res);
    console.log(res.content.data);
  });
  it('Get a face authentication url', async () => {
    const res = await client.v1.getFaceAuthUrl({
      accessToken,
      accountId: '39794c87-0edd-4633-a521-c0a754171663',
    });
    console.log(JSON.stringify(res));
  });
  it('Face authentication', async () => {
    const res = await client.v1.faceAuth({
      accessToken,
      accountId: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
      file: {
        filename: 'face.mp4',
        file: fs.readFileSync('./test/face.mp4'),
        contentType: 'video/mp4',
      },
    });
    console.log(JSON.stringify(res));
  });
  it('Get a account KYC', async () => {
    const res = await client.v1.getAccountKyc({
      accessToken,
      accountId: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
    });
    console.log(JSON.stringify(res));
  });
  it('List all balances', async () => {
    const res = await client.v1.getBalances({
      accessToken,
      accountId: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
      limit: 10,
    });
    console.log(JSON.stringify(res));
  });
  it('Create a transfer', async () => {
    const res = await client.v1.createTransfer({
      accessToken,
      source: { type: 'quantum_account' },
      destination: {
        type: 'quantum_sub_account',
        id: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
      },
      amount: '100',
    });
    console.log(JSON.stringify(res));
  });
  it('Get a transfer', async () => {
    const res = await client.v1.getTransfer({
      accessToken,
      id: '4c5a4c90-0552-4cac-9914-e5a7c4631530',
    });
    console.log(JSON.stringify(res));
  });
  it('Trigger webhook', async () => {
    const res = await client.v1.triggerWebhook({
      accessToken,
      type: 'AssetsDeposit',
      conditions: {
        chain: 'ETH',
        transactionHash: '0xde6e46e96464b467e2a619c808944f1dfc6bf2298cdb22dfa2cdb6950784b713',
      },
    });
    console.log(JSON.stringify(res));
  });
  it('List all budgets', async () => {
    const res = await client.v1.card.getBudgets({
      accessToken,
      accountId: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
      limit: 10,
    });
    console.log(JSON.stringify(res));
  });
  it('Update a budget', async () => {
    const res = await client.v1.card.updateBudget({
      accessToken,
      budgetId: '3a449f7e-0d86-4934-912b-b5ff7a49e73b',
      name: 'klover2',
    });
    console.log(JSON.stringify(res));
  });
  it('Create a budget', async () => {
    const res = await client.v1.card.createBudget({
      accessToken,
      accountId: '32b74f5a-260d-41ab-9d54-dd994b9f0a3e',
      name: 'klover',
      cost: '10',
    });
    console.log(JSON.stringify(res));
  });
  it('Increase the budget balance', async () => {
    const res = await client.v1.card.increaseBudgetBalance({
      accessToken,
      budgetId: '3a449f7e-0d86-4934-912b-b5ff7a49e73b',
      cost: 10,
    });
    console.log(JSON.stringify(res));
  });
  it('Decrease the budget balance', async () => {
    const res = await client.v1.card.decreaseBudgetBalance({
      accessToken,
      budgetId: '3a449f7e-0d86-4934-912b-b5ff7a49e73b',
      cost: 10,
    });
    console.log(JSON.stringify(res));
  });
  it('List all budget transactions', async () => {
    const res = await client.v1.card.getBudgetTransactions({
      accessToken,
      limit: 10,
    });
    console.log(JSON.stringify(res));
  });
  it('List all available card BIN', async () => {
    const res = await client.v1.card.getCardBins({
      accessToken,
    });
    console.log(JSON.stringify(res.content.data));
  });
  it('List all quantum cards', async () => {
    const res = await client.v1.card.getCards({
      accessToken,
      limit: 10,
      // id: 'e0076ec1-00d3-434d-9733-1ca93c646501',
    });
    console.log(JSON.stringify(res.content));
  });
  it('Create a quantum card', async () => {
    const res = await client.v1.card.createCard({
      accessToken,
      type: 'PrepaidCard',
      cardAddress: {
        addressLine1: '39.No',
        city: 'hangzhou',
        state: 'hangzhou',
        country: 'CN',
        postalCode: '330000',
      },
      bin: '414631',
      batchCount: 1,
      cost: 10,
      firstName: 'KLOVER',
      lastName: 'W',
      useType: 'test',
      phone: '13112340001',
      phoneCode: '86',
    });
    console.log(JSON.stringify(res));
  });
  it('Delete quantum card', async () => {
    const res = await client.v1.card.deleteCard({
      accessToken,
      cardId: 'acf0dcc4-d219-44ff-ac08-9ee30210f36f',
    });
    console.log(JSON.stringify(res.content));
  });
  it('Quantum card transfer in', async () => {
    const res = await client.v1.card.cardTransferIn({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
      clientTransactionId: '111',
      cost: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Quantum card transfer out', async () => {
    const res = await client.v1.card.cardTransferOut({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
      clientTransactionId: '2223',
      cost: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Frozen quantum card', async () => {
    const res = await client.v1.card.suspendCard({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Unfrozen quantum card', async () => {
    const res = await client.v1.card.enableCard({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Velocity Control', async () => {
    const res = await client.v1.card.velocityControl({
      accessToken,
      cardId: '168136b1-ab5d-4896-9efa-d9be30b70255',
      type: 'DAY',
      limit: '10',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Frozen quantum card balance', async () => {
    const res = await client.v1.card.frozenCardBalance({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
      cost: 1,
      clientTransactionId: '14355ugfdvs',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Unfrozen quantum card balance', async () => {
    const res = await client.v1.card.unfrozenCardBalance({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
      cost: 1,
      clientTransactionId: '14355ugfdvs1',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a quantum card private info', async () => {
    const res = await client.v1.card.getCardPrivateInfo({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all quantum card transactions', async () => {
    const res = await client.v1.card.getCardTransactions({
      accessToken,
      cardId: 'e0076ec1-00d3-434d-9733-1ca93c646501',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all global accounts', async () => {
    const res = await client.v1.globalAccount.getGlobalAccounts({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a global account', async () => {
    const res = await client.v1.globalAccount.createGlobalAccount({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      currency: 'USD',
      purpose: 'test',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all bank accounts', async () => {
    const res = await client.v1.globalAccount.getBanks({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      globalSubAccountId: '279df0ee-990c-4948-880a-17c4b7b41c64',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all beneficiaries', async () => {
    const res = await client.v1.globalAccount.getBeneficiaries({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      globalSubAccountId: '279df0ee-990c-4948-880a-17c4b7b41c64',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a beneficiary', async () => {
    const res = await client.v1.globalAccount.createBeneficiaries({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      firstName: 'klover',
      lastName: '2',
      currency: 'CNY',
      relationship: ClientV1Mange.globalAccount.RelationshipEnum.AGENCY_RELATIONSHIP,
      receiverAddress: { addressLine1: '北京', addressLine2: '', city: '北京市', country: 'CN', postalCode: '000000', state: '北京' },
      accountNumber: '1655783758',
      bankName: '07750000',
      bankAddress: { addressLine1: '北京', addressLine2: '', city: '北京市', country: 'CN', postalCode: '', state: '北京' },
      bankBranchName: '北京支行',
      certificateNo: '123456786543',
      routingNumber: '',
      type: 'Business',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a exchange rate', async () => {
    const res = await client.v1.globalAccount.getRate({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      sellCurrency: 'USD',
      buyCurrency: 'CNY',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a payment', async () => {
    const res = await client.v1.globalAccount.payment({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      balanceId: '2f69c1a1-22ca-456e-872d-d92e5dc138b9',
      receiverId: 'e24b6e3e-6637-4e22-be8c-24747bab4240',
      amount: 200,
      clientTransactionId: '14314dfgsfgs',
      reference: 'test',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Batch create payments', async () => {
    const res = await client.v1.globalAccount.batchPayment({
      accessToken,
      paymentList: [
        {
          accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
          balanceId: '2f69c1a1-22ca-456e-872d-d92e5dc138b9',
          receiverId: 'e24b6e3e-6637-4e22-be8c-24747bab4240',
          amount: 200,
          clientTransactionId: '14314dfgsfgs',
          reference: 'test',
        },
      ],
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a payment fee', async () => {
    const res = await client.v1.globalAccount.getPaymentFee({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      balanceId: '2f69c1a1-22ca-456e-872d-d92e5dc138b9',
      receiverId: 'e24b6e3e-6637-4e22-be8c-24747bab4240',
      amount: 200,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all payment transactions', async () => {
    const res = await client.v1.globalAccount.getPaymentTransactions({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all wallet balances', async () => {
    const res = await client.v1.cryptoAssets.getBalances({
      accessToken,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all addresses', async () => {
    const res = await client.v1.cryptoAssets.getAddresses({
      accessToken,
      limit: 10,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a blockchain address', async () => {
    const res = await client.v1.cryptoAssets.createBlockchainAddress({
      accessToken,
      currency: 'USDC',
      chain: 'TRX',
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all deposit history', async () => {
    const res = await client.v1.cryptoAssets.getDeposits({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all withdrawal history', async () => {
    const res = await client.v1.cryptoAssets.getWithdrawals({
      accessToken,
      accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Withdraw coin', async () => {
    const res = await client.v1.cryptoAssets.withdrawal({
      accessToken,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      chain: 'TRX',
      currency: 'USDC',
      amount: '1',
      address: 'TYc4k8chg3GkczmcWtscwS6pHfa864Mi75',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all bills', async () => {
    const res = await client.v1.cryptoAssets.getBills({
      accessToken,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a trade currency pair', async () => {
    const res = await client.v1.cryptoAssets.getCurrencyPair({
      accessToken,
      fromCurrency: 'USDT',
      toCurrency: 'BTC',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a estimate quote', async () => {
    // TODO
    const res = await client.v1.cryptoAssets.estimateQuote({
      accessToken,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      baseCurrency: 'ETH',
      quoteCurrency: 'BTC',
      side: 'sell',
      rfqCurrency: 'BTC',
      rfqAmount: '0.002',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all trades', async () => {
    const res = await client.v1.cryptoAssets.getTrades({
      accessToken,
      // accountId: 'd37deed7-f0e7-4635-a43a-781af0cb59f0',
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a trade', async () => {
    // TODO
    const res = await client.v1.cryptoAssets.trade({
      accessToken,
      baseCurrency: 'ETH',
      quoteCurrency: 'BTC',
      side: 'buy',
      rfqCurrency: 'ETH',
      rfqAmount: '0.002',
      quoteId: '',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all Wire bank accounts', async () => {
    const res = await client.v1.cryptoAssets.getWires({
      accessToken,
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a wire bank account', async () => {
    const res = await client.v1.cryptoAssets.wire({
      accessToken,
      firstName: 'first',
      lastName: 'lastName',
      accountNumber: '1112356456',
      bank: {
        city: 'hz',
        country: 'CN',
        bankName: '平安银行',
      },
      billingAddress: {
        addressLine1: '1',
        addressLine2: '2',
        city: 'hz',
        country: 'CN',
        district: 'sz',
        postalCode: '330000',
      },
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Delete a Wire bank account', async () => {
    const res = await client.v1.cryptoAssets.deleteWire({
      accessToken,
      id: '1a0523b5-f8a0-4aed-b9fb-a805682e74aa',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('List all payouts', async () => {
    const res = await client.v1.cryptoAssets.getPayouts({
      accessToken,
      limit: 10,
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Create a payout', async () => {
    const res = await client.v1.cryptoAssets.payout({
      accessToken,
      wireId: 'e2a3b4dd-ecce-4f7d-b84d-6bd8685134cc',
      amount: '1',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
  it('Get a payout', async () => {
    const res = await client.v1.cryptoAssets.getPayout({
      accessToken,
      id: 'd7e86002-d2e5-4108-85f6-e8d10d4677df',
    });
    console.log(JSON.stringify(res));
    console.log(JSON.stringify(res.content));
  });
});
