"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const session = useSession();
  const router = useRouter();

  console.log({ session });

  async function handleLogin() {
    signIn("google", { callbackUrl: "/dashboard" }).catch(err => {
      console.log(err)
    });
  }

  if (session?.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-white font-bold text-4xl flex items-center gap-1">
        <Image src={"/images/logo.svg"} width={44} height={44} alt="logo-image" />
        <span>EchoAI</span>
      </h1>
      <button onClick={handleLogin} className="px-5 py-3 border hover:bg-white hover:text-black border-gray-500 rounded-lg flex items-center gap-3 text-slate-300">
        <FcGoogle className="text-2xl" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
