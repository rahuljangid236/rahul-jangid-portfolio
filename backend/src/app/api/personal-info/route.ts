import { connectDB } from "@/../lib/db";
import PersonalInfoSchema from "../../../../models/PersonalInfoSchema";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    const data = await PersonalInfoSchema.findOne();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    const existing = await PersonalInfoSchema.findOne();
    if (existing) {
        const updated = await PersonalInfoSchema.updateOne({}, body);
        return NextResponse.json({ updated, message: "Personal info updated successfully" });
    } else {
        const created = await PersonalInfoSchema.create(body);
        return NextResponse.json({ created, message: "Personal info created successfully" });
    }
}