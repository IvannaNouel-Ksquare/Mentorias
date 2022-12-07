import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    _id:string, 
    name:string,
    age:number,
    email:string,
    password: string,
}

export interface INews {
    _id:string, 
    title:string,
    views:number,
}

export interface IToken {
    _id:string,
    email:string,
}