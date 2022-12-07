import { Request, Response } from "express";
import User from "../models/user";
import { IUser } from "../types";

const usercontroller = {
  getUserById: async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      const user = await User.findById(id);
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
  getAllUSers: async (_req: Request, res: Response) => {
    try {
      const users = await User.find<IUser[]>({})
      res.status(200).json({
        users,
      });

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const { name, age, email, password } = req.body;
      const exist = await User.findOne<IUser>({ email });
      if (exist) {
        res.status(403).json({
          message: "Email already exists",
        })
        return;
      }
      const newUser = new User({ name, age, email, password });
      await newUser.save();

      res.status(200).json({
        message: "User created",
      })

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },

  deleteUserById: async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      const user = await User.findByIdAndDelete(id);

      res.status(200).json({
        message: "User deleted",
        user,
      })
    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
  updateUserById: async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      const { name, age, email } = req.body;
      const user = await User.findByIdAndUpdate(id, { name, age, email }, { new: true });

      res.status(200).json({
        message: "User Updated",
        user,
      })
    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },
  filterByAge: async (req: Request, res: Response) => {
    try {
      let age = req.params.age;
      const users = await User.find<IUser[]>({age:{
        $gte:age 
      }})
      res.status(200).json({
        users,
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
