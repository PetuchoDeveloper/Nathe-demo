// src/ai/flows/nahuatl-chatbot.ts
'use server';

/**
 * @fileOverview A Nahuatl chatbot for answering questions about lecture content.
 *
 * - nahuatlChatbot - A function that handles the chatbot interactions.
 * - NahuatlChatbotInput - The input type for the nahuatlChatbot function.
 * - NahuatlChatbotOutput - The return type for the nahuatlChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NahuatlChatbotInputSchema = z.object({
  lectureContent: z.string().describe('The content of the Nahuatl lecture.'),
  question: z.string().describe('The question about the lecture content.'),
});
export type NahuatlChatbotInput = z.infer<typeof NahuatlChatbotInputSchema>;

const NahuatlChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the question in Nahuatl.'),
  isValidNahuatl: z.boolean().describe('Whether the answer is in valid Nahuatl'),
});
export type NahuatlChatbotOutput = z.infer<typeof NahuatlChatbotOutputSchema>;

export async function nahuatlChatbot(input: NahuatlChatbotInput): Promise<NahuatlChatbotOutput> {
  return nahuatlChatbotFlow(input);
}

const isValidNahuatlTool = ai.defineTool({
    name: 'isValidNahuatl',
    description: 'Check if the given sentence is in valid Nahuatl language.',
    inputSchema: z.object({
      sentence: z.string().describe('The sentence to validate.'),
    }),
    outputSchema: z.boolean(),
  },
  async (input) => {
    // Placeholder implementation - replace with actual Nahuatl validation logic
    // In a real application, this would use a Nahuatl grammar checker or similar.
    // For now, we'll just return true.
    console.log("checking if this is valid nahuatl: " + input.sentence)
    return true;
  }
);

const prompt = ai.definePrompt({
  name: 'nahuatlChatbotPrompt',
  input: {schema: NahuatlChatbotInputSchema},
  output: {schema: NahuatlChatbotOutputSchema},
  tools: [isValidNahuatlTool],
  prompt: `You are a Nahuatl language expert and tutor. You will answer questions about the provided lecture content in Nahuatl.

Lecture Content:
{{lectureContent}}

Question: {{question}}

Answer in Nahuatl:`, // Removed the tool calling instruction since the LLM decides if the tool is necessary
});

const nahuatlChatbotFlow = ai.defineFlow(
  {
    name: 'nahuatlChatbotFlow',
    inputSchema: NahuatlChatbotInputSchema,
    outputSchema: NahuatlChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    const isValid = await isValidNahuatlTool({sentence: output!.answer});
    return {...output, isValidNahuatl: isValid};
  }
);
