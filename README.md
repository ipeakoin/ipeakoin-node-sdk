<p style="text-align: center;">
  <h1 align="center"><a href="javascript:void(0);">qbit-node-sdk</a></h1>
</p>

## Qbit 概念

开发者 API 旨在允许企业与 Qbit 系统集成，并轻松将其作为其工作流程的一部分。该 API 允许开发者使用【全球账户】、【量子卡】业务等。

## 项目状态

当前版本`1.0.1`为正式版本。暂时支持了 auth 相关的接口，其他接口带后续完善，同时也提供了 Qbit Api 所需的 Post、put、delete、get 请求，方便使用者更好调用其他接口，具体使用请看下面代码示例。

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
import Qbit from 'qbit-node-sdk';
const qbit = new Qbit('qbit1f6efee44ceb8ca2', '8f70d42a1393802aebf567be27a47879', 'https://api-global.qbitnetwork.com');
```

### nest 框架中使用

请看 [nest-qbit-node-sdk](https://github.com/klover2/nest-qbit-node-sdk)

## 名词解释

- Client，合作伙伴在 Qbit 我们称之为 Client。
- Account， 合作伙伴的客户在 Qbit 我们称之为 Account
- clientId，商户 id，请联系我们申请。
- clientSecret，商户密钥，用于签名，请联系我们申请。

## 开始

### 获取 access token

```ts
// 返回值 status 在 200 - 300 内表示请求正常
const codeRes = await qbit.getCode();
console.log(codeRes);
const code = codeRes.data?.code || '';
const accessTokenRes = await qbit.getAccessToken(code);
console.log(accessTokenRes);
```

### 刷新 access token

```ts
const res = await qbit.refreshAccessToken(refreshToken);
console.log(res);
```

### 调用其他接口示例

```ts
const res = await qbit.config(accessToken).postRequest('https://api-global.qbitnetwork.com/open-api/v1/budget', {
  name: '测试',
  cost: 10,
});
console.log(res);
```

## 敏感信息加解密

### 加密-HmacSHA256

```ts
const params = {
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
};
const sign = qbit.encryptHmacSHA256(params, '25d55ad283aa400af464c76d713c07ad');
console.log(sign);
```

## 联系我们

如果你发现了**BUG**或者有任何疑问、建议，请通过 issue 进行反馈。

也欢迎访问我们的[官网](https://www.qbitnetwork.com/#/)。
