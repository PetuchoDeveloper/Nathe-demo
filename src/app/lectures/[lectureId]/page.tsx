import { getLectureById, type Lecture } from '@/lib/data';
import { LectureContent } from './components/lecture-content';
import { MathExample } from './components/math-example';
import { Chatbot } from './components/chatbot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookHeart } from 'lucide-react';
import { notFound } from 'next/navigation';

interface LecturePageProps {
  params: {
    lectureId: string;
  };
}

export default function LecturePage({ params }: LecturePageProps) {
  const lecture = getLectureById(params.lectureId);

  if (!lecture) {
    notFound(); // Or redirect to a "not found" page
  }

  const fullLectureContentForChatbot = lecture.contentNahuatl.join("\n");

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <LectureContent lecture={lecture} />
          
          {lecture.mathExamples.length > 0 && (
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary">
                  <BookHeart className="h-6 w-6"/>
                  <span>Tlapōhualiztli Tlamatiloyan (Math Examples)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {lecture.mathExamples.map((example) => (
                  <MathExample key={example.id} example={example} />
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Chatbot lectureContent={fullLectureContentForChatbot} lectureTitle={lecture.titleNahuatl} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { lectures } = await import('@/lib/data');
  return lectures.map((lecture) => ({
    lectureId: lecture.id,
  }));
}
