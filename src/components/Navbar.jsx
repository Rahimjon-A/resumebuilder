import { FaKickstarterK, FaUserAlt } from 'react-icons/fa';
import { TbLogin2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = true;

  return (
    <nav className=" fixed z-30 top-0 w-full shadow-xl  bg-[--primary] text-white ">
      <div className="container px-4 mx-auto flex justify-between items-center xl:px-[100px] py-3 ">
        <Link to={'/home'}>
          <h1 className="flex items-center gap-2 hover:scale-105 duration-200 cursor-pointer font-semibold ">
            <span className="bg-white p-3 rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
              <FaKickstarterK />
            </span>
            KOKITO
          </h1>
        </Link>
        <div className="flex items-center gap-3">

         <Link to={"/create"}>
         <button className="bg-white hidden sm:block hover:scale-105 duration-200 py-1 px-3 font-semibold rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
            Create CV
          </button>

         <span className="bg-white  sm:hidden hover:scale-105 duration-200 py-1 px-3 text-[18px] font-black rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
            + CV
          </span>
         </Link>

          {user ? (
            <>
              <Link to={'/profile'}>
                <button className="flex hover:scale-105 duration-200 items-center gap-2 bg-white py-1 px-3 font-semibold rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
                  <span className=' hidden sm:block '>Profile</span>
                  <FaUserAlt className="sm:text-[14px] text-[18px] my-1 mx-2 " />
                </button>
              </Link>
              <div className='flex items-center gap-3'>
              <span className=' hidden md:block '> Jeck's Wife </span>
                <span>
                  <img
                    src="./user.jpg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover "
                  />
                </span>
              </div>
            </>
          ) : (
            <Link to={'/signup'}>
              <button className="flex hover:scale-105 duration-200 items-center gap-1 bg-white py-1 px-3 font-semibold rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
                <span>Login</span>
                <TbLogin2 className="text-[18px] " />
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
