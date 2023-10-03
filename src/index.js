const express = require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const templatePath=path.join(__dirname,"../templates");
const { connectToMongoDB, collection } = require('./mongodb');

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) => {
    res.render("login");
})

app.post("/signup", async (req,res) => {

    const data ={
        email: req.body.email,
        password: req.body.password,
    }

    try {
        await connectToMongoDB(); // Connect to MongoDB
        await collection.insertMany([data]); // Insert data into MongoDB
        res.render("home");
    } catch (error) {
        console.error('Error in signup:', error);
        res.send("Error in signup");
    }

}),

app.post("/login", async (req,res) => {
    try {
        await connectToMongoDB(); // Connect to MongoDB
        const check = await collection.findOne({email:req.body.email});
        if(check.password==req.body.password){
            res.render("home")
        }
        else{
            res.send("Incorrect password")
        }
    } catch (error) {
        console.log(error);
        res.send("wrong details")
    }


}),

app.listen(3000, () => console.log('Port connected'));




