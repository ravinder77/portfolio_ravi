import mongoose from "mongoose";


async function connectDB() { 
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected");
        });

        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectDB