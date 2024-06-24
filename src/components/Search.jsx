import { TbUserSearch } from 'react-icons/tb';


const Search = () => {
  return (
    <div className="container mx-auto lg:px-[100px] py-3 flex items-center justify-between ">
    <span className="border flex items-center text-[18px]  w-[300px] px-3 py-1 gap-3 rounded-full bg-[--primary] text-white overflow-hidden ">
      <label htmlFor="search">
        {' '}
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

    <div className="sort text-white flex items-center gap-5 ">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className=" text-[14px] ">
          Profession
        </label>
        <select name="title" id="title" className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white  ">
          <option value="">Any</option>
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
        <label htmlFor="age" className=" text-[14px] ">
          Age
        </label>
        <select name="age" id="age" className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white ">
          <option value="">Any</option>
          <option value="18"> {`< 18`} </option>
          <option value="20"> 18 - 22 </option>
          <option value="23">22 - 25</option>
          <option value="28">25 - 30</option>
          <option value="35"> 30 - 40 </option>
          <option value="40"> {` 40 < `} </option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="region" className=" text-[14px] ">
          Region
        </label>
        <select name="region" id="region" className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white ">
          <option value="">Any</option>
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
        <label htmlFor="experience" className=" text-[14px] ">
          Experience
        </label>
        <select name="experience" id="experience" className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white ">
          <option value="">Any</option>
          <option value="andijon">0 - 1 year</option>
          <option value="bukhara">1 - 3 years</option>
          <option value="fergana">3- 6 years</option>
          <option value="jizzakh">+ 6 years</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="experience" className=" text-[14px] ">
          Type of
        </label>
        <select name="experience" id="experience" className="text-[--text] outline-none bg-[--primary] border rounded-full text-center py-1 px-1 text-white ">
          <option value="">Any</option>
          <option value="andijon">Online</option>
          <option value="bukhara">Offline</option>
          <option value="fergana">Part Time</option>
          <option value="jizzakh">Full Time</option>
        </select>
      </div>

    </div>
  </div>
  )
}

export default Search