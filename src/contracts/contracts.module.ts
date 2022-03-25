import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';
import { Contract, ContractSchema } from './schemas/contract.schema';
import { Slot, SlotSchema } from "./schemas/slot.schema";
import { User, UserSchema } from "../users/schemas/user.schema";
import { UsersModule } from "../users/users.module";
import { UsersService } from "../users/users.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Contract.name, schema: ContractSchema },
      { name: Slot.name, schema: SlotSchema },
    ]),
    UsersModule
  ],
  controllers: [ContractsController],
  providers: [ContractsService, UsersService]
})
export class ContractsModule {}
