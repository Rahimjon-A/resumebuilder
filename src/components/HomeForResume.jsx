import React from "react";

const HomeForResume = ({ input }) => {
  return (
    <div>
      <div className="bg-[#ffffff] p-[20px] ">
        <div className="w-[50px] h-[1px] bg-[#343434]" />
        <div className="flex justify-between">
          <div className="">
            <div className="flex gap-1.5">
              <h3 className="pt-[2px] text-[10px] uppercase font-bold">
                {input.firstName}
              </h3>
              <h3 className="pt-[2px] text-[10px] uppercase font-bold">
                {input.lastName}
              </h3>
            </div>
            <div className="pt-[2px] flex gap-[10px]">
              <span>
                <h3 className="text-[6px] text-[#a9abb1]">EMAIL</h3>
                <p className="text-[6px] text-[#a9abb1]">{input.email}</p>
              </span>
              <span>
                <h3 className="text-[6px] text-[#a9abb1]">PHONE</h3>
                <p className="text-[6px] text-[#a9abb1]">
                  {input.phone.length > 0 ? "+" : ""} {input.phone}
                </p>
              </span>
            </div>
          </div>
          {input.img && (
            <div className="pt-[15px]">
              <img
                src={input.img}
                alt="Uploaded"
                className="w-[40px] h-[30px] object-cover"
              />
            </div>
          )}
        </div>
        <div className="pt-[10px]">
          <h2 className="font-bold text-[7px] ">Works and Experience</h2>
          <div className="">
            <div className="flex gap-1">
              <div className="w-[4px] h-[4px] mt-[2px]  bg-[#999999]" />
              <div className="flex w-full items-start justify-between">
                <span>
                  <h2 className="text-[5px] font-semibold text-[#2d2d30]">
                    {input.jobTitle}
                  </h2>
                  <span className="flex gap-1  ">
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.exployer}
                    </p>
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.cityName}
                    </p>
                  </span>
                  <p className="text-[6px] w-[90%]  font-medium text-[#81858a]">
                    {input.jobDesc}
                  </p>
                </span>
                <span className="flex gap-1 w-[89px]">
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">
                    {input.date1}
                  </p>
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">-</p>
                  <p className="text-[5px] font-semibold text-[#b2b5b9]">
                    {input.date2}
                  </p>
                </span>
              </div>
            </div>
          </div>
          {input.jobTitle2.length > 0 && (
            <div className="flex gap-1 pt-[5px]">
              {input.jobTitle2.length > 0 ? (
                <div className="w-[4px] h-[4px] mt-[4px]  bg-[#999999]" />
              ) : (
                ""
              )}
              <div className="flex w-full items-start justify-between">
                <span>
                  <h2 className="text-[5px] font-semibold text-[#2d2d30]">
                    {input.jobTitle2}
                  </h2>
                  <span className="flex gap-1 ">
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.exployer2}
                    </p>
                    {/* {input.cityName2.length > 0 ? "|" : ""} */}
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.cityName2}
                    </p>
                  </span>
                  <p className="text-[4px]  font-medium text-[#81858a]">
                    {input.jobDesc2}
                  </p>
                </span>
                <span className="flex gap-1 w-[89px]">
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">
                    {input.date3}
                  </p>{" "}
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">-</p>
                  <p className="text-[5px] font-semibold text-[#b2b5b9]">
                    {input.date4}
                  </p>
                </span>
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
        <div className="pt-[10px]">
          <h2 className="font-bold text-[7px]">Education</h2>
          <div className="">
            <div className="flex gap-1">
              {input.schoolTitle1.length > 0 ? (
                <div className="w-[4px] h-[4px] mt-[2px]  bg-[#999999]" />
              ) : (
                ""
              )}
              <div className="flex w-full items-start justify-between">
                <span>
                  <h2 className="text-[6px] font-semibold text-[#2d2d30]">
                    {input.schoolTitle1}
                  </h2>
                  <span className="flex">
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.profession1}
                    </p>{" "}
                    {/* {input.schoolCity1.length > 0 ? "|" : ""} */}
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.schoolCity1}
                    </p>
                  </span>
                  <p className="text-[4px] w-[80%]  font-medium text-[#81858a]">
                    {input.eduDesc}
                  </p>
                </span>
                <span className="flex gap-1 w-[89px]">
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">
                    {input.schooldate1}
                  </p>{" "}
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">-</p>
                  <p className="text-[5px] font-semibold text-[#b2b5b9]">
                    {input.schooldate2}
                  </p>
                </span>
              </div>
            </div>
          </div>
          {/* <div className=""> */}
          {input.schoolTitle2.length > 0 && (
            <div className="flex gap-1 pt-[3px]">
              {input.schoolTitle2.length > 0 ? (
                <div className="w-[4px] h-[4px] mt-[4px]  bg-[#999999]" />
              ) : (
                ""
              )}
              <div className="flex w-full items-start justify-between">
                <span>
                  <h2 className="text-[6px] font-semibold text-[#2d2d30]">
                    {input.schoolTitle2}
                  </h2>
                  <span className="flex gap-1 ">
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.profession2}
                    </p>
                    {/* {input.schoolCity2.length > 0 ? "|" : ""} */}
                    <p className="text-[6px] font-semibold text-[#555758]">
                      {input.schoolCity2}
                    </p>
                  </span>
                  <p className="text-[4px] w-[80%]  font-medium text-[#81858a]">
                    {input.eduDesc2}
                  </p>
                </span>
                <span className="flex gap-1 w-[89px]">
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">
                    {input.schooldate3}
                  </p>{" "}
                  <p className="text-[4px] font-semibold text-[#b2b5b9]">-</p>
                  <p className="text-[5px] font-semibold text-[#b2b5b9]">
                    {input.schooldate4}
                  </p>
                </span>
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
        <div className="pt-[10px]">
          <h2 className="font-bold text-[7px] ">Skills</h2>
          <span className="flex  flex-col">
            <div className="flex  gap-1 items-center">
              {input.techSkils.length > 0 ? (
                <div className="w-[3px] h-[3px]   bg-[#999999]" />
              ) : (
                ""
              )}
              <h2 className="text-[6px] w-[45px]">Technical skills:</h2>{" "}
              <p className="w-[80%] text-[4px]">{input.techSkils}</p>
            </div>
            <div className="flex gap-1.5 items-center">
              {input.softSkils.length > 0 ? (
                <div className="w-[3px] h-[3px]    bg-[#999999]" />
              ) : (
                ""
              )}
              <h2 className="text-[6px] w-[27px]">Soft skills:</h2>{" "}
              <p className="text-[4px]">{input.softSkils}</p>
            </div>
          </span>
        </div>
        <div className="">
          <h2 className="font-bold text-[7px] pt-[10px] pb-[5px] ">
            Languages
          </h2>
          <div className="flex gap-1 items-center">
            {input.language1.length > 0 ? (
              <div className="w-[3px] h-[3px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] text-[6px] capitalize">{input.language1}</p>
          </div>{" "}
          <div className="flex gap-1 items-center">
            {input.language2.length > 0 ? (
              <div className="w-[3px] h-[3px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] text-[6px] capitalize">{input.language2}</p>
          </div>{" "}
          <div className="flex gap-1 items-center">
            {input.language3.length > 0 ? (
              <div className="w-[3px] h-[3px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] text-[6px] capitalize">{input.language3}</p>
          </div>{" "}
          <div className="flex gap-1 items-center">
            {input.language4.length > 0 ? (
              <div className="w-[3px] h-[3px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] text-[6px] capitalize">{input.language4}</p>
          </div>{" "}
          <div className="flex gap-1 items-center">
            {input.language5.length > 0 ? (
              <div className="w-[7px] h-[7px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] capitalize">{input.language5}</p>
          </div>{" "}
          <div className="flex gap-1.5 items-center">
            {input.language6.length > 0 ? (
              <div className="w-[7px] h-[7px]   bg-[#999999]" />
            ) : (
              ""
            )}
            <p className="w-[80%] capitalize">{input.language6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForResume;
