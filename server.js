const { DB } = require("./mongodb");
const { app } = require("./route");
const bcrypt = require("bcrypt");

password = "Amanverma@9585";


bcrypt.hash("1234",10,(err,a)=>{
  console.log(a);
  bcrypt.compare("1234","$2b$10$MCky/QYOmnJIgE5ljkLiTuopA65hUuCyHvuXvifNmmfLxZNVpM63a",(e,a)=>{
    console.log(a);


  })
})





// (async () => {
//     const inputPassword = 'myPassword123';
//     // let hashedPassword;
//     try {
//       const hashedPassword = await hashPassword(inputPassword);
//       console.log(hashedPassword);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   })();


app.listen(2000, () => {
  console.log("App is running at 20000");
});
