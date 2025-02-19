// src/components/timeline/TimelineEntry.jsx
import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';
import HighlightedText from './HighlightedText';
import Card from './Card';
import CardContent from './CardContent';

const TimelineEntry = ({ 
  data, 
  isActive, 
  onClick, 
  index, 
  language, 
  showContent, 
  searchTerm, 
  isCurrentMatch 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group" data-entry-index={index}>
      <div className="flex items-start gap-3">
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200" />
        
        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        } text-sm`}>
          {index + 1}
        </div>

        <div className="flex-1 pb-6">
          <div className="flex flex-col gap-2">
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 border-blue-500 shadow-sm' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } border rounded-lg p-3 flex items-center gap-3 w-full md:w-64`}
              onClick={onClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CategoryIcon category={data.category} />
              <div>
                <div className="font-bold text-lg tracking-wide text-blue-900">
                  <HighlightedText 
                    text={data.year.toString()}
                    searchTerm={searchTerm}
                    isCurrentMatch={isCurrentMatch}
                  />
                </div>
                <div className={`text-base font-semibold ${isActive ? 'text-blue-800' : 'text-gray-700'}`}>
                  <HighlightedText 
                    text={data.title[language] || ''}
                    searchTerm={searchTerm}
                    isCurrentMatch={isCurrentMatch}
                  />
                </div>
              </div>
            </div>

            {showContent && isActive && (
              <Card className="mt-3 w-full">
                <CardContent className="p-4">
                  <div className="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
                    <HighlightedText 
                      text={data.description[language] || ''}
                      searchTerm={searchTerm}
                      isCurrentMatch={isCurrentMatch}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEntry;

