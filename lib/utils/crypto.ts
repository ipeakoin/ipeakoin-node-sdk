import * as crypto from 'crypto';

/**
 * HMAC-SHA256 签名
 */
export const encryptHmacSHA256 = (params: Record<string, any>, clientSecret: string) => {
  const keys = Object.keys(params);
  keys.sort();

  const result = [];

  for (const key of keys) {
    let val = params[key];
    if (val == null) {
      val = '';
    }
    result.push(`${key}=${val}`);
  }

  const str = result.join('&');

  const hmac = crypto.createHmac('sha256', clientSecret);
  const sign = hmac.update(str).digest('hex');
  return sign;
};
