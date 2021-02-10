const express = require('express'); //from documentation: express is function
const app = express();//app is an object
//include the method-override package
const methodOverride = require('method-override');
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/trivias", require("./controllers/triviasController.js"));
app.use("/users", require("./controllers/usersController.js"));
app.use(express.static("public"));




app.listen(3000, ()=>{
    console.log("I am listening");
});