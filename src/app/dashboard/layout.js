import { Inter } from "next/font/google";
import "../globals.css";
import AuthContext from "@/components/AuthContext";
import LeftSidebar from "@/components/LeftSidebar";
import InputForm from "@/components/InputForm";
import { Toaster } from "react-hot-toast";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "EchoAI - Chat",
    description: "Echo ai chatbot created with nextjs",
    icons: {
        icon: ["/favicon.ico?v=4"]
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <Toaster />
                    <main className="flex h-screen">
                        <LeftSidebar />
                        <div className="bg-[#212121] p-5 md:p-20 w-full md:w-3/4 relative">
                            <Topbar />
                            {children}
                            <InputForm />
                        </div>
                    </main>
                </AuthContext>
            </body>
        </html>
    );
}
