import { DeepPartial } from "../../../../../../packages/types/src/DeepPartial";
import { getCounter } from "../../../../test/counters";
import UserModel, { UserDocument, User } from "../UserModel";

export const createUser = async(args?: DeepPartial<User>): Promise<UserDocument> => {

    const i = getCounter('user');

    return new UserModel({
        username: `user#${i}`,
        email: `user@example.com#${i}`,
        password: `password#${i}`,
        ...args,
    }).save();
}