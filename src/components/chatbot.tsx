
"use client";

import { useEffect, useState, useRef } from 'react';
import { chatbotAssistance, ChatbotAssistanceInput } from '@/ai/flows/chatbot-assistance';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Loader, Send, User, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    suggestions?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const getPageContent = () => {
    if (typeof window !== 'undefined') {
        return document.body.innerText;
    }
    return '';
  }
  
  const predefinedQuestions = [
    "What services do you offer?",
    "How much do patent drawings cost?",
    "Can you explain the difference between utility and design patents?",
  ];

  // Welcome message with suggestions
  useEffect(() => {
    if (isOpen) {
        if(messages.length > 0) return;

        setMessages([{ 
          id: 'welcome', 
          text: "Hello! I'm the Kashi Assistant. How can I help you? You can ask me a question or choose one of the options below.", 
          sender: 'bot',
          suggestions: predefinedQuestions
        }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [messages])

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: textToSend, sender: 'user' };
    
    // Remove suggestions from previous messages
    const updatedMessages = messages.map(msg => {
      const { suggestions, ...rest } = msg;
      return rest;
    });

    setMessages([...updatedMessages, userMessage]);
    
    if(!messageText) {
      setInput('');
    }
    setIsLoading(true);

    try {
        const history = [...updatedMessages, userMessage].map(m => `${m.sender}: ${m.text}`).join('\n');
        const pageContent = getPageContent();
        const result = await chatbotAssistance({ prompt: textToSend, history, pageContent });
        setMessages((prev) => [...prev, { id: Date.now().toString() + 'bot', text: result.chatbotMessage, sender: 'bot' }]);
    } catch (error) {
        console.error('Chatbot send error:', error);
        setMessages((prev) => [...prev, {id: 'error-send', text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot'}]);
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <>
        <div className="fixed bottom-20 right-5 z-50">
             <Button onClick={() => setIsOpen(true)} size="icon" className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg">
                <Bot className="h-7 w-7" />
            </Button>
        </div>
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed bottom-5 right-5 z-50 w-full max-w-sm"
            >
            <Card className="shadow-2xl h-[70vh] flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <p className="font-semibold">Kashi Assistant</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                </Button>
                </CardHeader>
                <CardContent className="p-4 flex-grow overflow-hidden">
                    <ScrollArea className="h-full" ref={scrollAreaRef}>
                        <div className="space-y-4 pr-4">
                        {messages.map((message) => (
                          <div key={message.id}>
                             <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                                {message.sender === 'bot' && <Bot className="h-6 w-6 text-primary shrink-0" />}
                                <div className={`rounded-lg px-3 py-2 max-w-[80%] ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p className="text-sm">{message.text}</p>
                                </div>
                                {message.sender === 'user' && <User className="h-6 w-6 text-muted-foreground shrink-0" />}
                            </div>
                            {message.suggestions && (
                              <div className="flex flex-wrap gap-2 mt-2 ml-8">
                                {message.suggestions.map((suggestion, index) => (
                                  <Button 
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-auto py-1.5"
                                    onClick={() => handleSend(suggestion)}
                                  >
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Bot className="h-6 w-6 text-primary shrink-0" />
                                <div className="rounded-lg px-3 py-2 bg-muted flex items-center">
                                    <Loader className="h-4 w-4 animate-spin" />
                                    <span className="text-sm ml-2">Thinking...</span>
                                </div>
                            </div>
                        )}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="p-4 border-t">
                    <div className="flex w-full items-center space-x-2">
                        <Input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message..."
                            disabled={isLoading}
                        />
                        <Button onClick={() => handleSend()} disabled={isLoading || !input.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            </motion.div>
        )}
        </AnimatePresence>
    </>
  );
}
