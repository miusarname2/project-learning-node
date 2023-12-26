import rateLimit from "express-rate-limit";

export let limitGrt = () => {
    return rateLimit({
        windowMs: 50 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            if (parseInt(req.headers["content-length"]) > 690) {
                res.status(413).send({
                    status: 413,
                    message: "Tamaño de la solicitud alcanzado"
                });
                return true;
            }
            return false;
        },
        message: (req, res) => {
            res.status(429).send({
                status: 429,
                message: "Limite alcanzado"
            });
            return true;
        }
    });
}

export const limitUsersDelete = () => rateLimit(
    {
        windowMs:60*60*1000,
        max:3,
        standardHeaders:true,
        legacyHeaders:true,
        skip:(req,res)=>{
            if (parseInt(req.headers["content-length"]) > 690){
                res.status(413).send({
                    status:413,
                    message : "limite alcanzado"
                });
                return true;
            }
            return false;
        },
        message:(req,res)=>{
            res.status(429).send({
                status: 429,
                message: "Limite alcanzado"
            });
            return true;
        }
    }
)