import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { NextFn } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { ViewService } from './view.service';

@Controller('')
export class ViewController {
  constructor(private viewService: ViewService) {}

  @Get('*')
  static(@Req() req: Request, @Res() res: Response, @Next() next: NextFn) {
    try {
      if (req.originalUrl === '/graphql') {
        console.log(req.originalUrl, 'asdf');
        next();
      }
      const handle = this.viewService.getNextServer().getRequestHandler();
      handle(req, res);
    } catch (Err) {
      console.log(Err);
    }
  }
}
