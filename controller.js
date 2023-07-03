const { user } = require("./model");
const bcrypt = require("bcrypt");
// const bcrypt = require("./fronten");

const decryptpass = async (password, hashpassword) => {
  try {
    const cheakk = await bcrypt.compare(password, hashpassword);
    return cheakk
  } catch (err) {
    console.log(err);
  }
};

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
};

const createuser = async (req, res) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    // console.log(hashedPassword,"-->");
    data["password"] = hashedPassword;
    const success = await user.create(data);
    res.json({ success: success });
  } catch (err) {
    res.status(404).json("Invalid ");
    console.log(err);
  }
};

const loginuser = async (req, res) => {
  try {
    const data = req.body;
    const realdata = await user.findOne({ username: data.username });
    if (!realdata) {
      return res.status(404).json({ Invalid: "Username not valid" });
    }
    const check = await bcrypt.compare(data.password,realdata.password);
    console.log((data.password),check);
    console.log((realdata.password),check);
    if (!check) {
      return res.status(404).json({ Password: "Incorrect" });
    }
    res.status(200).json({ Login: "Sucessfull" });
    // res.redirect("./frontend/next.html")
  } catch (err) {
    res.status(404).json({ err: "invalid" });
    console.log(err);
  }
};

const changepassword = async (req, res) => {
  try {
    
    
    
    const data = (req.body);
    const updatedpassword = await hashPassword(data.password);
    const update = await user.findOneAndUpdate({"username":data.username, "email":data.email},{"password":updatedpassword},{
        new : true
    })
    res.json({"update":update})

  } catch (err) {
    console.log(err);
  }
};

module.exports = { createuser, loginuser, changepassword };
