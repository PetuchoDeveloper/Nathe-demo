import type { Lecture } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LectureContentProps {
  lecture: Lecture;
}

export function LectureContent({ lecture }: LectureContentProps) {
  return (
    <Card className="mb-6 shadow-md">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{lecture.titleNahuatl}</CardTitle>
        <p className="text-sm text-muted-foreground">{lecture.titleEnglish}</p>
      </CardHeader>
      <CardContent className="prose prose-lg max-w-none text-foreground">
        {lecture.contentNahuatl.map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  );
}
