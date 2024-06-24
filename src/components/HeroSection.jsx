import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-indigo-500 dark:highlight-white/20">
          <div class="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"></div>
          <div class="hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block"></div>
        </div>
        <h2 class="mt-8 font-semibold text-indigo-500">Ready-made components</h2>
        <p class="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Move even faster with Tailwind&nbsp;UI.
        </p>
        <p class="mt-4 max-w-3xl space-y-6 ">
          Tailwind UI is a collection of beautiful, fully responsive UI components, designed and
          developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples
          to choose from, and is guaranteed to help you find the perfect starting point for what you
          want to build.
        </p>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8"
          href="https://tailwindui.com/?ref=landing"
        >
          Learn more
          <svg
            class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
      </div>
      
    </>
  );
};

export default HeroSection;
