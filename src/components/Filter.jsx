import React from 'react';

const Filter = ({open}) => {
  return (
    <div className={` ${open ? "grid" : "hidden" } sort py-3 px-1 bg-[--extra] text-white items-center gap-5  absolute top-[50px] right-0 `}>
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
  );
};

export default Filter;
