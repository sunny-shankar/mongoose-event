import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './db.schema';
import { Model } from 'mongoose';
@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  getHello(): any {
    return this.userModel.find({
      username: "test"
    })
  }
}
