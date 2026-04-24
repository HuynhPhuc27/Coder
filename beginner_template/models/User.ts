import { Schema} from "mongoose";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";


const useSchema = new Schema({
    name:{
        type: String,
        unique: true,
        require: true,
    },

    email:{
        type: String,
        unique: true,
        require: true,
    },

    password:{
        type: String,
        require: true,
    },
}, {timestamps: true});


const User = mongoose.models.User || mongoose.model("User", useSchema );
export default User;