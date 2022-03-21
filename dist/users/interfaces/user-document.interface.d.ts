import { Document } from 'mongoose';
export interface UserDoc extends Document {
    username: string;
    password: string;
    children: Array<string>;
    avatar: string;
    role: number;
}
