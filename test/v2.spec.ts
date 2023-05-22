import Client from '../index';

describe('V1', () => {
  let client: Client;
  let accessToken = 'be41c06e11795655e439cbd4b02c335e770ba27f';

  beforeAll(async () => {
    client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'http://127.0.0.1:3000');
  });

  it('List all cards', async () => {
    const res = await client.V2.getCards({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });
  it('Get a card', async () => {
    const res = await client.V2.getCard({
      accessToken,
      id: '',
    });
    console.log(JSON.stringify(res));
  });
});
