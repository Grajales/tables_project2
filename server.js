require('dotenv').config();
const express = require('express'); //from documentation: express is function
const app = express();//app is an object
//include the method-override package
const methodOverride = require('method-override');
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/trivias", require("./controllers/triviasController.js"));
app.use("/users", require("./controllers/usersController.js"));
//Index
app.get('/', (req, res) => {
    res.render('users/index.ejs')
  })


// app.listen(3000, ()=>{
//     console.log("I am listening");
// });
app.listen(process.env.PORT, ()=>{
   console.log("I am listening");
 });