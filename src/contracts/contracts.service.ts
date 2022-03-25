import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contract, ContractDocument } from "./schemas/contract.schema";
import { Model, Types } from "mongoose";
import { CreateContractDto } from "./dto/create-contract.dto";
import { Slot, SlotDocument } from "./schemas/slot.schema";
import { UpdateContractDto } from "./dto/update-contract.dto";
import { User, UserDocument } from "../users/schemas/user.schema";
import { UsersService } from "../users/users.service";

@Injectable()
export class ContractsService {
    constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>,
      @InjectModel(Contract.name) private contractModel: Model<ContractDocument>,
      @InjectModel(Slot.name) private slotModel: Model<SlotDocument>,
      private usersService: UsersService
    ) {}

    async create(createContractDTO: CreateContractDto): Promise<User> {
        const createdSlots = await this.slotModel.create(createContractDTO.slots);
        const updatedContractDTO = {...createContractDTO, slots: createdSlots.map(slot => { return { _id: slot._id } })};
        const createdContract = new this.contractModel(updatedContractDTO);
        await createdContract.populate(['slots']);
        await createdContract.save();
        return this.usersService.findByIdAndAddContract(createContractDTO.userId, createdContract);
    }

    async update(id: string, updatedContractDTO: UpdateContractDto): Promise<Contract> {
        const objectId = new Types.ObjectId(id);
        const createdSlots = await this.slotModel.create(updatedContractDTO.slots);
        const contractToUpdate = {...updatedContractDTO, slots: createdSlots.map(slot => { return { _id: slot._id } })};

        const updatedContract = await this.contractModel
          .findByIdAndUpdate(objectId, contractToUpdate)
          .setOptions({ overwrite: true, new: true })
          .populate('slots');

        if (!updatedContract)
            throw new NotFoundException();

        return updatedContract;
    }

    async findAll(): Promise<Contract[]> {
        const contracts = await this.contractModel
          .find()
          .populate('slots');
        if (!contracts)
            throw new NotFoundException();
        return contracts;
    }
}
