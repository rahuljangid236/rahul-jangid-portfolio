

// Get profile (GET)

import { connectDB } from "@/lib/db";
import PersonalInfoSchema from "@/models/PersonalInfoSchema";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    try {
        const personalInfo = await PersonalInfoSchema.findOne({});

        if (!personalInfo) {
            return new NextResponse(JSON.stringify({ message: "No personal information found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(personalInfo), { status: 200 });
    } catch (error) {
        console.error("Error fetching personal info:", error);
        return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}

// Create or Update profile (POST)
export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const existing = await PersonalInfo.findOne();

    if (existing) {
        const updated = await PersonalInfo.findByIdAndUpdate(existing._id, data, { new: true });
        return NextResponse.json(updated);
    } else {
        const created = await PersonalInfo.create(data);
        return NextResponse.json(created);
    }
}