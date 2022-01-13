import { Person } from "../models/user.js";

const users=[];

//get all users
export const getAllUsers = (req, res)=>{
    try{
        const {name} = req.params;
        const user = new Person(name);
        users.push(user)
        res.send(users);
    }
    catch(err){
        res.send(err.message);
    }
}