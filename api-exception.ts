/**
 * 统一错误处理
 */
export class ApiException extends Error {
  private status: number;
  private errorMessage: { code: number; message: string };
  private responseHeaders: Record<string, any>;
  constructor(status: number, message: string, errorMessage: { code: number; message: string }, responseHeaders: Record<string, any>) {
    super(message);
    this.name = new.target.name;
    this.status = status;
    this.errorMessage = errorMessage;
    this.responseHeaders = responseHeaders;
    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, new.target);
    }
    if (typeof Object.setPrototypeOf === 'function') {
      Object.setPrototypeOf(this, new.target.prototype);
    } else {
      (this as any).__proto__ = new.target.prototype;
    }
  }

  public get getErrorMessage() {
    return this.errorMessage;
  }

  public get getStatus() {
    return this.status;
  }

  public get getResponseHeaders() {
    return this.responseHeaders;
  }
}
