'use server';
/**
 * @fileOverview An AI chatbot assistance flow.
 *
 * - chatbotAssistance - A function that initiates a chatbot assistance message.
 * - ChatbotAssistanceInput - The input type for the chatbotAssistance function.
 * - ChatbotAssistanceOutput - The return type for the chatbotAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAssistanceInputSchema = z.object({
  prompt: z.string().describe("The user's message or question."),
  history: z.string().optional().describe("The conversation history."),
  pageContent: z
    .string()
    .describe("The content of the current page the user is on."),
});
export type ChatbotAssistanceInput = z.infer<typeof ChatbotAssistanceInputSchema>;

const ChatbotAssistanceOutputSchema = z.object({
  chatbotMessage: z.string().describe('The proactive assistance message from the chatbot.'),
});
export type ChatbotAssistanceOutput = z.infer<typeof ChatbotAssistanceOutputSchema>;

export async function chatbotAssistance(input: ChatbotAssistanceInput): Promise<ChatbotAssistanceOutput> {
  return chatbotAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAssistancePrompt',
  input: {schema: ChatbotAssistanceInputSchema},
  output: {schema: ChatbotAssistanceOutputSchema},
  prompt: [
    {
      text: `You are a helpful chatbot assistant on the Kashi Patent website. Your goal is to assist users with their questions about patent services.

Keep your responses concise and helpful.

Current Page Content:
---
{{{pageContent}}}
---

Conversation History:
---
{{{history}}}
---

User's Request: {{{prompt}}}

Based on the context, provide a helpful response to the user.`,
    },
  ],
});

const chatbotAssistanceFlow = ai.defineFlow(
  {
    name: 'chatbotAssistanceFlow',
    inputSchema: ChatbotAssistanceInputSchema,
    outputSchema: ChatbotAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
