import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let url = new URL(
      `${request.protocol}://${request.get('host')}${request.originalUrl}`,
    );
    log(`${url.protocol}//${url.hostname}:8080${url.pathname}${url.search}`);
    return response.redirect(
      `${url.protocol}//${url.hostname}:8080${url.pathname}${url.search}`,
    );
  }
}
