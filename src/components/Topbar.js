"use client";
import React from 'react'
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Topbar = () => {

    const session = useSession();
    const user = session?.data?.user;
    return (
        <div className='w-full h-10 md:hidden'>
            <Sheet className="text-white">
                <SheetTrigger><IoMenu className='text-white text-3xl' /></SheetTrigger>
                <SheetContent className="text-white flex flex-col gap-6">
                    <SheetHeader>
                        <h1 className="text-white font-bold text-2xl flex items-center gap-1">
                            <Image src={"/images/logo.svg"} width={40} height={40} alt="logo-image" />
                            <span>EchoAI</span>
                        </h1>
                    </SheetHeader>
                    <SheetHeader>
                        <div className='text-white flex gap-2 items-center text-lg'>
                            <div className='relative w-14 h-14 rounded-full'>
                                <Image
                                    src={user?.image}
                                    alt='profile'
                                    fill
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className='text-sm'>{user?.name}</h1>
                        </div>
                    </SheetHeader>
                    <SheetHeader>
                        <button className='w-full py-2 font-bold rounded-lg border border-white hover:bg-white text-white hover:text-black' onClick={() => signOut()}>Logout</button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Topbar