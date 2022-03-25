import { Model, Types } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from "./schemas/user.schema";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Contract } from "../contracts/schemas/contract.schema";

@Injectable()
export class UsersService {

    constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create(createUserDto);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const objectId = new Types.ObjectId(id);
        const updatedUser = await this.userModel
          .findByIdAndUpdate(objectId, updateUserDto)
          .setOptions({ overwrite: true, new: true })
          .populate({ path: 'contracts', populate: {  path: 'slots' } });

        if (!updatedUser)
            throw new NotFoundException();

        return updatedUser;
    }

    async findAll(): Promise<User[]> {
        const users = await this.userModel
          .find()
          .populate({ path: 'contracts', populate: {  path: 'slots' } });
        if (!users)
            throw new NotFoundException();
        return users;
    }

    async findByIdAndAddContract(id: string, contract: Contract): Promise<User> {
        const objectId = new Types.ObjectId(id);
        const updatedUser = await this.userModel
          .findById(objectId)
          .populate({ path: 'contracts', populate: {  path: 'slots' } });

        if (!updatedUser)
            throw new NotFoundException();
        updatedUser.contracts.push(contract);
        return updatedUser.save();
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne(user => user.username === username).exec();
    }
}