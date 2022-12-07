import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    id:number, 
    name:string,
    age:number,
    email:string,
    password: string,
}

export interface INews {
    id:number, 
    title:string,
    views:number,
}

