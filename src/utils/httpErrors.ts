export abstract class HTTPClientError extends Error {
  public readonly name!: any;
  public readonly statusCode!: number;

  constructor(status: number, message: object | string) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// tslint:disable-next-line:max-classes-per-file
export class HTTPError extends HTTPClientError {
  constructor(
    public readonly statusCode: number,
    message: string | object = "Bad Request",
  ) {
    super(statusCode, message);
  }
}
