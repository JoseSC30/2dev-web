import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Sos el chatbot oficial de 2DEV, una empresa de desarrollo de software. 
Respondé consultas sobre servicios, productos, soporte y cómo contactarnos. 
Sé claro, amable y profesional en todo momento.
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m: any) => ({
          role: m.from === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
      ],
    });

    const reply = completion.choices[0].message?.content ?? 'Lo siento, hubo un error.';
    res.status(200).json({ reply });
  } catch (err) {
    console.error('Error con OpenAI:', err);
    res.status(500).json({ reply: 'Lo siento, no pude procesar tu mensaje.' });
  }
}
