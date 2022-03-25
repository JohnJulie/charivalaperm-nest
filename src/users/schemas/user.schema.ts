import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { Transform, Type } from "class-transformer";
import { Contract } from "../../contracts/schemas/contract.schema";
import * as mongoose from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

    @Transform(({ value }) => value.toString())
    _id: ObjectId;

    @Prop(String)
    username: string;

    @Prop(String)
    password: string;

    @Prop([String])
    children: string[];

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Contract.name }])
    @Type(() => Contract)
    contracts: Contract[];

    @Prop(String)
    avatar: string;

    @Prop(String)
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);