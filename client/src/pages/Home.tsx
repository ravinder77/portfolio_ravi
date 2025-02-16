import React from 'react';
import { getGreeting } from '../utils/utils';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (

      <div className='flex items-center justify-center max-w-[70%] mx-auto h-[calc(100vh-150px)]'>
        <div className='flex flex-col items-center justify-center w-full mx-auto'>
          <p className='text-xl text-left uppercase'> {getGreeting()} I'm</p>
          
          <h1 className=' text-5xl font-bold tracking-wide text-primaryYellow'>
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Ravinder Singh")
                  .pauseFor(1000) // Optional pause between strings
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .start(); // Ensures the second string remains
              }}
              options={{

                loop: false, // Disable looping
                delay: 75, // Typing speed
              }}
            />
          </h1>
          <p className='text-base mt-4 font-light leading-loose text-center'>
            I am Ravinder Singh, a passionate Full Stack Developer who
            specialize in building dynamic, user-centered applications. I enjoy
            blending front-end and back-end technologies to create efficient,
            impactful solutions. Let’s build something great together!
          </p>
          <button
            type='button'
            className='mt-6 bg-primaryYellow text-primaryBlack   px-6 py-2 capitalize rounded-3xl  font-medium'
          >
            Download CV
          </button>
        </div>
      </div>

  );
};

export default Home;
