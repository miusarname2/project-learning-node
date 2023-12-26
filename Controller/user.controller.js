import { queryAsync } from "./conection.controller.js";

/*
* TODO: Hacer el controlador para actualizar un usuario y para solicitar la informacion de un usuario
*/

// logic 
const createUser = async (content)=>{
    try {
        const result = await queryAsync(
            'INSERT INTO users VALUES (?,?,?)',
            [content.name,content.password,content.IsAuth]
        );
        return result;
    } catch (error) {
        return null;
    }
}

const readUsers = async ()=>{
    try {
        const result = await queryAsync(
            'SELECT * FROM user'
        );
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

const removeUser = async (id) => {
    try {
        const result = await queryAsync(
            "DELETE FROM users  WHERE id = ?",
            [id]
        );
        return result;
    } catch (error) {
        return null;
    }
}


// Router funcions

export async function getUsers(req,res) {
    try {
        const users = await readUsers();
        console.log(users,'usr');
        res.status(200).json({status : 200, data:users});
        return {status : 200, data:users};
    } catch (error) {
        console.error(error);
        res.status(500);
        return { status:500,Message : "Internal Error" };
    }
}

export async function deleteUser(req,res) {
    try {
        const deletUserRes = await removeUser(req.id);
        res.status(200).json({status : 200, data:deletUserRes});
        return {status : 200, data:deletUserRes};
    } catch (error) {
        console.error(error);
        res.status(500);
        return { status:500,Message : "Internal Error" };
    }
}

export async function postUsers(req,res) {
    try {
        const { name, password, IsAuth} = req.body;
        const createUserresp = await createUser(req.body);
        res.status(200).json({status : 200, data:createUserresp});
        return {status : 200, data:users};
    } catch (error) {
        console.error(error);
        res.status(500);
        return { status:500,Message : "Internal Error" };
    }
}
