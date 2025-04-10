import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ComingSoon = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -60 }, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: 'power3.out',
    });
    gsap.fromTo(subtitleRef.current, { opacity: 0, y: 40 }, {
      opacity: 1,
      y: 0,
      delay: 0.4,
      duration: 1.2,
      ease: 'power2.out',
    });
    gsap.fromTo(inputRef.current, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      delay: 0.8,
      duration: 1.1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/10 animate-pulse"></div>

      <div className="relative text-center px-6 py-8 z-10 max-w-3xl">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-extrabold tracking-wide uppercase leading-tight text-white drop-shadow-[0_2px_25px_rgba(255,255,255,0.25)]">
          Coming Soon
        </h1>
        <p ref={subtitleRef} className="mt-6 text-lg md:text-2xl text-gray-400 italic">
          Our digital experience is almost ready to launch. Be the first to know.
        </p>

        <div ref={inputRef} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="px-6 py-3 rounded-full bg-white text-black placeholder-gray-600 focus:outline-none w-full sm:w-80 shadow-lg focus:ring-2 focus:ring-white"
          />
          <button 
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300 uppercase tracking-wide shadow-md"
          >
            Notify Me
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20 animate-ping"></div>
        <div className="absolute w-96 h-96 bg-white/20 rounded-full -bottom-32 -right-32 animate-pulse"></div>
        <div className="absolute border border-white/10 w-[150vw] h-[150vh] rotate-45 -left-1/2 -top-1/2"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
