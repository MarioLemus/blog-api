import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    email: { 
        type: String, 
        trim: true,
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        min: 4,
        trim: true,
        required: true 
    },
    nickname: { 
        type: String,
        min: 3,
        trim: true,
        required: true, 
        unique: true 
    },
    profilePic: { 
        type: String,
        trim: true,
        required: false,
        default: null 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

export const UserModel = mongoose.model("User", UserSchema);



