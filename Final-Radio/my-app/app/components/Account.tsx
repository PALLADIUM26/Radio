"use client"
import React from 'react';
import Image from 'next/image';


const Account: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-transparent text-white rounded-[30px] shadow-md w-[350px] h-[150px] border border-blue-600">
      <Image src="/pictures/user1.png" alt='' width={160} height={50} />
      <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded-[40px] text-xs relative left-[60px] bottom-[30px]">
        Switch Account
      </button>
      <p className='text-white relative right-[28px] top-[30px]'>Acc_name</p>
    </div>
  );
};

export default Account;
