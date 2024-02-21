import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware<Request, Response> {
  use(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: (error?: any) => void,
  ) {
    console.log(`Request from ${req.ip}...`);
    next();
  }
}
