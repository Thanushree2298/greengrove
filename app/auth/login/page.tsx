"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onlogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/auth/api/users/login", user);
            console.log("Login success",  response.data);
            toast.success("Login Success")
            router.push("/")
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 &&
           user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <section className="imgbg">
        <div className="container mt-10">
        <h1 className="text-4xl font-bold flex items-center justify-center">{loading? "Processing" : "Login"} </h1>
        <div>
        <div className="mt-2 flex flex-col">
        <label className="label " htmlFor="email">Email</label>
        <input
        className="input px-2 py-1"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="yourmail"
        />
        </div>
        <div className="mt-2 flex flex-col">
        <label className="label " htmlFor="password">Password</label>
        <input
        className="input px-2 py-1"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        />
        </div>        
        </div>
        <Button onClick={onlogin} className="button mt-5 w-full">{buttonDisabled ? "Please fill form" : "LogIn"}</Button>
        <div className="gap-2 flex items-center justify-center">Not a member?
        <Link className="underline font-semibold" href="/auth/signup"> Signup</Link>
        </div>
        </div>
        </section>
    )
}