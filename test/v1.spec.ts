import Client from '../index';
import * as fs from 'fs';
describe('V1', () => {
  let client: Client;
  let accessToken = 'be41c06e11795655e439cbd4b02c335e770ba27f';

  beforeAll(async () => {
    client = new Client('ipeakoin1ab59eccfbc78d1b', '93fc39d77ef6a3a7b5f26b83fbbebe81', 'http://127.0.0.1:3000');
  });

  it('Create a account', async () => {
    const res = await client.V1.createAccount({
      phone: '+8613100200001',
      name: 'klover',
      accessToken,
    });
    console.log(JSON.stringify(res));
  });

  it('List all accounts', async () => {
    const res = await client.V1.getAccounts({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });

  it('List all users', async () => {
    const res = await client.V1.getUsers({
      accessToken,
    });
    console.log(JSON.stringify(res));
  });

  it('Upload file', async () => {
    const res = await client.V1.uploadFile({
      accessToken,
      files: [
        {
          filename: '1.jpg',
          file: fs.readFileSync('./test/20230420-153736.jpg'),
          contentType: 'image/jpg',
        },
        {
          filename: '2.jpg',
          file: fs.readFileSync('./test/20230420-153736.jpg'),
          contentType: 'image/jpg',
        },
      ],
    });
    console.log(JSON.stringify(res));
  });
  it('OCR (ID card - Face)', async () => {
    const res = await client.V1.ocrIdCardFace({
      accessToken,
      image: '',
    });
    console.log(JSON.stringify(res));
  });
  it('OCR (ID card - Back)', async () => {
    const res = await client.V1.ocrIdCardBack({
      accessToken,
      image: '',
    });
    console.log(JSON.stringify(res));
  });
  it('OCR (Passport)', async () => {
    const res = await client.V1.ocrPassport({
      accessToken,
      image: '',
    });
    console.log(JSON.stringify(res));
  });
  it('Create a quantum card', async () => {
    const res = await client.V1.quantumCard.createCard({
      accessToken,
      type: 'PrepaidCard',
      cardAddress: {
        addressLine1: '39.No',
        city: 'hangzhou',
        state: 'hangzhou',
        country: 'CN',
        postalCode: '330000',
      },
      bin: '493193',
      batchCount: 1,
      cost: 10,
      firstName: 'KLOVER',
      lastName: 'W',
      useType: 'test',
    });
    console.log(JSON.stringify(res));
  });
});
