import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthentificationException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.OK);
  }
}
