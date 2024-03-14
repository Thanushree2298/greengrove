"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/auth/api/users/signup", user);
            console.log("Signup success",  response.data);
            router.push("/auth/checkmail")
        } catch (error: any) {
            console.log("SignUp failed", error.message);
            
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 &&
           user.password.length > 0 && 
           user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <section className="imgbg">
        <div className="container mt-10 ">
        <h1 className="text-4xl font-bold flex items-center justify-center">{loading ? "Processing" : "SignUp"}</h1>
        <div>
        <div className="mt-5 flex flex-col">
        <label className="label" htmlFor="username">Username</label>
        <input
        className="input px-2 py-1 "
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="yourname"
        />
        </div>
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
        <Button onClick={onSignup} className="button mt-5 w-full">{buttonDisabled ? "Please fill form" : "SignUp"}</Button>
        <div className="gap-2 flex items-center justify-center">Already a member?
        <Link className="underline font-semibold" href="/auth/login"> Login</Link>
        </div>
        </div>
        </section>
    )
}