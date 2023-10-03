const mongoose = reqire("mongoose")

/*mongosh "mongodb+srv://cluster0.c68jf98.mongodb.net/" --apiVersion 1 --username aryan*/
mongoose.connect("mongodb+srv://aryan:aryan@cluster0.c68jf98.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDB")
})
.catch(() => {
    console.log("Failed to connect")
})