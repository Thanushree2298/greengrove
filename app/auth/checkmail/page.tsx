import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="imgbg">
        <div className="container mt-10">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-4">Please check your Email</h1>
            <p className="mt-2">Or</p>
            <Link href="/auth/signup">
            <Button className="button mt-2 w-full">SignUp</Button>
            </Link>
            <p className="mt-2">If Verified please login</p>
            <Link href="/auth/login">
            <Button className="button mt-2 w-full">LogIn</Button>
            </Link>
            </div>
    </div>
    </section>
  )
}

export default page