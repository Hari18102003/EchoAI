import { connectDB } from "@/libs/connectDB";
import { User } from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const { role, message } = await req.json();
    connectDB();
    await User.findOneAndUpdate({ email }, { $push: { history: { role: role, message: message } } }, { new: true });
    return Response.json({
        success: true
    });
}