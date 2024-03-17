import { connectDB } from "@/libs/connectDB";
import { User } from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ profile }) {

            if (profile) {
                await connectDB();
                const user = await User.findOne({ email: profile.email });
                if (!user) {
                    await User.create({
                        email: profile.email,
                        name: profile.name,
                        image: profile.picture
                    });
                }
                return true;
            }
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }