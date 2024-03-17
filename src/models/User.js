import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    history: [
        {
            role: String,
            message: String
        }
    ]
}, { timestamps: true });

export const User = mongoose.models?.User || mongoose.model("User", userSchema);