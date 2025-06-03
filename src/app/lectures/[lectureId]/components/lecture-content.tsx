
import type { Lecture } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';

interface LectureContentProps {
  lecture: Lecture;
}

export function LectureContent({ lecture }: LectureContentProps) {
  return (
    <Card className="mb-6 shadow-md">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="font-headline text-2xl text-primary flex items-center">
            {lecture.titleNahuatl}
            <TextToSpeechButton textToSpeak={lecture.titleNahuatl} className="ml-2" buttonSize="sm" />
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">{lecture.titleEnglish}</p>
      </CardHeader>
      <CardContent className="prose prose-lg max-w-none text-foreground">
        {lecture.contentNahuatl.map((paragraph, index) => (
          <div key={index} className="flex items-start mb-4 last:mb-0">
            <p className="flex-grow mr-2">{paragraph}</p>
            <TextToSpeechButton textToSpeak={paragraph} className="ml-auto flex-shrink-0" buttonSize="sm" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
