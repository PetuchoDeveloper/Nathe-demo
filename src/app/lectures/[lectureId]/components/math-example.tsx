
import type { MathExample as MathExampleType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';

interface MathExampleProps {
  example: MathExampleType;
}

export function MathExample({ example }: MathExampleProps) {
  return (
    <Card className="mb-4 bg-secondary/30 shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-lg flex items-center gap-2 text-secondary-foreground">
            <Calculator className="h-5 w-5 text-accent" />
            <span>Tlapōhualiztli Tlamatiloyan</span>
            <TextToSpeechButton textToSpeak="Tlapōhualiztli Tlamatiloyan" className="ml-1" buttonSize="sm" />
          </CardTitle>
          <span className="text-xs text-muted-foreground">(Math Example)</span>
        </div>
        {example.problemVisual && (
           <p className="text-2xl font-bold text-primary py-2" data-ai-hint="math equation numbers">{example.problemVisual}</p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-start font-semibold text-foreground mb-2">
          <p className="flex-grow mr-2">{example.problemNahuatl}</p>
          <TextToSpeechButton textToSpeak={example.problemNahuatl} className="ml-auto flex-shrink-0" buttonSize="sm"/>
        </div>
        <div className="flex items-start text-secondary-foreground italic">
          <CardDescription className="flex-grow mr-2">{example.explanationNahuatl}</CardDescription>
          <TextToSpeechButton textToSpeak={example.explanationNahuatl} className="ml-auto flex-shrink-0" buttonSize="sm"/>
        </div>
      </CardContent>
    </Card>
  );
}
