import React from 'react'
import { Link } from 'react-router-dom';

const P404 = () => {
  return (
    <div className='flex justify-center text-align: center h-screen items-center    bg-red-600'>
      <button>
      <h1 className='text-8xl'>404</h1>
      <Link to="/">
      Back to Home
      </Link>
      </button>
    </div>
  );
};
export default P404 
