import { ParameterizedContext } from "koa";
import jwt from 'jsonwebtoken';

import { config } from './config'

import { UserDocument, UserModel } from "./modules/User/UserModel";


export const getUser = async (token: string | null | undefined) => {

    if(!token) return { user: null };


    try{
        
        const subToken = token.substring(6);
        const decodedToken = jwt.verify(subToken, config.JWT_KEY);
        const decodedId = decodedToken as { id: string };

        const user = await UserModel.findOne({ _id: decodedId.id});

        return { user };
    }catch(err){
        return { user: null };
    }
};

export const generateJwtToken = (user: UserDocument) => {
    return `JWT ${jwt.sign({ id: user._id }, config.JWT_KEY)}`;
}

