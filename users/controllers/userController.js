import mongoose from "mongoose";
import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    const {name} = req.body;
    try{
        const user = await User.create({name});
        res.status(200).json({
            status: "success",
            name
        })
    }catch(err){
        res.status(404).json({msg: err.message});
    }
}

export const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            message: "user list",
            users
        })
    }catch(err) {
        res.status(404).json({msg: err.message});
    }
}