import { getUsers,postUsers,deleteUser } from "../user.controller.js";
import { limitUsersDelete } from "../helpers/limiter.helpers.js";
import { Router } from "express";

export const user = Router();

user.get('/',getUsers);
user.post('/',postUsers);
user.delete('/',limitUsersDelete(),deleteUser);