import {
  Controller,
  Get,
  HttpStatus,
  Ip,
  Req,
  Res,
  Header,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get('health')
  @Header('Cache-Control', 'none')
  check(@Req() req: Request, @Res() res: Response, @Ip() ip: string) {
    res.status(HttpStatus.OK).json({
      status: 'OK',
      ip: req.headers['x-real-ip'] || ip,
    });
  }
}
