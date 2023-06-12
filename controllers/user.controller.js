const User =  require("../models/user.model");
exports.homePage = (req,res)=>{
    res.send("home route");
}
exports.createUser = async (req,res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save();
        res.status(201).json({message: "new user created!", newUser});
    } catch (error) {
        res.status(201).json({message: error.message});
    }
}
exports.loginuser = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email: email});
        if(user && user.password === password){
            res.status(200).json({message: "user login", user});
        }else{
            res.status(404).json({message: "User not found"})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}