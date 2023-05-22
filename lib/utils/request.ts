import superagent from 'superagent';
import { ClientManage } from '../dto/dto';
import { ClientV1Mange } from '../dto/v1/v1.dto';
/**
 * patch 请求
 */
export const patchRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
  const req = superagent.patch(url).send(params);
  return Request(req, headers);
};

/**
 * post 请求
 */
export const postRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
  const req = superagent.post(url).send(params);
  return Request(req, headers);
};

/**
 * put 请求
 */
export const putRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
  const req = superagent.put(url).send(params);
  return Request(req, headers);
};

/**
 * delete 请求
 */
export const deleteRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
  const req = superagent.delete(url).send(params);
  return Request(req, headers);
};

/**
 * get 请求
 */
export const getRequest = async (url: string, query: Record<string, any>, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
  const req = superagent.get(url).query(query);
  return Request(req, headers);
};

/**
 * 上传文件
 */
export const uploadRequest = async (
  url: string,
  params: ClientV1Mange.UploadFileInput,
  headers: Record<string, any> = {},
): Promise<ClientManage.Output> => {
  const req = superagent.post(url);
  for (const val of params.files) {
    req.attach('files', val.file, {
      filename: val.filename,
      ...(val.contentType && { contentType: val.contentType }),
    });
  }
  return Request(req, headers);
};

/**
 * 上传人脸
 */
export const faceAuthRequest = async (
  url: string,
  params: ClientV1Mange.FaceAuthInput,
  headers: Record<string, any> = {},
): Promise<ClientManage.Output> => {
  const req = superagent.post(url);
  req.attach('file', params.file.file, {
    filename: params.file.filename,
    ...(params.file.contentType && { contentType: params.file.contentType }),
  });
  req.field('accountId', params.accountId);
  return Request(req, headers);
};

/**
 * 请求
 */
export const Request = async (req: superagent.SuperAgentRequest, headers: Record<string, any> = {}): Promise<ClientManage.Output> => {
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
