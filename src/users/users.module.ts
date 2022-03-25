import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { Contract, ContractSchema } from "../contracts/schemas/contract.schema";
import { Slot, SlotSchema } from "../contracts/schemas/slot.schema";
import { ContractsModule } from "../contracts/contracts.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Contract.name, schema: ContractSchema },
      { name: Slot.name, schema: SlotSchema },
    ])
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersModule]
})
export class UsersModule {}
