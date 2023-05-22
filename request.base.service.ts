import { ACCESS_TOKEN_NAME, BASE_URL, ClientManage } from './lib/dto/dto';
import { deleteRequest, faceAuthRequest, getRequest, postRequest, putRequest, uploadRequest } from './lib/utils/request';
import { ClientV1Mange } from './lib/dto/v1/v1.dto';

export class RequestBaseService {
  protected clientId: string;
  protected clientSecret: string;
  protected baseUrl = BASE_URL;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    if (baseUrl) this.baseUrl = baseUrl;
  }

  //#region 请求
  /**
   * post 请求
   * @param url
   * @param params
   * @returns
   */
  public async postRequest(url: string, params: Record<string, any>): Promise<ClientManage.Output> {
    const accessToken = params?.accessToken || '';
    delete params?.accessToken;
    const uri = `${this.baseUrl}${url}`;
    return await postRequest(uri, params, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * put 请求
   * @param url
   * @param params
   * @returns
   */
  public async putRequest(url: string, params: Record<string, any>): Promise<ClientManage.Output> {
    const accessToken = params?.accessToken || '';
    delete params?.accessToken;
    const uri = `${this.baseUrl}${url}`;
    return await putRequest(uri, params, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * delete 请求
   * @param url
   * @param params
   * @returns
   */
  public async deleteRequest(url: string, params: Record<string, any>): Promise<ClientManage.Output> {
    const accessToken = params?.accessToken || '';
    delete params?.accessToken;
    const uri = `${this.baseUrl}${url}`;
    return await deleteRequest(uri, params, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * get 请求
   * @param url
   * @param params
   * @returns
   */
  public async getRequest(url: string, query: Record<string, any>): Promise<ClientManage.Output> {
    const accessToken = query?.accessToken || '';
    delete query?.accessToken;
    const uri = `${this.baseUrl}${url}`;
    return await getRequest(uri, query, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * 上传文件
   */
  public async uploadFiles(url: string, params: ClientV1Mange.UploadFileInput): Promise<ClientV1Mange.UploadFileOutput> {
    const accessToken = params?.accessToken || '';
    const uri = `${this.baseUrl}${url}`;
    if (!params.files || params.files.length <= 0) throw new Error('缺少文件');

    return await uploadRequest(uri, params, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'multipart/form-data;boundary=boundary',
    });
  }
  /**
   * 人脸识别文件
   */
  public async faceAuthRequest(url: string, params: ClientV1Mange.FaceAuthInput): Promise<ClientV1Mange.FaceAuthOutput> {
    const accessToken = params?.accessToken || '';
    const uri = `${this.baseUrl}${url}`;

    return await faceAuthRequest(uri, params, {
      ...(accessToken && { [ACCESS_TOKEN_NAME]: accessToken }),
      'Content-Type': 'multipart/form-data;boundary=boundary',
    });
  }
  //#endregion 请求
}
