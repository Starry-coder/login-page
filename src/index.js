const express = require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const templatePath=path.join(__dirname,"../public");
const { connectToMongoDB, collection } = require('./mongodb');

app.use(express.json());
app.set('view engine', 'html');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../public')));


app.get("/",(req,res) => {
    res.render("index");
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

app.post("/login", async (req, res) => {
    try {
        await connectToMongoDB(); // Connect to MongoDB
        const user = await collection.findOne({ email: req.body.email });

        if (user) {
            if (user.password === req.body.password) {
                res.render("home");
            } else {
                res.send("Incorrect password");
            }
        } else {
            res.send("User not found");  // Handle the case where the user is not found
        }
    } catch (error) {
        console.error(error);
        res.send("An error occurred during login");
    }
});


app.listen(3000, () => console.log('Port connected'));




