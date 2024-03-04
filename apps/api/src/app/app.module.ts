import { UserModule } from '@api/user';
import { AuthModule } from '@core/auth';
import { DatabaseModule } from '@core/database';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
