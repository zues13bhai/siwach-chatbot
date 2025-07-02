import React from 'react';
import { Message } from '../types/chat';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex gap-3 mb-6 animate-fadeIn ${message.isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        message.isUser 
          ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
          : 'bg-gradient-to-br from-blue-500 to-purple-600'
      }`}>
        {message.isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ${
        message.isUser ? 'text-right' : ''
      }`}>
        <div className={`inline-block p-4 rounded-2xl shadow-sm ${
          message.isUser
            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
            : 'bg-white border border-gray-200'
        }`}>
          <p className={`text-sm leading-relaxed whitespace-pre-line ${
            message.isUser ? 'text-white' : 'text-gray-800'
          }`}>
            {message.content}
          </p>
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? 'text-right' : ''}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};