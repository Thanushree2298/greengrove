import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check user exist
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        //check password is correct
        const validatePassword = await bcryptjs.compare(password, user.password)
        if(!validatePassword) {
             return NextResponse.json({error: "Invalid Password"}, {status: 400})
        }

        //craete token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

       // ensure TOKEN_SECRET is defined
    if (!process.env.TOKEN_SECRET) {
        throw new Error("TOKEN_SECRET is not defined");
      }
  
      // create token
      const token = await jwt.sign(
        tokenData,
        process.env.TOKEN_SECRET as string, // Asserting the type explicitly
        { expiresIn: "1d" }
      );

      const response = NextResponse.json({
        message: "Login Successfullu ",
        success: true,
      })
      response.cookies.set("token", token, {
        httpOnly: true, 
    })
    return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500})
    }
}