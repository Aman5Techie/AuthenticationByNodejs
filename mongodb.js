const mongoose = require("mongoose")
DATABASE = "mongodb+srv://Amanverma:<password>@project.rwranab.mongodb.net/?retryWrites=true&w=majority"
PASSWORD = "Amanverma@9585"

const DB = DATABASE.replace("<password>",PASSWORD)

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true 
}).then(()=>{
  console.log("Connection Succesfull");

}).catch((err)=>{
    console.log(err);
  })

module.exports = {DB}