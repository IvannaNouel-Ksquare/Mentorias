import { Request,Response } from "express";
import { User } from "../types";

const DB:User[] = [
  {
    id: 1,
    name: "Juan",
    age: 25,
    email: "juan@gmail.com",
  },
  {
    id: 8,
    name: "Maria",
    age: 20,
    email: "maria@gmail.com",
  },
  {
    id: 16,
    name: "Jose",
    age: 29,
    email: "jose@gmail.com",
  },
];

const usercontroller = {
  getUserById: (req:Request, res:Response) => {
    try {
      let id = req.params.id;
      const user:User | undefined = DB.find((usr) => usr.id === parseInt(id));
      if (!user) {
        res.status(404).json({
          error: "User not found",
        });
        return;
      }
      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
  getAllUSers: (_req:Request, res:Response) => {
    try {
      res.status(200).json({
        users: DB,
      });
    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
  createUser: (req:Request, res:Response) => {
    try {
      const { name, age, email } = req.body;
      const exist:User | undefined = DB.find((user) => user.email === email)
      if(exist){
        res.status(403).json({
          error:"Email already exists"
        })
        return 
      }
      const id = DB[DB.length-1].id+1;
      DB.push({
        id: id,
        name,
        age,
        email,
      })
      res.status(200).json({
        message: "User created",
        data: {
          id: id, 
          name,
          age,
          email,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
};

export default usercontroller;
