import type { MathExample as MathExampleType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

interface MathExampleProps {
  example: MathExampleType;
}

export function MathExample({ example }: MathExampleProps) {
  return (
    <Card className="mb-4 bg-secondary/30 shadow">
      <CardHeader>
        <CardTitle className="font-headline text-lg flex items-center gap-2 text-secondary-foreground">
          <Calculator className="h-5 w-5 text-accent" />
          <span>Tlapōhualiztli Tlamatiloyan (Math Example)</span>
        </CardTitle>
        {example.problemVisual && (
           <p className="text-2xl font-bold text-primary py-2" data-ai-hint="math equation numbers">{example.problemVisual}</p>
        )}
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-foreground mb-2">{example.problemNahuatl}</p>
        <CardDescription className="text-secondary-foreground italic">{example.explanationNahuatl}</CardDescription>
      </CardContent>
    </Card>
  );
}
