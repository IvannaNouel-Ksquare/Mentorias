import { Schema, model } from "mongoose";
import {IUser} from "../types";

const userSchema = new Schema<IUser>({
    name: { type: String, maxlength: 50, trim: true },
    age: { type: Number, maxlength: 2, trim: true },
    email: { type: String, maxlength: 150, trim: true,required:true},
    password: { type: String, maxlength: 50,required:true},
},
{
    timestamps: true,
    versionKey: false,
});

const User = model("User", userSchema)

export default User;