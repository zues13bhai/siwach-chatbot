import React from 'react';
import { Building2, Circle } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Siwach Enterprises</h1>
              <p className="text-blue-100 text-sm">AI Support Assistant • Available 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
            <Circle className="w-3 h-3 fill-green-400 text-green-400 animate-pulse" />
            <span className="text-green-100 text-xs font-medium">Online</span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-8 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute -top-4 -left-8 w-24 h-24 bg-white/5 rounded-full"></div>
    </div>
  );
};