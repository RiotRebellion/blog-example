import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthentificationException } from '../utils/exceptions/authentification-exception';

@Catch(AuthentificationException)
export class AuthentificationExceptionFilter implements ExceptionFilter {
  catch(exception: AuthentificationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
