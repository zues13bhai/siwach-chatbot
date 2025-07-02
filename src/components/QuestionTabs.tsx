import React, { useState } from 'react';
import { questionCategories } from '../data/questionCategories';
import { QuickReply } from '../types/chat';

interface QuestionTabsProps {
  onQuestionSelect: (message: string) => void;
}

export const QuestionTabs: React.FC<QuestionTabsProps> = ({ onQuestionSelect }) => {
  const [activeTab, setActiveTab] = useState(questionCategories[0].id);

  const activeCategory = questionCategories.find(cat => cat.id === activeTab);

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="flex overflow-x-auto scrollbar-hide">
        {questionCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === category.id
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {activeCategory?.questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onQuestionSelect(question.message)}
              className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 text-left group"
            >
              <span className="text-lg">{question.icon}</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {question.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};