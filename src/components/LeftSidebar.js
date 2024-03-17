"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'


const LeftSidebar = () => {

    const session = useSession();
    const user = session?.data?.user;
    console.log(user);
    return (
        <>
            <div className='bg-[#171717] w-1/4 h-screen p-6 md:flex flex-col gap-7 hidden'>
                <h1 className="text-white font-bold text-2xl flex items-center gap-1">
                    <Image src={"/images/logo.svg"} width={40} height={40} alt="logo-image" />
                    <span>EchoAI</span>
                </h1>
                <div className='text-white flex gap-2 items-center text-lg'>
                    <div className='relative w-14 h-14 rounded-full'>
                        <Image
                            src={user?.image}
                            alt='profile'
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <h1>{user?.name}</h1>
                </div>
                <button className='w-full py-2 font-bold rounded-lg border border-white hover:bg-white text-white hover:text-black' onClick={() => signOut()}>Logout</button>
            </div>

        </>
    )
}

export default LeftSidebar