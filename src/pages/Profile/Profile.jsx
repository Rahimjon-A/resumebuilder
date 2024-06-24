import { IoEye } from 'react-icons/io5';
import Footer from '../../components/Footer';
import { BiSolidEdit } from 'react-icons/bi';

const Profile = () => {
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-64px)] ">
      <div className=" container mx-auto px-4 xl:px-[100px] mt-[40px] ">
        <div className=" grid grid-cols-1 md:grid-cols-2 ">

          <div className="grid grid-cols-1 items-center lg:grid-cols-[2fr_3fr] gap-4  md:items-start mb-[30px]  ">
            
            <div className="flex  items-center md:items-start lg:sticky mb-[30px] top-[104px] flex-col">
              <img src="./user.jpg" alt="" className="w-[200px] h-[200px] rounded-md mb-[20px] " />
              <p className=" font-bold text-[24px] ">Rahimjond Abduraximov </p>
            </div>

            <div className=" grid justify-center md:justify-start lg:sticky top-[104px]">
              <p className=" text-[32px] font-bold  text-[--text]"> Account Details </p>

              <div className="flex gap-4 text-[22px] ">
                <p className="font-bold ">Name:</p>
                <p className="text-[20px] "> Jeck's Wife </p>
              </div>
              <div className="flex gap-4 text-[22px] ">
                <p className="font-bold ">Surname:</p>
                <p className="text-[20px] "> Jeck's Surname </p>
              </div>
              <div className="flex gap-4 text-[22px] ">
                <p className="font-bold ">Email:</p>
                <p className="text-[20px] "> jeckswife@gmail.com </p>
              </div>
              <div className="flex gap-4 text-[22px] ">
                <p className="font-bold ">Phone:</p>
                <p className="text-[20px] "> +998 91 110 76 97 </p>
              </div>
              <div className="flex gap-4 text-[22px] ">
                <p className="font-bold ">Company:</p>
                <p className="text-[20px] "> Microsoft ORC </p>
              </div>
              <div className="flex text-[22px] mt-[30px] ">
                <button className="bg-[--extra] px-5 hover:scale-105 duration-200 rounded-full text-white py-1 [box-shadow:inset_0_0_0_2px_#fff,_0_0_0_2px_#0367A6] ">
                  Create New Resume
                </button>
              </div>
            </div>
          </div>

          <div className=" mb-[40px] ">
            <p className="text-center mb-[10px] text-[--text] text-[40px] font-bold border-b-[3px] border-[--text] ">
              User Resumes
            </p>

            <div className="p-[10px] grid grid-cols-1 sm:grid-cols-2 gap-[30px] ">

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
