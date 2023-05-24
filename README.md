<p style="text-align: center;">
  <h1 align="center"><a href="javascript:void(0);">ipeakoin-node-sdk</a></h1>
</p>

## iPeakoin Concept

The developer API aims to allow enterprises to integrate with iPeakoin systems and easily make it part of their workflow. This API allows developers to use businesses such as [GLOBAL ACCOUNT], [CRYPTO ASSET], and [QUANTUM CARD].

## Project Status

It supports auth related interfaces and also provides other interfaces required by iPeakoin Api. Please refer to the following code example for specific usage.

`Notice`：Please ask the professional technical personnel of the merchant to pay attention to the correctness and compatibility of the system and software, as well as the risks involved when using them.

## Environmental Requirements

- Node 12+

## Install

The latest version is already available in [npmjs](https://www.npmjs.com/package/ipeakoin-node-sdk)。

`yarn add ipeakoin-node-sdk` or `npm i ipeakoin-node-sdk`

### Used in JS

```js
const Client = require('ipeakoin-node-sdk');

const client = new Client({
  clientId: '<your-client-id>',
  clientSecret: '<your-client-secret>',
  baseUrl: 'https://api-sandbox.ipeakoin.com',
});
```

### Used in TS

```ts
import Client from 'ipeakoin-node-sdk';

const client = new Client({
  clientId: '<your-client-id>',
  clientSecret: '<your-client-secret>',
  baseUrl: 'https://api-sandbox.ipeakoin.com',
});
```

## Start Using

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

## Contact Us

If you find a **BUG** or have any questions or suggestions, please provide feedback through the issue.
