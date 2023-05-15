import mongoose, { Document, Model } from "mongoose";
import bcrypt from 'bcryptjs'

export type UserProps = {
  username: string;
  email: string;
  password: string;
  authenticate: (password: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  createdAt: Date;
} 

type UserDocument = Document & UserProps

const UserSchema = new mongoose.Schema<UserProps>(
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
      index: true,
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
export type { UserDocument }
 