'use server';
/**
 * @fileOverview This file defines a Genkit flow to translate math examples and explanations into Nahuatl.
 *
 * - translateToNahuatl - A function that translates the provided English text into Nahuatl.
 * - TranslateToNahuatlInput - The input type for the translateToNahuatl function.
 * - TranslateToNahuatlOutput - The return type for the translateToNahuatl function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateToNahuatlInputSchema = z.object({
  text: z.string().describe('The English text to translate to Nahuatl.'),
});
export type TranslateToNahuatlInput = z.infer<typeof TranslateToNahuatlInputSchema>;

const TranslateToNahuatlOutputSchema = z.object({
  translatedText: z.string().describe('The translated text in Nahuatl.'),
});
export type TranslateToNahuatlOutput = z.infer<typeof TranslateToNahuatlOutputSchema>;

export async function translateToNahuatl(input: TranslateToNahuatlInput): Promise<TranslateToNahuatlOutput> {
  return translateToNahuatlFlow(input);
}

const translateToNahuatlPrompt = ai.definePrompt({
  name: 'translateToNahuatlPrompt',
  input: {schema: TranslateToNahuatlInputSchema},
  output: {schema: TranslateToNahuatlOutputSchema},
  prompt: `You are a translator specializing in translating English to Nahuatl.

  Translate the following text to Nahuatl:
  {{text}}
  `,
});

const translateToNahuatlFlow = ai.defineFlow(
  {
    name: 'translateToNahuatlFlow',
    inputSchema: TranslateToNahuatlInputSchema,
    outputSchema: TranslateToNahuatlOutputSchema,
  },
  async input => {
    const {output} = await translateToNahuatlPrompt(input);
    return output!;
  }
);
