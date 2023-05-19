import superagent from 'superagent';
import { ClientManage } from '../dto';
/**
 * patch 请求
 */
export const patchRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  const req = superagent.patch(url).send(params);
  return Request(req, headers);
};

/**
 * post 请求
 */
export const postRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  const req = superagent.post(url).send(params);
  return Request(req, headers);
};

/**
 * put 请求
 */
export const putRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  const req = superagent.put(url).send(params);
  return Request(req, headers);
};

/**
 * delete 请求
 */
export const deleteRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  const req = superagent.delete(url).send(params);
  return Request(req, headers);
};

/**
 * get 请求
 */
export const getRequest = async (url: string, query: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  const req = superagent.get(url).query(query);
  return Request(req, headers);
};

/**
 * 请求
 */
export const Request = async (req: superagent.SuperAgentRequest, headers: Record<string, any> = {}): Promise<ClientManage.IOutput> => {
  try {
    const result: any = await req.set(headers);

    return {
      status: result.status,
      content: result.body,
    };
  } catch (error) {
    const err = JSON.parse(JSON.stringify(error));
    return {
      status: err.status as number,
      errRaw: err,
      error: err?.response?.text,
      content: null,
    };
  }
};
