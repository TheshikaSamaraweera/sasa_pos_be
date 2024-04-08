import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchManagerModule } from './branchManager/branchManager.module';

import { CashierModule } from './cashier/cashier.module';
import { InventoryModule } from './inventory/inventory.module';
import { BranchModule } from './branch/branch.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),


    BranchManagerModule,

    MongooseModule.forRoot(process.env.DB_URI),

    CashierModule,
    InventoryModule,

    BranchModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
