import { ClientManage } from './lib/dto';
import { deleteRequest, getRequest, postRequest, putRequest } from './lib/utils/request';

export class RequestBaseService {
  private accessToken = '';

  //#region 请求
  /**
   * 设置 accessToken
   */
  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    return this;
  }
  /**
   * post 请求
   * @param url
   * @param params
   * @returns
   */
  public async postRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await postRequest(url, params, {
      ...(this.accessToken && { 'x-ipeakoin-access-token': this.accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * put 请求
   * @param url
   * @param params
   * @returns
   */
  public async putRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await putRequest(url, params, {
      ...(this.accessToken && { 'x-ipeakoin-access-token': this.accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * delete 请求
   * @param url
   * @param params
   * @returns
   */
  public async deleteRequest(url: string, params: Record<string, any>): Promise<ClientManage.IOutput> {
    return await deleteRequest(url, params, {
      ...(this.accessToken && { 'x-ipeakoin-access-token': this.accessToken }),
      'Content-Type': 'application/json',
    });
  }
  /**
   * get 请求
   * @param url
   * @param params
   * @returns
   */
  public async getRequest(url: string, query: Record<string, any>): Promise<ClientManage.IOutput> {
    return await getRequest(url, query, {
      ...(this.accessToken && { 'x-ipeakoin-access-token': this.accessToken }),
      'Content-Type': 'application/json',
    });
  }
  //#endregion 请求
}
