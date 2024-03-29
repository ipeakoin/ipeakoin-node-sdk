import Client from '../index';

describe('V1', () => {
  let client: Client;
  let accessToken = '126b01fb256607b7f3b45713501edf33fb94d7be';

  beforeAll(async () => {
    client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'http://127.0.0.1:3000');
  });

  it('List all cards', async () => {
    const res = await client.v2.card.getCards({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });
  it('Get a card', async () => {
    const res = await client.v2.card.getCard({
      accessToken,
      id: '077c9b0d-2b5f-482c-8f01-cddf84dbf5bd',
    });
    console.log(JSON.stringify(res));
  });
  it('Update card', async () => {
    const res = await client.v2.card.updateCard({
      accessToken,
      id: '39ebe743-9ce3-4ed1-b694-fc9fbc096541',
      phone: '13112340001',
      phoneCode: '86',
    });
    console.log(res);
  });
  it('Delete account', async () => {
    const res = await client.v2.deleteAccount({
      accessToken,
      accountId: '73beb830-7cbc-4fbc-919f-906f352981ed',
    });
    console.log(res);
  });
  it('List all quantum account transactions', async () => {
    const res = await client.v2.quantumAccount.getAccountTransactions({
      accessToken,
      limit: 10,
    });
    console.log(res.content.data);
  });
  it('Get a quantum account transaction', async () => {
    const res = await client.v2.quantumAccount.getAccountTransaction({
      accessToken,
      id: '55cf4f84-c558-470c-b78a-25d84e5d80f4',
    });
    console.log(res);
  });
});
