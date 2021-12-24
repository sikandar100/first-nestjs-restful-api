import { Module } from '@nestjs/common';

import { AuthGuard } from './authGuard';

@Module({
  imports: [AuthModule],
  providers: [AuthGuard],
})
export class AuthModule {}
