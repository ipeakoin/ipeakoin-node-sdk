import request from 'superagent';
import { QbitManage } from '../dto';
/**
 * post 请求
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const postRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<QbitManage.IOutput> => {
  try {
    const result = await request
      .post(url)
      .send(params)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    const err = error?.response?.body;
    if (!err) throw error;
    return {
      status: error?.status || 400,
      err: err,
    };
  }
};

/**
 * put 请求
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const putRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<QbitManage.IOutput> => {
  try {
    const result = await request
      .put(url)
      .send(params)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    const err = error?.response?.body;
    if (!err) throw error;
    return {
      status: error?.status || 400,
      err: err,
    };
  }
};

/**
 * delete 请求
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const deleteRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<QbitManage.IOutput> => {
  try {
    const result = await request
      .delete(url)
      .send(params)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    const err = error?.response?.body;
    if (!err) throw error;
    return {
      status: error?.status || 400,
      err: err,
    };
  }
};

/**
 * get 请求
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const getRequest = async (url: string, query: Record<string, any>, headers: Record<string, any> = {}): Promise<QbitManage.IOutput> => {
  try {
    const result = await request
      .get(url)
      .query(query)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    const err = error?.response?.body;
    if (!err) throw error;
    return {
      status: error?.status || 400,
      err: err,
    };
  }
};
