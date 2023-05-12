import mongoose, { Document, Model } from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      index: true,
    },
    password: {
      type: String,
      hidden: true,
    },
  },

  {
    collection: "User",
    timestamps: true,
  }
);


export type UserProps = {
  name: string;
  email: string;
  password: string;
  authenticate: (password: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  createdAt: Date;
} & Document 

UserSchema.pre<UserProps>('save', function encryptPasswordHook(next) {
  // Hash the password
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

const UserModel = Model<UserProps> = mongoose.models["User"] || mongoose.model("user", UserSchema);
    
export default UserModel;
 