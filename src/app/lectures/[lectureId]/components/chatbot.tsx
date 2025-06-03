"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { nahuatlChatbot, type NahuatlChatbotInput, type NahuatlChatbotOutput } from '@/ai/flows/nahuatl-chatbot';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageSquare, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { UserAvatar } from '@/components/layout/user-avatar';
import { AppLogoIcon } from '@/components/icons/app-logo-icon'; // Using app logo for bot

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  isValidNahuatl?: boolean;
}

interface ChatbotProps {
  lectureContent: string;
  lectureTitle: string;
}

export function Chatbot({ lectureContent, lectureTitle }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if(scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Initial bot message
  useEffect(() => {
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: `Niltze! Ni nēchpactia nimitztēmachtīz. ¿Tlein monequi ticmatiz īpanpa "${lectureTitle}"? (Hello! I'm happy to teach you. What do you want to know about "${lectureTitle}"?)`,
        isValidNahuatl: true,
      }
    ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lectureTitle]);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: userInput,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const chatbotInput: NahuatlChatbotInput = {
        lectureContent: lectureContent,
        question: userInput,
      };
      const result: NahuatlChatbotOutput = await nahuatlChatbot(chatbotInput);
      
      const botMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: result.answer,
        isValidNahuatl: result.isValidNahuatl,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: 'Nimitztlajtlanilia माफी, amo nikmatki tlen oticchiuh. (I apologize, I did not understand what you did.)', // A generic error message in Nahuatl
        isValidNahuatl: false, // Assuming error messages might not be perfectly validated
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg flex flex-col h-[600px] max-h-[70vh]">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary">
          <MessageSquare className="h-6 w-6" />
          <span>Nahuatl Tēmachtiani (Nahuatl Tutor)</span>
        </CardTitle>
        <CardDescription>Xitlajtlani nochi tlein ticnequi ticmatiz. (Ask whatever you want to know.)</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex-shrink-0">
                    <AppLogoIcon className="h-8 w-8 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 shadow ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.sender === 'bot' && msg.isValidNahuatl !== undefined && (
                    <div className="mt-1 flex items-center text-xs">
                      {msg.isValidNahuatl ? (
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />
                      )}
                      <span>{msg.isValidNahuatl ? 'Nahuatl Kuali' : 'Nahuatl Xkuali'}</span>
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && (
                   <div className="flex-shrink-0">
                     <UserAvatar />
                   </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center gap-2">
                 <div className="flex-shrink-0">
                    <AppLogoIcon className="h-8 w-8 text-primary" />
                  </div>
                <div className="bg-muted text-muted-foreground rounded-lg p-3 shadow flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span className="text-sm italic">Motlananquilia... (Thinking...)</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Xitlajtlani mōtlahtōl... (Ask your question...)"
            className="flex-grow"
            disabled={isLoading}
            aria-label="User question input"
          />
          <Button type="submit" disabled={isLoading || !userInput.trim()} size="icon" className="bg-accent hover:bg-accent/90">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
