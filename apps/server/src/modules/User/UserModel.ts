import mongoose, { Document, Model, Types } from "mongoose";
import bcrypt from 'bcryptjs'
import { Maybe } from "../../../../../packages/types/src/Maybe";

export type User = {
  username: string;
  email: string;
  password: string;
  authenticate: (password: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  createdAt: Date;
  _id: Types.ObjectId;
} 

type UserDocument = Maybe<Document> & User

const UserSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      required: true,
      type: String,
      minlength: 7,
      hidden: true,
    },
  },

  {
    collection: "User",
    timestamps: true,
  }
);

UserSchema.pre<UserDocument>('save', function encryptPasswordHook(next) {
  if (this.isModified('password')) {
    this.password = this.encryptPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  authenticate(password: string){
    return bcrypt.compareSync(password, this.password);
  },
  encryptPassword(password: string){
    return bcrypt.hashSync(password, 8)
  }
}

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);
    
export type { UserDocument }
 