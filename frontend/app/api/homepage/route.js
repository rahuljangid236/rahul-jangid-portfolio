import { connectDB } from "@/lib/db";
import PersonalInfoSchema from "@/models/PersonalInfoSchema";

export async function GET() {
    try {
        await connectDB();

        // Fetch only name and contact info from personal info schema
        const personalInfo = await PersonalInfoSchema.findOne({}, "firstName lastName role shortBio email phone address fullBio clientSatisfaction projectsCompleted");

        // Fetch all homepage content
        // const homePageContent = await HomePage.findOne({});

        // res.status(200).json({
        //     personalInfo,
        //     // homePageContent
        // });
        return new Response(
            JSON.stringify({ personalInfo }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error fetching homepage data:", error);
        return new Response(
            JSON.stringify({ message: "Server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

