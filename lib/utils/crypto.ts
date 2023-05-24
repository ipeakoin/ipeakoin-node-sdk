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
    } else if (typeof val === 'object') {
      if (!Array.isArray(val)) {
        const fields = Object.keys(val);
        fields.sort();
        const res: Record<string, unknown> = {};
        for (const field of fields) {
          res[field] = val[field];
        }
        val = res;
      }
      val = JSON.stringify(val);
    }
    result.push(`${key}=${val}`);
  }

  const str = result.join('&');

  const hmac = crypto.createHmac('sha256', clientSecret);
  const sign = hmac.update(str).digest('hex');
  return sign;
};
