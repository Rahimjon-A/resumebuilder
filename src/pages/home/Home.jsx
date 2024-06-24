import React from 'react';
import Search from '../../components/Search';

const Home = () => {
  return (
    <div>
      <div className="bg-[--extra] z-40 fixed top-[64px] w-full ">
        <Search />
      </div>

      <div className="h-[200vh] "></div>
    </div>
  );
};

export default Home;
