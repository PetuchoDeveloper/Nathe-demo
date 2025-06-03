import Link from 'next/link';
import { lectures } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Zap } from 'lucide-react'; // Example icons

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Niltze! Welcome to Tlahtolli Yeknemiliztli</CardTitle>
          <CardDescription className="text-lg">Ximomachtia Nahuatl īhuān tlapōhualiztli! (Learn Nahuatl and mathematics!)</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Tīcmomachtiah īpanpa motlahtōl. (We are learning with your language.)</p>
          <div>
            <h3 className="font-headline text-xl mb-2 text-primary">Moixkopinal (Your Progress)</h3>
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
        <h2 className="font-headline text-2xl mb-4 text-primary">Tēmachtīlli (Lectures)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectures.map((lecture) => (
            <Card key={lecture.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {lecture.icon === "Apple" && <Zap className="h-8 w-8 text-primary" data-ai-hint="fruit mathematics"/>}
                  {lecture.icon === "Feather" && <Zap className="h-8 w-8 text-primary" data-ai-hint="feather subtraction"/>}
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
    </div>
  );
}
