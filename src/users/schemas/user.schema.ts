import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop(String)
    username: string;

    @Prop(String)
    password: string;

    @Prop([String])
    children: string[];

    @Prop(String)
    avatar: string;

    @Prop(Number)
    role: number;
}

export const UserSchema = SchemaFactory.createForClass(User);