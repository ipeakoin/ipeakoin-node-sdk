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

## 联系我们

如果你发现了**BUG**或者有任何疑问、建议，请通过 issue 进行反馈。

也欢迎访问我们的[官网](https://www.qbitnetwork.com/#/)。
