// app/stories/Story.tsx
import React from 'react';

interface StoryProps {
  story: {
    id: number;
    user: string;
    imageUrl: string;
  };
}

const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={story.imageUrl} alt={`${story.user}'s story`} className="w-20 h-20 rounded-full border-[5px] border-blue-500 p-1" />
      <p className="text-sm mt-2">{story.user}</p>
    </div>
  );
};

export default Story;
