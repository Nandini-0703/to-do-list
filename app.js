import express from "express";
import bodyParser from "body-parser";
//import ejs from "ejs";

//app.set('view engine','ejs');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


let newitems = [];
app.get("/" , (req , res) => {
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();
let day = today.toLocaleDateString("en-US", options)
    res.render("list.ejs" , {kindofday : day , currentitem : newitems});
});


app.post("/" , (req ,res) =>{
   let newitem = req.body.newitem;
   newitems.push(newitem);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
