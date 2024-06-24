import { FaKickstarterK } from 'react-icons/fa';
import { TbLogin2 } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav className=" fixed z-30 top-0 w-full shadow-xl  bg-[--primary] text-white ">
      <div className="container mx-auto flex justify-between items-center lg:px-[100px] py-3 ">
        <h1 className="flex items-center gap-2 hover:scale-105 duration-200 cursor-pointer font-semibold ">
          <span className="bg-white p-3 rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
            <FaKickstarterK />
          </span>
          KOKITO
        </h1>
        <div className="flex items-center gap-3">
          <button className="bg-white hover:scale-105 duration-200 py-1 px-2 font-semibold rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
            Create CV
          </button>
          <button className="flex hover:scale-105 duration-200 items-center gap-1 bg-white py-1 px-2 font-semibold rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
            <span>Login</span>
            <TbLogin2 className='text-[18px] ' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
