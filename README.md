<p style="text-align: center;">
  <h1 align="center"><a href="javascript:void(0);">qbit-node-sdk</a></h1>
</p>

## Qbit 概念

开发者 API 旨在允许企业与 Qbit 系统集成，并轻松将其作为其工作流程的一部分。该 API 允许开发者使用【全球账户】、【量子卡】业务等。

## 项目状态

当前版本`1.1.0`为正式版本。暂时支持了 auth 相关的接口，其他接口带后续完善，同时也提供了 Qbit Api 所需的 Post、put、delete、get 请求，方便使用者更好调用其他接口，具体使用请看下面代码示例。

`注意`：请商户的专业技术人员在使用时注意系统和软件的正确性和兼容性，以及带来的风险。

## 环境要求

- Node 12+

## 安装

最新版本已经在 [npmjs](https://www.npmjs.com/package/qbit-node-sdk) 发布。

`yarn add qbit-node-sdk` 或者 `npm i qbit-node-sdk`

### js 中使用

```js
const Qbit = require('qbit-node-sdk');
const qbit = new Qbit('qbit1f6efee44ceb8ca2', '8f70d42a1393802aebf567be27a47879', 'https://api-global.qbitnetwork.com');
```

### ts 中使用

```ts
import Client from 'qbit-node-sdk';
const client = new Client('qbit1f6efee44ceb8ca2', '8f70d42a1393802aebf567be27a47879', 'https://api-global.qbitnetwork.com');
```

### nest 框架中使用

请看 [nest-qbit-node-sdk](https://github.com/klover2/nest-qbit-node-sdk)

## 名词解释

- Client，合作伙伴在 Qbit 我们称之为 Client。
- Account， 合作伙伴的客户在 Qbit 我们称之为 Account
- clientId，商户 id，请联系我们申请。
- clientSecret，商户密钥，用于签名，请联系我们申请。

## 开始

### get access token

```ts
const codeRes = await client.getCode();
const res = await client.getAccessToken(codeRes.content.code);
console.log(res.content.accessToken);
```

### refresh access token

```ts
const res = await client.refreshAccessToken(refreshToken);
console.log(res);
```

### refresh access token

```ts
const res = await client.refreshAccessToken(refreshToken);
console.log(res);
```

```ts
const res = await client.refreshAccessToken(refreshToken);
console.log(res);
```

### encrypt Hmac SHA256

```ts
const sign = await client.encryptHmacSHA256(
  {
    id: 'ee74c872-8173-4b67-81b1-5746e7d5ab88',
    accountId: null,
    holderId: 'd2bd6ab3-3c28-4ac7-a7c4-b7eed5eee367',
    currency: 'USD',
    settlementCurrency: null,
    counterparty: 'SAILINGWOOD;;US;1800948598;;091000019',
    transactionAmount: 11,
    fee: 0,
    businessType: 'Inbound',
    status: 'Closed',
    transactionTime: '2021-11-22T07:34:10.997Z',
    transactionId: '124d3804-defa-4033-9f30-1d8b0468e506',
    clientTransactionId: null,
    createTime: '2021-11-22T07:34:10.997Z',
    appendFee: 0,
  },
  '25d55ad283aa400af464c76d713c07ad',
);
console.log(sign);
// => 8287d5539c03918c9de51176162c2bf7065d5a8756b014e3293be1920c20d102
```

### V1 Interface Example

```ts
// Create a account
const res = await client.v1.createAccount({
  phone: '+8613100200001',
  name: 'klover',
  accessToken,
});
```

#### Vl API List

| name                               | func                                                |
| ---------------------------------- | --------------------------------------------------- |
| Create a account                   | client.v1.createAccount(...)                        |
| List all accounts                  | client.v1.getAccounts(...)                          |
| List all users                     | client.v1.getUsers(...)                             |
| Upload file                        | client.v1.uploadFile(...)                           |
| OCR (ID card - Face)               | client.v1.ocrIdCardFace(...)                        |
| OCR (ID card - Back)               | client.v1.ocrIdCardBack(...)                        |
| OCR (Passport)                     | client.v1.ocrPassport(...)                          |
| Submit account KYC                 | client.v1.submitAccountKyc(...)                     |
| Reset account KYC                  | client.v1.resetAccountKyc(...)                      |
| Get a face authentication url      | client.v1.getFaceAuthUrl(...)                       |
| Face authentication                | client.v1.faceAuth(...)                             |
| Get a account KYC                  | client.v1.getAccountKyc(...)                        |
| List all balances                  | client.v1.getBalances(...)                          |
| Create a transfer                  | client.v1.createTransfer(...)                       |
| Get a transfer                     | client.v1.getTransfer(...)                          |
| Trigger webhook                    | client.v1.triggerWebhook(...)                       |
| List all budgets                   | client.v1.card.getBudgets(...)                      |
| Update a budget                    | client.v1.card.updateBudget(...)                    |
| Create a budget                    | client.v1.card.createBudget(...)                    |
| Increase the budget balance        | client.v1.card.increaseBudgetBalance(...)           |
| Decrease the budget balance        | client.v1.card.decreaseBudgetBalance(...)           |
| List all budget transactions       | client.v1.card.getBudgetTransactions(...)           |
| List all available card BIN        | client.v1.card.getCardBins(...)                     |
| List all quantum cards             | client.v1.card.getCards(...)                        |
| Create a quantum card              | client.v1.card.createCard(...)                      |
| Delete quantum card                | client.v1.card.deleteCard(...)                      |
| Quantum card transfer in           | client.v1.card.cardTransferIn(...)                  |
| Quantum card transfer out          | client.v1.card.cardTransferOut(...)                 |
| Frozen quantum card                | client.v1.card.suspendCard(...)                     |
| Unfrozen quantum card              | client.v1.card.enableCard(...)                      |
| Frozen quantum card balance        | client.v1.card.frozenCardBalance(...)               |
| Unfrozen quantum card balance      | client.v1.card.unfrozenCardBalance(...)             |
| Get a quantum card private info    | client.v1.card.getCardPrivateInfo(...)              |
| List all quantum card transactions | client.v1.card.getCardTransactions(...)             |
| List all global accounts           | client.v1.globalAccount.getGlobalAccounts(...)      |
| Create a global account            | client.v1.globalAccount.createGlobalAccount(...)    |
| List all bank accounts             | client.v1.globalAccount.getBanks(...)               |
| List all beneficiaries             | client.v1.globalAccount.getBeneficiaries(...)       |
| Create a beneficiary               | client.v1.globalAccount.createBeneficiaries(...)    |
| Get a exchange rate                | client.v1.globalAccount.getRate(...)                |
| Create a payment                   | client.v1.globalAccount.payment(...)                |
| Batch create payments              | client.v1.globalAccount.batchPayment(...)           |
| Get a payment fee                  | client.v1.globalAccount.getPaymentFee(...)          |
| List all payment transactions      | client.v1.globalAccount.getPaymentTransactions(...) |
| List all wallet balances           | client.v1.cryptoAssets.getBalances(...)             |
| List all addresses                 | client.v1.cryptoAssets.getAddresses(...)            |
| Create a blockchain address        | client.v1.cryptoAssets.createBlockchainAddress(...) |
| List all deposit history           | client.v1.cryptoAssets.getDeposits(...)             |
| List all withdrawal history        | client.v1.cryptoAssets.getWithdrawals(...)          |
| Withdraw coin                      | client.v1.cryptoAssets.withdrawal(...)              |
| List all bills                     | client.v1.cryptoAssets.getBills(...)                |
| Get a trade currency pair          | client.v1.cryptoAssets.getCurrencyPair(...)         |
| Get a estimate quote               | client.v1.cryptoAssets.estimateQuote(...)           |
| List all trades                    | client.v1.cryptoAssets.getTrades(...)               |
| Create a trade                     | client.v1.cryptoAssets.trade(...)                   |
| List all Wire bank accounts        | client.v1.cryptoAssets.getWires(...)                |
| Create a wire bank account         | client.v1.cryptoAssets.wire(...)                    |
| Delete a Wire bank account         | client.v1.cryptoAssets.deleteWire(...)              |
| List all payouts                   | client.v1.cryptoAssets.getPayouts(...)              |
| Create a payout                    | client.v1.cryptoAssets.payout(...)                  |
| Get a payout                       | client.v1.cryptoAssets.getPayout(...)               |

### V2 Interface Example

```ts
// List all cards
const res = await client.v2.getCards({
  accessToken,
});
```

#### V2 API List

| name           | func                    |
| -------------- | ----------------------- |
| List all cards | client.v2.getCards(...) |
| Get a card     | client.v2.getCard(...)  |

## 联系我们

如果你发现了**BUG**或者有任何疑问、建议，请通过 issue 进行反馈。

也欢迎访问我们的[官网](https://www.qbitnetwork.com/#/)。
