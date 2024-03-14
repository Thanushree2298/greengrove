"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";


export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/auth/api/users/verifyemail', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.reponse.data);
            
        }

    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <section className="imgbg">
        <div className="container mt-10">
            {verified && (
                <div className="flex flex-col items-center justify-center">
                    <TiTick className="text-6xl"/>
                    <h2 className="text-4xl font-bold">Verified!</h2>
                    <p className="font-medium text-medium">You have successfully verified account.</p>
                    <Link href="/auth/login">
                     <Button className="button">Login</Button>   
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
        </div>
        </section>
    )

}