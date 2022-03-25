import { Document } from 'mongoose';
import { Contract } from "../../contracts/interfaces/contract.interface";

export interface UserDoc extends Document {
    username: string;
    password: string;
    children: Array<string>;
    contracts: Array<Contract>
    avatar: string;
    role: string;
}