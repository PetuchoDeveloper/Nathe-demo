
"use client";

import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Zap } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';
import { useLanguage } from '@/contexts/language-context';

export default function DashboardPage() {
  const { currentLanguage } = useLanguage();

  const pageContent = {
    nahuatl: {
      langCode: 'nah',
      welcomeTitle: "Niltze! Tlahtolli Yeknemiliztli",
      welcomeSubtitle: "Ximomachtia Nahuatl īhuān tlapōhualiztli!",
      learningWithLang: "Tīcmomachtiah īpanpa motlahtōl.",
      yourProgress: "Moixkopinal",
      overallProgressLabel: "Mochīntīn Moixkopinal:",
      keepUpText: "¡Ximocuītlahui! Ocachi tlamantli huitz.",
      lecturesTitle: "Tēmachtīlli",
      startLearning: "Ximomachtia",
      welcomeParenthetical: "(Welcome!)",
      learnParenthetical: "(Learn Nahuatl and mathematics!)",
      learningParenthetical: "(We are learning with your language.)",
      progressParenthetical: "(Your Progress)",
      lecturesParenthetical: "(Lectures)",
      startLearningParenthetical: "(Start Learning)",
    },
    spanish: {
      langCode: 'es-MX',
      welcomeTitle: "¡Hola! Bienvenido a Tlahtolli Yeknemiliztli",
      welcomeSubtitle: "¡Aprende Náhuatl y matemáticas!",
      learningWithLang: "Estamos aprendiendo con tu idioma.",
      yourProgress: "Tu Progreso",
      overallProgressLabel: "Progreso General:",
      keepUpText: "¡Sigue así! Más funciones próximamente.",
      lecturesTitle: "Lecciones",
      startLearning: "Comenzar a Aprender",
      welcomeParenthetical: "",
      learnParenthetical: "",
      learningParenthetical: "",
      progressParenthetical: "",
      lecturesParenthetical: "",
      startLearningParenthetical: "",
    }
  };

  const content = pageContent[currentLanguage];

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-3xl text-primary flex items-center">
              {content.welcomeTitle}
              <TextToSpeechButton textToSpeak={content.welcomeTitle.split('!')[0]} lang={content.langCode} className="ml-2" buttonSize="sm" />
            </CardTitle>
            {content.welcomeParenthetical && <span className="text-xs text-muted-foreground">{content.welcomeParenthetical}</span>}
          </div>
          <div className="flex items-center">
            <CardDescription className="text-lg flex-grow mr-2">{content.welcomeSubtitle} {content.learnParenthetical && <span>{content.learnParenthetical}</span>}</CardDescription>
            <TextToSpeechButton textToSpeak={content.welcomeSubtitle} lang={content.langCode} className="ml-auto" buttonSize="sm" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <p className="flex-grow mr-2">{content.learningWithLang} {content.learningParenthetical && <span>{content.learningParenthetical}</span>}</p>
            <TextToSpeechButton textToSpeak={content.learningWithLang} lang={content.langCode} className="ml-auto" buttonSize="sm" />
          </div>
          <div>
            <div className="flex items-center mb-2">
              <h3 className="font-headline text-xl text-primary flex-grow">{content.yourProgress} {content.progressParenthetical && <span className="text-sm text-muted-foreground">{content.progressParenthetical}</span>}</h3>
              <TextToSpeechButton textToSpeak={content.yourProgress} lang={content.langCode} className="ml-auto" buttonSize="sm" />
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-medium">{content.overallProgressLabel}</span>
              <Progress value={33} className="w-[60%]" />
              <span className="text-sm font-medium">33%</span>
            </div>
            <p className="text-sm text-muted-foreground">{content.keepUpText}</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <div className="flex items-center mb-4">
          <h2 className="font-headline text-2xl text-primary flex-grow">{content.lecturesTitle} {content.lecturesParenthetical && <span className="text-sm text-muted-foreground">{content.lecturesParenthetical}</span>}</h2>
          <TextToSpeechButton textToSpeak={content.lecturesTitle} lang={content.langCode} className="ml-auto" buttonSize="sm" />
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
                    <span className="truncate mr-1">{currentLanguage === 'nahuatl' ? lecture.titleNahuatl : lecture.titleEnglish}</span>
                    <TextToSpeechButton 
                        textToSpeak={currentLanguage === 'nahuatl' ? lecture.titleNahuatl : lecture.titleEnglish} 
                        lang={currentLanguage === 'nahuatl' ? 'nah' : 'en'} // Assuming English titles for Spanish mode for now
                        buttonSize="sm" 
                        className="flex-shrink-0 ml-auto" 
                    />
                  </CardTitle>
                 </div>
                <CardDescription>{lecture.titleEnglish}</CardDescription>
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
    </div>
  );
}
