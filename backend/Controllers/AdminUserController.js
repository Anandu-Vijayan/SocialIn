import UserModel from "../Models/userModel.js";





//get all users
export const getAllUsers =async(req,res)=>{
    try {
      let users = await UserModel.find()
  
      users = users.map((user)=>{
        const {password,...otherDetails} = user._doc
        return otherDetails
      })
      res.status(200).json({users})
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

// get a User

export const getUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await UserModel.findById(id);
  
      if (user) {
        const { password, ...otherDetails } = user._doc;
  
        res.status(200).json(otherDetails);
      } else {
        res.status(404).json("No such user exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

//Delete AdminUser
export const deleteUser = async (req,res)=>{
    const id = req.params.id
  
    const {currentUserId,currentUserAdminStatus}= req.body
  
    if(currentUserId ===id || currentUserAdminStatus){
      try {
        await UserModel.findByIdAndDelete(id)
        res.status(200).json("User deleted")
      } catch (error) {
        res.status(500).json(error)
      }
    } 
    else{
      res.status(403).json("Access Denied ! you can only Delete your own profile")
    }
  }
   