import { Expose,Type,Transform } from "class-transformer";
import { IsDefined,IsString,IsNumber } from "class-validator";

export class User {
    @Expose({name:"nombre"})
    @IsString()
    @IsDefined(
        {
            message:()=>{
                throw {
                    status:422,
                    message : "El parametro -> nombre"
                }
            }
        }
    )
    name:String;

    @Expose({name:"contrasenia"})
    @IsString()
    @IsDefined(
        {
            message:()=>{
                throw {
                    status:422,
                    message : "El parametro -> contrasenia"
                }
            }
        }
    )
    password:String;


    @Expose({name:"IsAuth"})
    @IsNumber()
    @IsDefined(
        {
            message:()=>{
                throw {
                    status:422,
                    message : "El parametro -> IsAuth"
                }
            }
        }
    )
    IsAuth:number;

    constructor(nombre : String, contrasenia : String,IsAuth:number) {
        this.name = nombre;
        this.password = contrasenia;
        this.IsAuth = IsAuth;
    }
}