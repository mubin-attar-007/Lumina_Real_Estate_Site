import { GoogleGenAI } from "@google/genai";

// This file is designed to run as a Vercel Serverless Function or similar.
// It keeps the GEMINI_API_KEY secure on the server.

const apiKey = process.env.GEMINI_API_KEY;

export default async function handler(req: any, res: any) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    if (!apiKey) {
        console.error("Missing Gemini API Key on Server");
        res.status(500).json({ error: 'Server Misconfiguration' });
        return;
    }

    try {
        const { message, history } = req.body;

        const ai = new GoogleGenAI({ apiKey });
        // Note: In a real serverless implementation, we would reconstruct the chat session 
        // using the 'history' passed from the client or stored in a DB.
        // For this architectural implementation, we do a single-turn generation 
        // or assume the System Instruction is prepended.

        // Simulating the 'Lumina' system context directly here for statelessness
        // Correct usage for @google/genai v0.1.0+
        const response = await ai.models.generateContent({
            model: 'gemini-flash-latest',
            contents: [{ role: 'user', parts: [{ text: `You are Lumina, an AI concierge for Lumina Estates. Answer professionally. User: ${message}` }] }]
        });

        const reply = response.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I couldn't process that request.";

        res.status(200).json({ reply });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
