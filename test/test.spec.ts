import Client from '../index';
describe('client', () => {
  let client: Client;

  beforeAll(async () => {
    client = new Client({
      clientId: 'ipeakoin1ab59eccfbc78d1b',
      clientSecret: '93fc39d77ef6a3a7b5f26b83fbbebe81',
      baseUrl: 'http://127.0.0.1:3000',
    });
  });

  it('获取access token', async () => {
    const res1 = await client.getCode();
    const res2 = await client.getAccessToken(res1.content.code);
    // const res3 = await client.refreshAccessToken(res2.content.refreshToken);
    console.log(res2);
  });

  it('encryptHmacSHA256', async () => {
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
  });
});
