"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";





export default function ProfilePage() {
    const [data, setData] = useState("nothing")
    const router = useRouter();
    const logout = async () => {
    try {
      await axios.get("/auth/api/users/logout")
      toast.success("Logout Successful")
      router.push("/auth/login")
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
    }
    }
 
    const getUserDetails = async () => {
        const res = await axios.get('/auth/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <section>
        <div className="flex items-center justify-center flex-col mt-10 mb-10">
            <h1 className="text-3xl font-bold">Profile</h1>
            <CgProfile className='text-8xl '/>
            <hr/>
            <p className="text-xl">Your Name</p>
            <h2>{data === "nothing" ? "User Details" : 
            <Link href={`/auth/profile/${data}`}>{data}</Link>
            }</h2>
            
            </div>
            <div className="flex items-center justify-center gap-5">
            <Button onClick={getUserDetails} className="button">User Details</Button>
            <Link href="/#contact"><Button className="button">Contact Us</Button></Link>
            <Button onClick={logout} className="button">LogOut</Button>
        </div>
        </section>
    )
}