"use client";
import Message from "@/components/Message";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {

    const session = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const { data } = await axios.get("/api/user");
            if (data.success) {
                setUser(data.user);
            }
        }
        getUser();
        const intervalId = setInterval(getUser, 500);

        return () => clearInterval(intervalId);
    }, []);

    if (session?.status === "unauthenticated") {
        redirect("/");
    }

    return (
        <div className="flex flex-col gap-7 h-[560px] overflow-y-auto scrollbar-hide">
            {user?.history.length > 0 && (
                user.history.map((hist, index) => (
                    <Message key={index} role={hist.role} message={hist.message} />
                ))
            )}
        </div>
    )
}

export default DashboardPage