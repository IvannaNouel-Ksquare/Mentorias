import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { IUser } from "../types";
import User from "../models/user";

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
      const users = await User.find<IUser>({});
      const cleanUsers = users.map(user => {
        const { password, ...rest } = user.toObject();
        return rest;
      })

      res.status(200).json({
        users: cleanUsers,
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

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      const newUser = new User({ name, age, email, password: pass });
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
      let id = req.params.id; const user = await User.findByIdAndDelete(id);

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
      const users = await User.find<IUser>({
        age: {
          $gte: age
        }
      })
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
  login: async (req: Request, res: Response) => {
    try {
      const { password, email } = req.body;
      const user = await User.findOne<IUser>({ email });

      if (!user) {
        return res.status(404).json({
          message: "email not found",
        })
      }

      const correctPass = await bcrypt.compare(password, user.password);

      if (!correctPass) {
        return res.status(403).json({
          message: "wrong password",
        })
      }
      res.status(200).json({
        message: "User logged",
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
