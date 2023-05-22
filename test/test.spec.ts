import Client from '../index';
describe('client', () => {
  let client: Client;

  beforeAll(async () => {
    client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'http://127.0.0.1:3000');
  });

  it('获取access token', async () => {
    const res1 = await client.getCode();
    const res2 = await client.getAccessToken(res1.content.code);
    const res3 = await client.refreshAccessToken(res2.content.refreshToken);
    console.log(res3);
  });
});
