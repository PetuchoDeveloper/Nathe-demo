
"use client";

import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';
import { useLanguage } from '@/contexts/language-context';

export default function LecturesOverviewPage() {
  const { currentLanguage } = useLanguage();

  const pageContent = {
    nahuatl: {
      langCode: 'nah',
      allLecturesTitle: "Mochīntīn Tēmachtīlli",
      chooseLessonText: "Xitlapehpēni cē tēmachtīliztli ompa tīcmpēhuaz.",
      startLearning: "Ximomachtia",
      allLecturesParenthetical: "",
      chooseLessonParenthetical: "",
      startLearningParenthetical: "",
    },
    spanish: {
      langCode: 'es-MX',
      allLecturesTitle: "Todas las Lecciones",
      chooseLessonText: "Elige una lección para comenzar.",
      startLearning: "Comenzar a Aprender",
      allLecturesParenthetical: "",
      chooseLessonParenthetical: "",
      startLearningParenthetical: "",
    }
  };

  const content = pageContent[currentLanguage];

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <h1 className="font-headline text-3xl text-primary flex-grow">
          {content.allLecturesTitle} {content.allLecturesParenthetical && <span className="text-base text-muted-foreground">{content.allLecturesParenthetical}</span>}
        </h1>
        <TextToSpeechButton textToSpeak={content.allLecturesTitle} lang={content.langCode} className="ml-auto" />
      </div>
      <div className="flex items-center">
        <p className="text-lg text-foreground flex-grow mr-2">
          {content.chooseLessonText} {content.chooseLessonParenthetical && <span className="text-sm text-muted-foreground">{content.chooseLessonParenthetical}</span>}
        </p>
        <TextToSpeechButton textToSpeak={content.chooseLessonText} lang={content.langCode} className="ml-auto" buttonSize="sm" />
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
                    <span className="truncate mr-1 text-wrap">{currentLanguage === 'nahuatl' ? lecture.titleNahuatl : lecture.titleEnglish}</span>
                    <TextToSpeechButton 
                        textToSpeak={currentLanguage === 'nahuatl' ? lecture.titleNahuatl : lecture.titleEnglish} 
                        lang={currentLanguage === 'nahuatl' ? 'nah' : 'en'} // Assuming English titles for Spanish mode for now
                        buttonSize="sm" 
                        className="flex-shrink-0 ml-auto" 
                    />
                  </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Link href={`/lectures/${lecture.id}`} passHref>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center">
                  <span className="mr-2">{content.startLearning} {content.startLearningParenthetical && <span>{content.startLearningParenthetical}</span>}</span>
                  <TextToSpeechButton 
                    textToSpeak={content.startLearning} 
                    lang={content.langCode} 
                    buttonVariant='ghost' 
                    buttonSize='sm' 
                    className="text-primary-foreground hover:text-primary-foreground/80" 
                  />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
