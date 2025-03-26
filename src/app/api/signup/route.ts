import dbConnect from "@/lib/connectDb";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export default async function POST(request: NextRequest) {
    await dbConnect();
try {
    const { username, email, password } = await request.json();
    const existingUser = await User.findOne({email})
    if(existingUser) {
        return Response.json({message: "User already exists"}, {status: 400})
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
} catch (error) {
    
}
}