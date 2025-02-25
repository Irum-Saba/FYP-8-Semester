import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// get all users
export const getAllUsers = async(req,res) =>{
    try {
        let users = await UserModel.find()

        users = users.map((user) =>{
            const {password, ...otherDetails} = user._doc
            return otherDetails
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get user from database
export const getUser = async(req,res) =>{
    const id = req.params.id;

    
    try {
        const user = await UserModel.findById(id)

        if(user)
        {
            const{password, ...otherDetails} =user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//update a user
export const updateUser = async(req,res) =>{
    const id = req.params.id
    const {_id, currentUserAdminStatus, password} = req.body

    if(id===_id)
    {
        try {
            if(password)
            {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new:true});
            const token = jwt.sign(
                {username: user.username, id: user._id},
                process.env.JWT_KEY,
                {expiresIn:"1h"}
            )
            res.status(200).json({user,token})
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json("Access Denied! You can only update your own profile.")
    }
}

// Delete User
export const deleteUser = async(req,res) =>{
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus} = req.body

    if(currentUserId===id || currentUserAdminStatus)
    {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted successfully.")
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json("Access Denied! You can only delete your own profile.")
    }
}

//Follow a User
export const followUser = async(req,res) =>{
    const id= req.params.id
    const {_id} = req.body

    if(_id===id)
    {
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if(!followUser.followers.includes(_id))
            {
                await followUser.updateOne({$push : {followers: _id}})
                await followingUser.updateOne({$push : {following: id}})
                res.status(200).json("User followed!")
            }
            else{
                res.status(403).json("User is already followed by you.")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

//UnFollow a User
export const UnFollowUser = async(req,res) =>{
    const id= req.params.id
    const {_id} = req.body

    if(_id===id)
    {
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const unfollowUser = await UserModel.findById(id);
            const unfollowingUser = await UserModel.findById(_id);
            if (unfollowUser.followers.includes(_id)) {
              await unfollowUser.updateOne({ $pull: { followers: _id } });
              await unfollowingUser.updateOne({ $pull: { following: id } });
              res.status(200).json("User Unfollowed!");
            } else {
              res.status(403).json("User is not followed by you!");
            }
          } catch (error) {
            res.status(500).json(error);
          }
    }
}

// For chat search the users
export const getAllSearchUsers = async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { username: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } }, // i means case insensitive
          ],
        }
      : {};
    const users = await UserModel.find(keyword);
    res.send(users);
  };