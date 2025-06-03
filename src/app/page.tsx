
import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Zap } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';

export default function DashboardPage() {
  const welcomeNahuatl = "Niltze! Tlahtolli Yeknemiliztli";
  const learnNahuatl = "Ximomachtia Nahuatl īhuān tlapōhualiztli!";
  const learningWithLang = "Tīcmomachtiah īpanpa motlahtōl.";
  const yourProgressNahuatl = "Moixkopinal";
  const lecturesNahuatl = "Tēmachtīlli";
  const startLearningNahuatl = "Ximomachtia";

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-3xl text-primary flex items-center">
              {welcomeNahuatl}
              <TextToSpeechButton textToSpeak={welcomeNahuatl.split('!')[0]} className="ml-2" buttonSize="sm" />
            </CardTitle>
             <span className="text-xs text-muted-foreground">(Welcome!)</span>
          </div>
          <div className="flex items-center">
            <CardDescription className="text-lg flex-grow mr-2">{learnNahuatl} (Learn Nahuatl and mathematics!)</CardDescription>
            <TextToSpeechButton textToSpeak={learnNahuatl} className="ml-auto" buttonSize="sm" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <p className="flex-grow mr-2">{learningWithLang} (We are learning with your language.)</p>
            <TextToSpeechButton textToSpeak={learningWithLang} className="ml-auto" buttonSize="sm" />
          </div>
          <div>
            <div className="flex items-center mb-2">
              <h3 className="font-headline text-xl text-primary flex-grow">{yourProgressNahuatl} (Your Progress)</h3>
              <TextToSpeechButton textToSpeak={yourProgressNahuatl} className="ml-auto" buttonSize="sm" />
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-medium">Overall Progress:</span>
              <Progress value={33} className="w-[60%]" />
              <span className="text-sm font-medium">33%</span>
            </div>
            <p className="text-sm text-muted-foreground">Keep up the great work! More features coming soon.</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <div className="flex items-center mb-4">
          <h2 className="font-headline text-2xl text-primary flex-grow">{lecturesNahuatl} (Lectures)</h2>
          <TextToSpeechButton textToSpeak={lecturesNahuatl} className="ml-auto" buttonSize="sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectures.map((lecture) => (
            <Card key={lecture.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {lecture.icon === "Apple" && <Zap className="h-8 w-8 text-primary" data-ai-hint="fruit mathematics"/>}
                  {lecture.icon === "Feather" && <Zap className="h-8 w-8 text-primary" data-ai-hint="feather subtraction"/>}
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
    </div>
  );
}
