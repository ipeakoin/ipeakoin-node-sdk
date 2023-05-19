import Client from '../index';
describe('qbit', () => {
  let client: Client;

  beforeAll(async () => {
    client = new Client('qbit6857c6c64fe91a6c', '4562cc4554028413722a2e33f9115298', 'http://127.0.0.1:3000');
  });

  it('获取access token', async () => {
    const res1 = await client.getCode();
    const res2 = await client.getAccessToken(res1.content.code);
    const res3 = await client.refreshAccessToken(res2.content.refreshToken);
    console.log(res3);
  });
});
