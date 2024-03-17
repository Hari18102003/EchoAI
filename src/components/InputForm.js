"use client";
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";

const InputForm = () => {
    const inputRef = useRef(null);
    const [prompt, setPrompt] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPrompt("");
        toast.loading('Generating...');
        await axios.post("/api/prompt", { role: "You", message: prompt });
        const { data } = await axios.post("/api/bardai", { prompt });
        if (data.success) {
            console.log(data.response);
            await axios.post("/api/prompt", { role: "EchoAI", message: data.response });
            toast.dismiss();
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className='absolute bottom-0 w-[320px] md:w-3/4 pb-5 md:pb-10'>
            <form onSubmit={handleSubmit}>
                <input value={prompt} onChange={e => setPrompt(e.target.value)} type='text' ref={inputRef} placeholder='Message EchoAI...' className='relative text-white w-full border-2 rounded-lg bg-transparent border-gray-500 p-3' />
                <button type='submit' disabled={prompt.trim() === ""} className='text-white disabled:text-gray-500'><TbSquareRoundedArrowUpFilled className='absolute right-1 text-[37px] top-2' /></button>
            </form>
        </div>
    )
}

export default InputForm