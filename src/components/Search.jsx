import { TbUserSearch } from 'react-icons/tb';
import Playground from './Sort';
import { IoFilterSharp } from 'react-icons/io5';
import { useState } from 'react';
import Filter from './Filter';
import { IoMdClose } from 'react-icons/io';

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto xl:px-[100px] px-4 py-3 flex gap-3 items-center justify-between relative ">
      <span className="border flex items-center text-[18px]  w-[300px] px-3 py-1 gap-3 rounded-full bg-[--primary] text-white overflow-hidden ">
        <label htmlFor="search">
          <TbUserSearch />
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-inherit grow outline-none "
          placeholder="Type for Search..."
        />
      </span>

      <span
        onClick={() => setOpen((prev) => !prev)}
        className="flex bg-[--primary] w-[100px] items-center gap-3 text-white border rounded-full py-1 px-3 cursor-pointer lg:hidden "
      >
        {open ? (
          <>
            <span>Close</span>
            <IoMdClose />
          </>
        ) : (
          <>
            <span> Filter</span>
            <IoFilterSharp />
          </>
        )}
      </span>

      <Filter open={open} />

      <div className="sort text-white items-center gap-5 hidden lg:flex ">
        <div className="flex flex-col gap-1">
          <select
            name="title"
            id="title"
            className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white  "
          >
            <option hidden>Profession</option>
            <option value="all">All</option>
            <option value="software">Software Developer/Engineer</option>
            <option value="designer">UI/UX Designer</option>
            <option value="data">Data Scientist</option>
            <option value="digital">Digital Marketing Specialist</option>
            <option value="seo">SEO Specialist</option>
            <option value="video">Video Content Creator</option>
            <option value="manager">Project Manager</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select
            name="age"
            id="age"
            className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white "
          >
            <option hidden>Age</option>
            <option value="all">All</option>
            <option value="18"> {`< 18`} </option>
            <option value="20"> 18 - 22 </option>
            <option value="23">22 - 25</option>
            <option value="28">25 - 30</option>
            <option value="35"> 30 - 40 </option>
            <option value="40"> {` 40 < `} </option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select
            name="region"
            id="region"
            className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white "
          >
            <option hidden>Region</option>
            <option value="all">All</option>
            <option value="andijon">Andijon</option>
            <option value="bukhara">Bukhara</option>
            <option value="fergana">Fergana</option>
            <option value="jizzakh">Jizzakh</option>
            <option value="karakalpakstan">Karakalpakstan</option>
            <option value="kashkadarya">Kashkadarya</option>
            <option value="khorezm">Khorezm</option>
            <option value="namangan">Namangan</option>
            <option value="navoiy">Navoiy </option>
            <option value="samarkand">Samarkand</option>
            <option value="sirdaryo">Sirdaryo</option>
            <option value="surkhandarya">Surkhandarya</option>
            <option value="toshkent">Tashkent Region</option>
            <option value="toshkentCity">Tashkent City</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select
            name="experience"
            id="experience"
            className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white "
          >
            <option hidden>Experience</option>
            <option value="all">All</option>
            <option value="0">0 - 1 year</option>
            <option value="1">1 - 3 years</option>
            <option value="3">3- 6 years</option>
            <option value="6">+ 6 years</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select
            name="experience"
            id="experience"
            className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white "
          >
            <option hidden>Type of</option>
            <option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="partTime">Part Time</option>
            <option value="fullTime">Full Time</option>
          </select>
        </div>
      </div>

      {/* <Playground/> */}
    </div>
  );
};

export default Search;
