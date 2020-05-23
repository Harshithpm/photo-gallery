import React from 'react';
import { auth } from '../firebase';
const ProfilePage = () => {
  const uploadPhoto = () => {};
  return (
    <div className='mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8'>
      <div className='flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4'>
        <h1 className='bold items-center center'>Photos</h1>
      </div>
      <button
        className='w-full py-3 bg-green-500 hover:bg-green-600 mt-4 text-white'
        onClick={() => {
          uploadPhoto();
        }}>
        Upload a Photo!
      </button>
      <button
        className='w-full py-3 bg-red-500 hover:bg-red-600 mt-4 text-white'
        onClick={() => {
          auth.signOut();
        }}>
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
