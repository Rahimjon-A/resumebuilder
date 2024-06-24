import React from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';

const Intro = () => {
  return (
    <>
      <div className="h-full container mx-auto lg:px-[100px]  ">
        <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Create perfect resumes for the modern job market
          </h1>
          <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-600">
            Creating a resume has never been this easy! In three simple steps, create the perfect
            document to impress hiring managers and employers. Minimum time, maximum professional
            quality.
          </p>
          <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <span class=" cursor-pointer text-[24px]  text-white font-semibold py-4  px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
              Get started
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mx-auto  mt-16 ">
          <div className=" flex-1 ">
            <p class="text-slate-900 font-extrabold text-xl lg:text-4xl tracking-tight">
              Try our professional Resume builder now!
            </p>
            <p className="mt-6 text-lg text-slate-600  max-w-3xl mx-auto dark:text-slate-600 mb-5 ">
              Save time with our easy 3-step resume builder. No more writer’s block or formatting
              difficulties in Word. Rapidly make a perfect resume employers love.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img src="./trophy.svg" alt="" className="w-[40px]   " />
                <span className=" text-[--text] font-semibold text-[20px]  ">
                  Make a resume that wins interviews
                </span>
              </div>
              <div className="flex items-center gap-4">
                <img src="./done.webp" alt="" className="w-[40px]   " />
                <span className=" text-[--text] font-semibold text-[20px]  ">
                  Resume writing made easy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="./cvintro.webp" alt="" className="w-[50px]   " />
                <span className=" text-[--text] font-semibold text-[20px]  ">
                  A recruiter-tested CV maker tool
                </span>
              </div>
            </div>
          </div>

          <div className="grow flex-1">
            <img src="./introMain.avif" alt="" className="w-full h-[500px] " />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intro;
