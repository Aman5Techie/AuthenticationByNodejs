const express = require('express');

// NOTE - For everyting Considered basic_version
const {changepassword,createuser,loginuser} = require("./controller")
const app = express();
app.use(express.json())
app.use(express.static('frontend'))

app.route('/register').post(createuser).patch(changepassword)
app.route('/login').get(loginuser)

module.exports = {app}