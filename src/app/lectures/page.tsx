
import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';

export default function LecturesOverviewPage() {
  const allLecturesNahuatl = "Mochīntīn Tēmachtīlli";
  const chooseLessonNahuatl = "Xitlapehpēni cē tēmachtīliztli ompa tīcmpēhuaz.";
  const startLearningNahuatl = "Ximomachtia";

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <h1 className="font-headline text-3xl text-primary flex-grow">{allLecturesNahuatl} (All Lectures)</h1>
        <TextToSpeechButton textToSpeak={allLecturesNahuatl} className="ml-auto" />
      </div>
      <div className="flex items-center">
        <p className="text-lg text-foreground flex-grow mr-2">{chooseLessonNahuatl} (Choose a lesson to begin.)</p>
        <TextToSpeechButton textToSpeak={chooseLessonNahuatl} className="ml-auto" buttonSize="sm" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((lecture) => (
          <Card key={lecture.id} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {lecture.icon === "Apple" && <Zap className="h-8 w-8 text-primary" data-ai-hint="fruit math"/>}
                {lecture.icon === "Feather" && <Zap className="h-8 w-8 text-primary" data-ai-hint="feather logic"/>}
                {!lecture.icon && <BookOpen className="h-8 w-8 text-primary" />}
                 <CardTitle className="font-headline text-xl text-primary flex items-center flex-grow">
                    <span className="truncate mr-1">{lecture.titleNahuatl}</span>
                    <TextToSpeechButton textToSpeak={lecture.titleNahuatl} buttonSize="sm" className="flex-shrink-0 ml-auto" />
                  </CardTitle>
              </div>
              <CardDescription>{lecture.titleEnglish}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/lectures/${lecture.id}`} passHref>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center">
                  <span className="mr-2">{startLearningNahuatl} (Start Learning)</span>
                  <TextToSpeechButton textToSpeak={startLearningNahuatl} buttonVariant='ghost' buttonSize='sm' className="text-primary-foreground hover:text-primary-foreground/80" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
