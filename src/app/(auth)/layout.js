import { Inter } from "next/font/google";
import "../globals.css";
import AuthContext from "@/components/AuthContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "EchoAI - Auth",
    description: "Echo ai chatbot created with nextjs",
    icons: {
        icon: ["/favicon.ico?v=4"]
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#171717]`}>
                <AuthContext>
                    <Toaster />
                    <main className="h-screen flex items-center justify-center">
                        {children}
                    </main>
                </AuthContext>
            </body>
        </html>
    );
}
