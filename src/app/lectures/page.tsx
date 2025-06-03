import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap } from 'lucide-react';

export default function LecturesOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-headline text-3xl text-primary">Mochīntīn Tēmachtīlli (All Lectures)</h1>
      <p className="text-lg text-foreground">Xitlapehpēni cē tēmachtīliztli ompa tīcmpēhuaz. (Choose a lesson to begin.)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((lecture) => (
          <Card key={lecture.id} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {lecture.icon === "Apple" && <Zap className="h-8 w-8 text-primary" data-ai-hint="fruit math"/>}
                {lecture.icon === "Feather" && <Zap className="h-8 w-8 text-primary" data-ai-hint="feather logic"/>}
                {!lecture.icon && <BookOpen className="h-8 w-8 text-primary" />}
                <CardTitle className="font-headline text-xl text-primary">{lecture.titleNahuatl}</CardTitle>
              </div>
              <CardDescription>{lecture.titleEnglish}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/lectures/${lecture.id}`} passHref>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Ximomachtia (Start Learning)
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
