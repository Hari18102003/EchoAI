import { connectDB } from "@/libs/connectDB";
import { User } from "@/models/User";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(req) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    connectDB();
    const user = await User.findOne({ email });
    return Response.json({
        success: true,
        user: user
    });
}