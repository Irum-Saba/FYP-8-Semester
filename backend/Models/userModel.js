import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin:String,
        workAt: String,
        workStatus: String,
        followers: [],
        following: []
    },
    {timestamps: true}
)
const UserModel = mongoose.model("Users",UserSchema);
export default UserModel