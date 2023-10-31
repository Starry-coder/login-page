const mongoose = require("mongoose")
const url = "mongodb+srv://aryan:aryan@cluster0.c68jf98.mongodb.net/?retryWrites=true&w=majority"


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};

module.exports = {collection, connectToMongoDB}
