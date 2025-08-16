import { connectDB } from "@/lib/db";
import PersonalInfoSchema from "@/models/PersonalInfoSchema";

export async function GET() {
    try {
        await connectDB();
        const footerPersonalData = await PersonalInfoSchema.findOne({}, "address email phone socialLinks");

        return new Response(
            JSON.stringify({ footerPersonalData }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        )
    } catch (error) {
        console.error("Error fetching Footer data:", error);
        return new Response(
            JSON.stringify({ message: "Server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}