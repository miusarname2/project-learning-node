import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { User } from "../../dist/user.js";

var data;

export async function validateUser(req,res,next) {
    try {
        data= plainToClass(User,req.body,
            {
                excludeExtraneousValues:true
            }
            );
        await validate(data);
        req.body = data;
        next()
        return data;
    } catch (error) {
        console.log(error)
        res.status(500).json({status:500,message:error})
        return error;
    }
}