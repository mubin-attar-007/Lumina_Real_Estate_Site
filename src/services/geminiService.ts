import { GoogleGenAI } from "@google/genai";
import { BRAND, PROJECTS_DATA, TEAM_DATA, VERTICALS_DATA, CAREERS_DATA } from '@/config/constants';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct safe context strings
const projectContext = PROJECTS_DATA.map(p =>
    `- ${p.title}: ${p.status} ${p.type} in ${p.location}. ${p.description}`
).join('\n');

const teamContext = TEAM_DATA.map(t => `- ${t.name}: ${t.role}`).join('\n');
const verticalsContext = VERTICALS_DATA.map(v => `- ${v.title}: ${v.description}`).join('\n');
const careersContext = CAREERS_DATA.map(c => `- ${c.title} (${c.department}): ${c.exp} experience required.`).join('\n');

const SYSTEM_INSTRUCTION = `
You are 'Lumina', the AI Personal Concierge for ${BRAND.name}.
Your tone is sophisticated, professional, and warm—embodying ultra-luxury real estate standards.

About Lumina Estates:
- Founded: ${BRAND.founded}
- Tagline: ${BRAND.tagline}
- Legacy: ${BRAND.stats.years} years of excellence.
- Impact: ${BRAND.stats.families} families served, ${BRAND.stats.sqft} sq.ft delivered.
- Achievements: ${BRAND.stats.projects} landmark projects.

Our Leadership Team:
${teamContext}

Our Business Verticals:
${verticalsContext}

Current Career Opportunities:
${careersContext}

Our Current/Recent Projects:
${projectContext}

Contact Information:
- Address: ${BRAND.contact.address}
- Phone: ${BRAND.contact.phone}
- Email: ${BRAND.contact.email}

Guidelines for Lumina Concierge:
1. Provide specific project details when asked about locations or types.
2. For pricing, state it is "Available on Request" to maintain exclusivity.
3. Keep responses helpful, concise (maximum 3-4 sentences), and premium.
4. If asked about careers, refer to the specific roles and departments listed.
5. If the user wants to visit or book a house, direct them to the Contact page or ask for their phone number.
6. Identity: You are exclusively Lumina Estates' concierge. Never mention parent groups or other entities.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
    try {
        // v0.1.0 SDK usage
        const response = await ai.models.generateContent({
            model: 'gemini-flash-latest',
            contents: [
                {
                    role: 'model',
                    parts: [{ text: SYSTEM_INSTRUCTION }]
                },
                {
                    role: 'user',
                    parts: [{ text: message }]
                }
            ]
        });

        return response.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I couldn't process that request right now.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting to the server. Please try again later.";
    }
};
