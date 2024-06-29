"use client"
import React from 'react';

interface StoryViewerProps {
  story: {
    id: number;
    user: string;
    imageUrl: string;
  } | undefined;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onClose }) => {
  if (!story) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative max-w-xl w-full h-full">
        <img src={story.imageUrl} alt={`${story.user}'s story`} className="w-full h-full object-contain" />
        <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
