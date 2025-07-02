import React, { useState, useRef, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { QuestionTabs } from './components/QuestionTabs';
import { ChatMessage } from './components/ChatMessage';
import { TypingIndicator } from './components/TypingIndicator';
import { ChatInput } from './components/ChatInput';
import { WelcomeMessage } from './components/WelcomeMessage';
import { Message } from './types/chat';
import { getBotResponse } from './data/knowledgeBase';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addMessage = (content: string, isUser: boolean = false) => {
    const newMessage: Message = {
      id: generateId(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async (message: string) => {
    if (showWelcome) {
      setShowWelcome(false);
    }

    // Add user message
    addMessage(message, true);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(message);
      addMessage(botResponse);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuestionSelect = (message: string) => {
    handleSendMessage(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto h-screen flex flex-col shadow-2xl bg-white/90 backdrop-blur-sm">
        <ChatHeader />
        
        <QuestionTabs onQuestionSelect={handleQuestionSelect} />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {showWelcome && <WelcomeMessage />}
          
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;