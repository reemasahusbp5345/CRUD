const Users= require("../models/user");

const getUser=(req,res)=>{
  Users.find()
  .then((user)=>res.json(user))
  .catch((err)=>res.status(404).json("Error"))
}

const registerUser = async (req, res) => {
  const { password, name } = req.body;
  const nameExists = await Users.findOne({
    name,
  });

  if (nameExists) {
    res.status(400).json({
      error: true,
      message: "User already exists",
    });
    return;
  }

  const user = new Users({
    name,
    password,
  });

  user
    .save()
    .then(() =>
      res.status(200).json({
        message: "Registered Successfully",
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "Could not Register",
      })
    );
};



const loginUser = async (req, res) => {
    try {
        let { name, password } = req.body;
        
        const user = await Users.findOne({
            name,
        });
        
        if (!user) {
            res.status(400).json({
                error: true,
                message: "Name does not exist",
            });
            return;
        }else{
            res.status(200).json({
                message:"User is Logged in"
            })
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            error: true,
            success: false,
            message: "Somthing went wrong",
        });
    }
};

module.exports ={ registerUser,loginUser,getUser};