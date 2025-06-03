
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, MessageSquare, Calculator, Heart, Feather } from 'lucide-react';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';

export default function LandingPage() {
  // Hero Section Content
  const heroTitleNahuatl = "Niltze! Ximopanōltih";
  const heroAppNameNahuatl = "Tlahtolli Yeknemiliztli";
  const heroSubtitleNahuatl = "Ximomachtia Nahuatl īhuān tlapōhualiztli tlatlamantli.";
  const heroSubtitleEnglish = "Learn Nahuatl and mathematics in an engaging way.";
  const heroCtaNahuatl = "Ximpēhua Axkan!";
  const heroCtaEnglish = "(Start Now!)";

  // Features Section Content
  const featuresTitleNahuatl = "Tlein Tiquittāz?";
  const featuresTitleEnglish = "(What Will You Find?)";

  const features = [
    {
      icon: BookOpen,
      titleNahuatl: "Tēmachtīlli Tēāhuiltiani",
      titleEnglish: "Interactive Lessons",
      descriptionNahuatl: "Timomachtīz Nahuatl īca tēmachtīlli tlachīhualiztli.",
      descriptionEnglish: "Learn Nahuatl with engaging lessons that make learning fun and effective.",
      dataAiHint: "education book",
    },
    {
      icon: MessageSquare,
      titleNahuatl: "Nahuatl Tlahtōlnāmiquiliztli",
      titleEnglish: "Nahuatl Chatbot",
      descriptionNahuatl: "Xitlajtlani mochi īpanpa tēmachtīlli īca totlahtōlnāmiquiliztli.",
      descriptionEnglish: "Practice your conversation skills and get instant help from our AI-powered Nahuatl tutor.",
      dataAiHint: "chat ai",
    },
    {
      icon: Calculator,
      titleNahuatl: "Tlapōhualiztli īpan Nahuatl",
      titleEnglish: "Mathematics in Nahuatl",
      descriptionNahuatl: "Ximomachtia tlapōhualiztli īpan monāntlahtōl.",
      descriptionEnglish: "Explore mathematical concepts explained entirely in Nahuatl.",
      dataAiHint: "math numbers",
    },
  ];

  // Why Nahuatl Section Content
  const whyNahuatlTitleNahuatl = "Ma Tiktlazohtlacan Totlahtōl";
  const whyNahuatlTitleEnglish = "(Let's Cherish Our Language)";
  const whyNahuatlTextNahuatl1 = "Nahuatl cē tlahtōlli chicāhuac īhuān huehcāuhtiliztli.";
  const whyNahuatlTextEnglish1 = "Nahuatl is a language of strength and history.";
  const whyNahuatlTextNahuatl2 = "Timitztlālīliah ximomachtia īhuān xictlazohtla.";
  const whyNahuatlTextEnglish2 = "We invite you to learn it, cherish it, and help keep it alive for future generations.";
  
  // Footer
  const footerTextNahuatl = "© 2024 Tlahtolli Yeknemiliztli. Mochi tlamachtīliztli īpampa.";
  const footerTextEnglish = "(All rights reserved.)";


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="py-4 px-6 md:px-10 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/landing" className="flex items-center gap-2">
            <AppLogoIcon className="h-8 w-8 text-primary" />
            <div className="flex items-center">
              <span className="font-headline text-xl font-semibold text-primary">{heroAppNameNahuatl}</span>
              <TextToSpeechButton textToSpeak={heroAppNameNahuatl} buttonSize="sm" className="ml-1" />
            </div>
          </Link>
          <Link href="/" passHref>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <span className="mr-1">{heroCtaNahuatl}</span>
                <TextToSpeechButton textToSpeak={heroCtaNahuatl} buttonVariant="ghost" buttonSize="sm" className="text-accent-foreground hover:text-accent-foreground/80" />
            </Button>
          </Link>
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
                {heroTitleNahuatl}
              </h1>
              <TextToSpeechButton textToSpeak={heroTitleNahuatl} buttonSize="lg" />
            </div>
            <div className="flex justify-center items-center mb-6">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-accent mr-2">
                {heroAppNameNahuatl}
              </h2>
               <TextToSpeechButton textToSpeak={heroAppNameNahuatl} buttonSize="default" />
            </div>
            <div className="flex justify-center items-center mb-4">
              <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mr-2">
                {heroSubtitleNahuatl}
              </p>
              <TextToSpeechButton textToSpeak={heroSubtitleNahuatl} />
            </div>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-8">
              {heroSubtitleEnglish}
            </p>
            <Link href="/" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                <span className="mr-2">{heroCtaNahuatl}</span>
                <TextToSpeechButton textToSpeak={heroCtaNahuatl} buttonVariant="ghost" buttonSize="sm" className="text-primary-foreground hover:text-primary-foreground/80" />
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex justify-center">
            <Image 
              src="https://placehold.co/800x400.png" 
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
                  {featuresTitleNahuatl}
                </h2>
                <TextToSpeechButton textToSpeak={featuresTitleNahuatl} />
              </div>
              <p className="text-md text-muted-foreground">{featuresTitleEnglish}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="items-center text-center">
                    <feature.icon className="h-12 w-12 text-accent mb-4" data-ai-hint={feature.dataAiHint}/>
                    <div className="flex items-center justify-center">
                      <CardTitle className="font-headline text-xl text-primary mr-1">{feature.titleNahuatl}</CardTitle>
                      <TextToSpeechButton textToSpeak={feature.titleNahuatl} buttonSize="sm" />
                    </div>
                    <CardDescription className="text-sm">{feature.titleEnglish}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center text-center mb-1">
                      <p className="text-foreground text-sm mr-1">{feature.descriptionNahuatl}</p>
                      <TextToSpeechButton textToSpeak={feature.descriptionNahuatl} buttonSize="sm" />
                    </div>
                    <p className="text-muted-foreground text-xs">{feature.descriptionEnglish}</p>
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
                    {whyNahuatlTitleNahuatl}
                  </h2>
                  <TextToSpeechButton textToSpeak={whyNahuatlTitleNahuatl} />
                </div>
                 <p className="text-md text-muted-foreground">{whyNahuatlTitleEnglish}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-start mb-3">
                    <p className="text-lg text-foreground mr-2">{whyNahuatlTextNahuatl1}</p>
                    <TextToSpeechButton textToSpeak={whyNahuatlTextNahuatl1} className="mt-1" />
                </div>
                <p className="text-md text-muted-foreground mb-4">{whyNahuatlTextEnglish1}</p>
                <div className="flex items-start">
                    <p className="text-lg text-foreground mr-2">{whyNahuatlTextNahuatl2}</p>
                    <TextToSpeechButton textToSpeak={whyNahuatlTextNahuatl2} className="mt-1" />
                </div>
                <p className="text-md text-muted-foreground">{whyNahuatlTextEnglish2}</p>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="https://placehold.co/600x400.png" 
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
            <p className="mr-1">{footerTextNahuatl}</p>
            <TextToSpeechButton textToSpeak={footerTextNahuatl} buttonSize="sm" />
          </div>
          <p className="text-xs">{footerTextEnglish}</p>
        </div>
      </footer>
    </div>
  );
}

    