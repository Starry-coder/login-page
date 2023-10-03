const mongoose = require("mongoose")
const url = "mongodb+srv://aryan:aryan@cluster0.c68jf98.mongodb.net/?retryWrites=true&w=majority"

const logInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,
    },
})

const collection = mongoose.model("collection1", logInSchema)

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = {collection, connectToMongoDB}
