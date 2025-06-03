
"use client";

import { Volume2, StopCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TextToSpeechButtonProps {
  textToSpeak: string;
  lang?: string; // e.g., 'nah' for Nahuatl, 'es-MX' for Spanish
  className?: string;
  buttonSize?: "sm" | "default" | "icon" | "lg" | null;
  buttonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
}

export function TextToSpeechButton({
  textToSpeak,
  lang = 'nah', // Default to 'nah', specific handling for Nahuatl/Spanish fallback
  className,
  buttonSize = "icon",
  buttonVariant = "ghost"
}: TextToSpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [utteranceObj, setUtteranceObj] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    const u = new SpeechSynthesisUtterance(textToSpeak);
    
    const setVoiceForUtterance = () => {
      const voices = window.speechSynthesis.getVoices();
      let chosenVoice;

      if (lang === 'nah') {
        // Try to find a Nahuatl-like voice or fallback to Spanish
        chosenVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('nah')) || 
                      voices.find(voice => voice.lang.toLowerCase() === 'es-mx') ||
                      voices.find(voice => voice.lang.toLowerCase().startsWith('es-'));
      } else {
        // For other languages, try to find exact match or prefix match
        chosenVoice = voices.find(voice => voice.lang.toLowerCase() === lang.toLowerCase()) ||
                      voices.find(voice => voice.lang.toLowerCase().startsWith(lang.toLowerCase().split('-')[0]));
      }
      
      if (!chosenVoice) {
        chosenVoice = voices.find(voice => voice.default); // Fallback to default
      }

      if (chosenVoice) {
        u.voice = chosenVoice;
        u.lang = chosenVoice.lang; 
      } else {
        u.lang = lang === 'nah' ? 'es-MX' : (navigator.language || lang); // Fallback lang if no voice found
      }
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoiceForUtterance();
      };
    } else {
      setVoiceForUtterance();
    }
    
    u.onstart = () => setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    u.onerror = (event) => {
      setIsSpeaking(false);
      console.error('Speech synthesis error:', event.error);
    };
    setUtteranceObj(u);

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [textToSpeak, lang]);

  const handleSpeak = useCallback(() => {
    if (!isSupported || !utteranceObj) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false); 
    } else {
      window.speechSynthesis.speak(utteranceObj);
    }
  }, [isSupported, utteranceObj, isSpeaking]);

  const getTooltipText = () => {
    let languageName = "text";
    if (lang === 'nah') languageName = "Náhuatl (vía voz en Español)";
    else if (lang === 'es-MX' || lang.startsWith('es')) languageName = "Español";
    else languageName = lang;
    return isSpeaking ? `Detener (${languageName})` : `Escuchar (${languageName})`;
  }

  if (!isSupported) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={buttonVariant ?? undefined} size={buttonSize ?? undefined} className={className} disabled>
              <AlertCircle className="h-4 w-4" />
              <span className="sr-only">TTS No Soportado</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>La función de texto a voz no es compatible con este navegador.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  if (!textToSpeak || textToSpeak.trim() === "") {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={buttonVariant ?? undefined}
            size={buttonSize ?? undefined}
            onClick={handleSpeak}
            className={cn("text-muted-foreground hover:text-accent-foreground p-1", className)}
            aria-label={isSpeaking ? "Stop speaking" : "Speak text"}
          >
            {isSpeaking ? <StopCircle className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipText()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
