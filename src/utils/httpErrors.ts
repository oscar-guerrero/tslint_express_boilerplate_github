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
    message: string | object = 'Bad Request'
  ) {
    super(statusCode, message);
  }
}

// // tslint:disable-next-line:max-classes-per-file
// export class HTTP400Error extends HTTPClientError {
//   public readonly statusCode = 400;

//   constructor(message: string | object = 'Bad Request') {
//     super(message);
//   }
// }

// // tslint:disable-next-line:max-classes-per-file
// export class HTTP401Error extends HTTPClientError {
//   public readonly statusCode = 401;

//   constructor(message: string | object = 'Unauthorized') {
//     super(message);
//   }
// }

// // tslint:disable-next-line:max-classes-per-file
// export class HTTP403Error extends HTTPClientError {
//   public readonly statusCode = 403;

//   constructor(message: string | object = 'Forbidden') {
//     super(message);
//   }
// }

// // tslint:disable-next-line:max-classes-per-file
// export class HTTP404Error extends HTTPClientError {
//   public readonly statusCode = 404;

//   constructor(message: string | object = 'Not found') {
//     super(message);
//   }
// }
