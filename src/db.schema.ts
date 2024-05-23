import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { AuditSchema } from './mongoose.decorator';

export type UserDocument = HydratedDocument<User>;


@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}


export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(AuditSchema)