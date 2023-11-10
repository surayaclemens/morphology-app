import NewsletterSubscriber from "@/app/models/newsletterSubsriber";
import connectDB from "@/lib/mongo";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';


export async function POST(req){
    const { userEmail } = await req.json();

    try {
         // Connect to the database
         await connectDB();

         // Create a new Newsletter document
         const newEntry = new NewsletterSubscriber({ email: userEmail });
         await newEntry.save();
 
         return NextResponse.json({
             msg: ["Email submitted!"],
             success: true,
         });

    } catch (error) {
        if (error instanceof Error.ValidationError) {
            // Handle validation errors
            const errorList = Object.values(error.errors).map((e) => e.message);
            return NextResponse.json({ msg: errorList });
        } else {
            // Handle other errors
            console.error("Error submitting email:", error);
            return NextResponse.json({
                msg: "Something went wrong :( Please try again later",
            });
        }
    }
}