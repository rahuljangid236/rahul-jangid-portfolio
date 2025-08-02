import mongoose from "mongoose";
import PersonalInfoSchema from "../models/PersonalInfoSchema";

export const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "rahul-jangid-portfolio",
        });

    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

export async function PersonalInfo() {
    await connectDB();
    const data = await PersonalInfoSchema.findOne().lean();
    return JSON.parse(JSON.stringify(data)); // serialize for server
}