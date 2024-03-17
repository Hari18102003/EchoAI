"use client";
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Message = ({ role, message }) => {

    const session = useSession();
    const user = session?.data?.user;
    return (
        <div className='flex flex-col text-white gap-2 justify-center'>
            <div className='flex items-center gap-2'>
                <div className='relative w-8 h-8 rounded-full'>
                    <Image
                        src={role === "You" ? user?.image : "/images/logo.svg"}
                        alt='profile'
                        fill
                        className="rounded-full"
                    />
                </div>
                <h1 className='font-semibold'>{role}</h1>
            </div>
            <p className='text-sm pl-10'>{message}</p>
        </div>
    )
}

export default Message