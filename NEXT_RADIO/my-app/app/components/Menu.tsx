import React from 'react';
import { useState } from 'react';
import { HomeIcon, MagnifyingGlassIcon, GlobeAltIcon, MusicalNoteIcon, BellIcon, MicrophoneIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Popup from './Popup';

const Menu: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="w-[350px] h-[600px] bg-transparent text-white rounded-[30px] px-8 py-10 shadow-lg animate-slideIn border border-blue-400">
      
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-800 rounded-lg">
        <span>Home</span>
        <HomeIcon className="h-5 w-5" />
      </div>
      <div className="flex flex-row items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer space-x-48">
        <span>Search</span>
        <MagnifyingGlassIcon className="fh-5 w-5 mr-2 " />

      </div>
      <div className="flex flex-row items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer space-x-48">
        <span>Explore</span>
        <GlobeAltIcon className="h-5 w-5 mr-2" />

      </div>
      <div className="flex items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer flex-row space-x-48">
        <span>Audios</span>
        <MusicalNoteIcon className="h-5 w-5 mr-2" />

      </div>
      <div className="flex items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer flex-row space-x-36">
        <span>Notifications</span>
        <BellIcon className="h-5 w-5 mr-2" />

      </div>
      <div className="flex items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer flex-row space-x-48 z-51" onClick={handleOpenPopup} >
        <span>Create</span>
        <MicrophoneIcon className="h-5 w-5 mr-2" />
        
      </div>

      <div className='fixed text-black'> 
        <Popup  show={showPopup} onClose={handleClosePopup} />
        </div>



      <div className="flex items-center mb-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer flex-row space-x-48">
        <span>Profile</span>
        <UserIcon className="h-5 w-5 mr-2" />

      </div>
      <div className="flex items-center p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer flex-row space-x-48">
        <span>More</span>
        <Bars3Icon className="h-5 w-5 mr-2" />

      </div>
    </div>
  );
};

export default Menu;
