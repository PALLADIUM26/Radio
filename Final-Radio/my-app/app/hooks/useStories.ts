"use client"
import { useState, useEffect } from 'react';

interface Story {
  id: number;
  user: string;
  imageUrl: string;
}

const useStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Fetch stories from an API or other source
      const fetchedStories = [
        { id: 1, user: 'Pruuth', imageUrl: '/pictures/image.png' },
        { id: 2, user: 'oasimm', imageUrl: '/pictures/wasim.png' },
        { id: 3, user: 'chandreee', imageUrl: '/pictures/chand.png' },
        { id: 4, user: 'palluuu', imageUrl: '/pictures/palla.png' },

      ];
      setStories(fetchedStories);
    } catch (err) {
      setError('Failed to fetch stories');
      console.error(err);
    }
  }, []);

  if (error) {
    console.error(error);
  }

  return stories;
};

export default useStories;
