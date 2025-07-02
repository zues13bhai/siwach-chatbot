import React from 'react';
import { Bot, CheckCircle, Clock, HeadphonesIcon, Package, RefreshCw } from 'lucide-react';

export const WelcomeMessage: React.FC = () => {
  const features = [
    { icon: Package, text: 'Order tracking & updates' },
    { icon: Clock, text: 'Shipping & delivery info' },
    { icon: RefreshCw, text: 'Returns & refunds' },
    { icon: HeadphonesIcon, text: 'Product support' },
    { icon: CheckCircle, text: 'Payment queries' },
  ];

  return (
    <div className="flex gap-3 mb-6 animate-fadeIn">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            👋 Welcome to <span className="text-blue-600">Siwach Enterprises</span>!
          </h3>
          <p className="text-gray-600 text-sm">
            I'm your AI assistant, available 24/7 to help with:
          </p>
        </div>
        
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <feature.icon className="w-4 h-4 text-blue-500" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">
          <strong>How can I assist you today?</strong>
          <br />
          Browse the question categories above or ask me directly!
        </div>
      </div>
    </div>
  );
};