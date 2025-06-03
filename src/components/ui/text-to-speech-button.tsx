
"use client";

import { Volume2, StopCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TextToSpeechButtonProps {
  textToSpeak: string;
  lang?: string;
  className?: string;
  buttonSize?: "sm" | "default" | "icon" | "lg" | null; // Allow null for ShadCN Button types
  buttonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null; // Allow null for ShadCN Button types
}

export function TextToSpeechButton({
  textToSpeak,
  lang = 'es-MX', // Default to Spanish (Mexico) as a fallback for Nahuatl
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
      let chosenVoice = voices.find(voice => voice.lang === lang);
      
      if (!chosenVoice) {
        chosenVoice = voices.find(voice => voice.lang.startsWith('es-')); // Fallback to any Spanish
      }
      if (!chosenVoice) {
        chosenVoice = voices.find(voice => voice.default); // Fallback to default
      }

      if (chosenVoice) {
        u.voice = chosenVoice;
        u.lang = chosenVoice.lang; // Use the actual lang of the chosen voice
      } else {
        u.lang = navigator.language || 'es-MX'; // Fallback lang if no voice found
      }
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoiceForUtterance();
        // It's possible the utterance object needs to be re-assigned or updated
        // if voices load after initial setup. For simplicity, we set it once.
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

    // Cleanup function
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
      setIsSpeaking(false); // Manually set state as onend might not fire immediately on cancel
    } else {
      // Ensure the utterance text is current if it could change
      // utteranceObj.text = textToSpeak; // Re-assign text if textToSpeak can change independently of useEffect
      window.speechSynthesis.speak(utteranceObj);
    }
  }, [isSupported, utteranceObj, isSpeaking]);

  if (!isSupported) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={buttonVariant ?? undefined} size={buttonSize ?? undefined} className={className} disabled>
              <AlertCircle className="h-4 w-4" />
              <span className="sr-only">TTS Not Supported</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Text-to-speech is not supported.</p>
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
            className={cn("text-muted-foreground hover:text-accent-foreground p-1", className)} // Adjusted padding for icon buttons
            aria-label={isSpeaking ? "Stop speaking" : "Speak text"}
          >
            {isSpeaking ? <StopCircle className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isSpeaking ? "Stop speaking" : "Listen (Nahuatl via es-MX)"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
