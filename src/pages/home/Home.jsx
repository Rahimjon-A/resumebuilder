import Search from '../../components/Search';
import Footer from '../../components/Footer';
import { IoEye } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';

const Home = () => {
  return (
    <div>
      <div className="bg-[--extra] z-40 fixed top-[64px] w-full ">
        <Search />
      </div>

      <div className=" min-h-[calc(100vh-200px)] container xl:px-[100px] px-4 mx-auto flex flex-col justify-between mt-36 ">

        <div className="p-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
         
          {/* user data or map user CV */}
          <div className="relative group">
            {/* image or file will came from data */}
            <img src="./introImg1.png" alt="" />

            <span className="absolute flex justify-center items-center gap-5 text-[38px] inset-0 bg-teal-500 bg-opacity-40 opacity-0 group-hover:opacity-100  duration-500">
              <IoEye className=" cursor-pointer" />
              <BiSolidEdit className=" cursor-pointer" />
            </span>
          </div>
          {/* user data */}

          {/* user data or map user CV */}
          <div className="relative group">
            {/* image or file will came from data */}
            <img src="./introImg2.png" alt="" />

            <span className="absolute flex justify-center items-center gap-5 text-[38px] inset-0 bg-teal-500 bg-opacity-40 opacity-0 group-hover:opacity-100  duration-500">
              <IoEye className=" cursor-pointer" />
              <BiSolidEdit className=" cursor-pointer" />
            </span>
          </div>
          {/* user data */}
          
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
