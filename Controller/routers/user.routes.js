import { getUsers,postUsers,deleteUser } from "../user.controller.js";
import { Router } from "express";

export const user = Router();

user.get('/',getUsers)