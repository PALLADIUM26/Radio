"use client"
import React from 'react';
import "./globals.css";
import Image from 'next/image';
import Post from './components/Post';
import Menu from './components/Menu';
import Account from './components/Account';
import StoryList from './stories/StoryList';
import StoryViewer from './stories/StoryViewer';
import useStories from './hooks/useStories';
import { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


const HomePage: React.FC = () => {

  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);
  const stories = useStories();
  

  const handleSelectStory = (storyId: number) => {
    setSelectedStoryId(storyId);

  // const session = useSession({
  //   required:true,
  //   onUnauthenticated(){
  //     redirect("/signin")
  //   }
  // })

  };
  

  return (
    <div className='bg h-screen w-full mx-auto'>

<div className="container mx-auto p-4 fixed top-[20px] left-[430px] z-50">
<StoryList onSelectStory={handleSelectStory} />
      {selectedStoryId !== null && (
        <StoryViewer
          story={stories.find((story) => story.id === selectedStoryId)}
          onClose={() => setSelectedStoryId(null)}
        />
      )}

</div>

{/* <div className='fixed top-[200px] left-[630px] z-50'>
<StoryViewer />

</div> */}



      <div className='left relative flex flex-col items-start p-8'> 
        <Image src="/pictures/settings.png" alt='' width={50} height={50} className='relative top-10 left-[300px] '/>
        <div className='text-white fixed top-44 p-10'>Suggested for you</div>
        <Image src='/pictures/container1_radio.png' alt='' width={400} height={400} className='fixed top-[30px] ' />
        <div className="">
        <Image src='/pictures/Group 26.png' alt='' width={30} height={30} className='fixed z-10 top-[300px] left-[70px]'/>
        <p className='text-white fixed top-[320px] left-[120px]'>Prithwish Chatterjee</p>
        <div className='fixed top-[200px] left-[450px]'>
        <Post />
        </div>

          <div className='fixed top-[300px] left-[1500px]'>
            <Menu />
          </div>

          <div className='fixed top-[100px] left-[1500px]'>
            <Account />
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;