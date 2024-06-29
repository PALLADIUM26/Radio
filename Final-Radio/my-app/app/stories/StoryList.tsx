// app/stories/StoryList.tsx
"use client"
import React from 'react';
import Story from './Story';
import useStories from '../hooks/useStories';


interface StoryListProps {
  onSelectStory: (storyId: number) => void;
}

const StoryList: React.FC<StoryListProps> = ({ onSelectStory }) => {
  const stories = useStories();

  return (
    <div className="text-white flex space-x-4 overflow-x-auto p-4 bg-transparent shadow rounded-[20px] border border-blue-400 w-[1000px]">
      {stories.map((story) => (
        <div key={story.id} onClick={() => onSelectStory(story.id)}>
          <Story story={story} />
          </div>
      ))}
    </div>
  );
};

export default StoryList;
