import mongoose from "mongoose";



export const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "rahul-jangid-portfolio",
        });

    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

