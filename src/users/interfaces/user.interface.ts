import { Contract } from "../../contracts/interfaces/contract.interface";

export interface User {
    id?: string;
    username: string;
    password: string;
    children: Array<string>;
    contracts?: Array<Contract>;
    avatar: string;
    role: string;
}