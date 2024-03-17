import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = process.env.GEMINIAI_API_KEY;

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export async function POST(req) {
    const { prompt } = await req.json();
    const message = [{ content: prompt }];

    const result = await client.generateMessage({
        model: MODEL_NAME,
        temperature: 0.25,
        candidateCount: 1,
        top_k: 40,
        top_p: 0.95,
        prompt: {
            messages: message,
        },
    });

    return Response.json({
        success: true,
        response: result[0]?.candidates[0]?.content
    });
}


