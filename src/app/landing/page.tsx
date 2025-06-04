
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, MessageSquare, Calculator, Heart } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';
import { useLanguage } from '@/contexts/language-context';
import { SpanishFlagIcon } from '@/components/icons/spanish-flag-icon';
import { NahuatlGlyphIcon } from '@/components/icons/nahuatl-glyph-icon';


export default function LandingPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    nahuatl: {
      langCode: 'nah',
      heroTitle: "Niltze! Ximopanōltih",
      heroAppName: "Nathe", // App name in Nahuatl for landing
      heroSubtitle: "Ximomachtia Nahuatl īhuān tlapōhualiztli tlatlamantli.",
      heroCta: "Ximpēhua Axkan!",
      heroCtaSub: "",
      featuresTitle: "Tlein Tiquittāz?",
      featuresTitleSub: "",
      feature1Title: "Tēmachtīlli Tēāhuiltiani",
      feature1Desc: "Timomachtīz Nahuatl īca tēmachtīlli tlachīhualiztli.",
      feature2Title: "Nahuatl Tlahtōlnāmiquiliztli",
      feature2Desc: "Xitlajtlani mochi īpanpa tēmachtīlli īca totlahtōlnāmiquiliztli.",
      feature3Title: "Tlapōhualiztli īpan Nahuatl",
      feature3Desc: "Ximomachtia tlapōhualiztli īpan monāntlahtōl.",
      whyNahuatlTitle: "Ma Tiktlazohtlacan Totlahtōl",
      whyNahuatlTitleSub: "",
      whyNahuatlText1: "Nahuatl cē tlahtōlli chicāhuac īhuān huehcāuhtiliztli.",
      whyNahuatlText2: "Timitztlālīliah ximomachtia īhuān xictlazohtla.",
      footerText: "© 2024 Nathe. Mochi tlamachtīliztli īpampa.",
      footerTextSub: "",
      switchToLangText: "Ver en Español",
      currentLangName: "Nāhuatl",
      heroSubSubtitle: "Ximomachti kenijkatsa uan kanke tijneki!",
    },
    spanish: {
      langCode: 'es-MX',
      heroTitle: "¡Hola! Bienvenido(a)",
      heroAppName: "Nathe", // Keeping "Nathe" for consistency
      heroSubtitle: "Aprende Náhuatl y matemáticas de una manera atractiva.",
      heroCta: "¡Comienza Ahora!",
      heroCtaSub: "",
      featuresTitle: "¿Qué Encontrarás?",
      featuresTitleSub: "",
      feature1Title: "Lecciones Interactivas",
      feature1Desc: "Aprende Náhuatl con lecciones dinámicas que hacen el aprendizaje divertido y efectivo.",
      feature2Title: "Chatbot en Náhuatl",
      feature2Desc: "Practica tus habilidades, aprende, y obtén ayuda instantánea de nuestro tutor potenciado con IA.",
      feature3Title: "Matemáticas en Náhuatl",
      feature3Desc: "Explora conceptos basicos explicados completamente en Náhuatl.",
      whyNahuatlTitle: "Atesoremos Nuestro Idioma",
      whyNahuatlTitleSub: "",
      whyNahuatlText1: "El Náhuatl es un idioma de fortaleza e historia.",
      whyNahuatlText2: "Te invitamos a aprenderlo, valorarlo y ayudar a mantenerlo vivo para las futuras generaciones.",
      footerText: "© 2024 Nathe. Todos los derechos reservados.", // Main App name in footer
      footerTextSub: "",
      switchToLangText: "Kita īpan Nāhuatl",
      currentLangName: "Español",
      heroSubSubtitle: "Aprende cómo y dónde quieras!",
    }
  };

  const currentContent = content[currentLanguage];
  const appNameForDisplayNahuatl = content.nahuatl.heroAppName;
  const appNameForDisplaySpanish = content.spanish.heroAppName;
  
  const features = [
    {
      icon: BookOpen,
      titleNahuatl: content.nahuatl.feature1Title,
      titleSpanish: content.spanish.feature1Title,
      descriptionNahuatl: content.nahuatl.feature1Desc,
      descriptionSpanish: content.spanish.feature1Desc,
      dataAiHint: "education book",
    },
    {
      icon: MessageSquare,
      titleNahuatl: content.nahuatl.feature2Title,
      titleSpanish: content.spanish.feature2Title,
      descriptionNahuatl: content.nahuatl.feature2Desc,
      descriptionSpanish: content.spanish.feature2Desc,
      dataAiHint: "chat ai",
    },
    {
      icon: Calculator,
      titleNahuatl: content.nahuatl.feature3Title,
      titleSpanish: content.spanish.feature3Title,
      descriptionNahuatl: content.nahuatl.feature3Desc,
      descriptionSpanish: content.spanish.feature3Desc,
      dataAiHint: "math numbers",
    },
  ];
  const whyNahuatlTextEnglish1 = "";
  const whyNahuatlTextEnglish2 = "";


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      {/* Header specific to Landing Page - The global header will have the language toggle */}
      <header className="py-4 px-6 md:px-10 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/landing" className="flex items-center gap-2">
            <AppLogoIcon className="h-8 w-8 text-primary" />
            <div className="flex items-center">
              <span className="font-headline text-xl font-semibold text-primary">
                {currentLanguage === 'nahuatl' ? appNameForDisplayNahuatl : appNameForDisplaySpanish}
              </span>
              <TextToSpeechButton 
                textToSpeak={currentLanguage === 'nahuatl' ? appNameForDisplayNahuatl : appNameForDisplaySpanish} 
                lang={currentContent.langCode} 
                buttonSize="sm" 
                className="ml-1" 
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
             {/* Language toggle is now in the global Header component, only shown on /landing */}
            <Link href="/" passHref>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <span className="mr-1">{currentContent.heroCta}</span>
                  <TextToSpeechButton textToSpeak={currentContent.heroCta} lang={currentContent.langCode} buttonVariant="ghost" buttonSize="sm" className="text-accent-foreground hover:text-accent-foreground/80" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <AppLogoIcon className="h-16 w-16 text-primary" />
            </div>
            <div className="flex justify-center items-center mb-2">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mr-2">
                {currentContent.heroTitle}
              </h1>
              <TextToSpeechButton textToSpeak={currentContent.heroTitle} lang={currentContent.langCode} buttonSize="lg" />
            </div>
            <div className="flex justify-center items-center mb-6">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-accent mr-2">
                {currentLanguage === 'nahuatl' ? appNameForDisplayNahuatl : appNameForDisplaySpanish}
              </h2>
               <TextToSpeechButton 
                textToSpeak={currentLanguage === 'nahuatl' ? appNameForDisplayNahuatl : appNameForDisplaySpanish} 
                lang={currentContent.langCode} 
                buttonSize="default" 
               />
            </div>
            <div className="flex justify-center items-center mb-4 ">
              <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mr-2 md:m-auto">
                {currentContent.heroSubtitle}
              </p>
              <TextToSpeechButton textToSpeak={currentContent.heroSubtitle} lang={currentContent.langCode} />
            </div>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-8">
              {currentLanguage === 'nahuatl' ? content.nahuatl.heroSubSubtitle : content.spanish.heroSubSubtitle}
            </p>
            <Link href="/" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                <span className="mr-2">{currentContent.heroCta}</span>
                <TextToSpeechButton textToSpeak={currentContent.heroCta} lang={currentContent.langCode} buttonVariant="ghost" buttonSize="sm" className="text-primary-foreground hover:text-primary-foreground/80" />
                {currentContent.heroCtaSub && <span className="text-xs ml-1 opacity-80">{currentContent.heroCtaSub}</span>}
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex justify-center">
            <Image 
              src="https://i.imgur.com/Rgqz8jg.png" 
              alt="Nahuatl learning visual representation" 
              width={800} 
              height={400} 
              className="rounded-lg shadow-xl"
              data-ai-hint="nahuatl culture learning"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-1">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mr-2">
                  {currentContent.featuresTitle}
                </h2>
                <TextToSpeechButton textToSpeak={currentContent.featuresTitle} lang={currentContent.langCode} />
              </div>
              {currentContent.featuresTitleSub && <p className="text-md text-muted-foreground">{currentContent.featuresTitleSub}</p>}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="items-center text-center">
                    <feature.icon className="h-12 w-12 text-accent mb-4" data-ai-hint={feature.dataAiHint}/>
                    <div className="flex items-center justify-center">
                      <CardTitle className="font-headline text-xl text-primary mr-1">
                        {currentLanguage === 'nahuatl' ? feature.titleNahuatl : feature.titleSpanish}
                      </CardTitle>
                      <TextToSpeechButton textToSpeak={currentLanguage === 'nahuatl' ? feature.titleNahuatl : feature.titleSpanish} lang={currentContent.langCode} buttonSize="sm" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center text-center mb-1">
                      <p className="text-foreground text-sm mr-1">
                        {currentLanguage === 'nahuatl' ? feature.descriptionNahuatl : feature.descriptionSpanish}
                      </p>
                      <TextToSpeechButton textToSpeak={currentLanguage === 'nahuatl' ? feature.descriptionNahuatl : feature.descriptionSpanish} lang={currentContent.langCode} buttonSize="sm" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nahuatl Section */}
        <section id="why-nahuatl" className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center mb-1">
                  <Heart className="h-10 w-10 text-primary mb-2 mr-2" />
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mr-2">
                    {currentContent.whyNahuatlTitle}
                  </h2>
                  <TextToSpeechButton textToSpeak={currentContent.whyNahuatlTitle} lang={currentContent.langCode} />
                </div>
                 {currentContent.whyNahuatlTitleSub && <p className="text-md text-muted-foreground">{currentContent.whyNahuatlTitleSub}</p>}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-start mb-3">
                    <p className="text-lg text-foreground mr-2">{currentContent.whyNahuatlText1}</p>
                    <TextToSpeechButton textToSpeak={currentContent.whyNahuatlText1} lang={currentContent.langCode} className="mt-1" />
                </div>
                <p className="text-md text-muted-foreground mb-4 text-center">{currentLanguage === 'nahuatl' ? whyNahuatlTextEnglish1 : ""}</p>
                <div className="flex items-start">
                    <p className="text-lg text-foreground mr-2">{currentContent.whyNahuatlText2}</p>
                    <TextToSpeechButton textToSpeak={currentContent.whyNahuatlText2} lang={currentContent.langCode} className="mt-1" />
                </div>
                <p className="text-md text-muted-foreground text-center">{currentLanguage === 'nahuatl' ? whyNahuatlTextEnglish2 : ""}</p>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="https://i.imgur.com/IIqzXXG.jpeg" 
                  alt="Nahuatl heritage representation" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-xl"
                  data-ai-hint="nahuatl heritage community"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <div className="flex justify-center items-center text-sm">
            <p className="mr-1">{currentContent.footerText}</p>
            <TextToSpeechButton textToSpeak={currentContent.footerText} lang={currentContent.langCode} buttonSize="sm" />
          </div>
          {currentContent.footerTextSub && <p className="text-xs">{currentContent.footerTextSub}</p>}
        </div>
      </footer>
    </div>
  );
}
