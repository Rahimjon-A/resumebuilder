import React from "react";

const Resume = ({ input }) => {
  return (
    <div className="bg-[#ffffff] p-[30px] border">
      <div className="w-[400px] h-[1px] bg-[#343434]" />
      <div className="flex justify-between">
        <div className="">
          <div className="flex gap-3">
            <h3 className="pt-[20px] text-[30px] uppercase font-bold">
              {input.firstName.length > 0 ? input.firstName : "YOUR"}
            </h3>
            <h3 className="pt-[20px] text-[30px] uppercase font-bold">
              {input.lastName.length > 0 ? input.lastName : "NAME"}
            </h3>
          </div>
          <div className="pt-[20px] flex gap-[50px]">
            <span>
              <h3 className="text-[13px] text-[#a9abb1]">EMAIL</h3>
              <p className="text-[14px] text-[#a9abb1]">
                {input.email.length > 0 ? input.email : "example@example.com"}
              </p>
            </span>
            <span>
              <h3 className="text-[13px] text-[#a9abb1]">PHONE</h3>
              <p className="text-[14px] text-[#a9abb1]">
                {input.phone.length > 0 ? "+" : "+99 895 622 00 00"}{" "}
                {input.phone}
              </p>
            </span>
          </div>
        </div>
        {input.img && (
          <div className="pt-[20px]">
            <img
              src={input.img}
              alt="Uploaded"
              className="w-[140px] h-[160px] object-cover"
            />
          </div>
        )}
      </div>
      <div className="pt-[30px]">
        <h2 className="font-bold text-[20px] pb-3">Works and Experience</h2>
        <div className="">
          <div className="flex gap-2 ">
            <div className="w-[7px] h-[7px] mt-[12px]  bg-[#999999]" />
            <div className="flex w-full items-start justify-between">
              <span>
                <h2 className="text-[20px] font-semibold text-[#2d2d30]">
                  {input.jobTitle.length > 0
                    ? input.jobTitle
                    : "Your job title"}
                </h2>
                <span className="flex gap-1 pt-2">
                  <p className="text-[16px] font-semibold text-[#555758]">
                    {input.exployer.length > 0
                      ? input.exployer
                      : "Your employer"}
                  </p>{" "}
                  {input.exployer.length > 0 ? "|" : ""}
                  <p>
                    {input.cityName.length > 0 ? input.cityName : "City Name"}
                  </p>
                </span>
                <p className="text-[14px] pt-1.5 font-medium text-[#81858a]">
                  {input.jobDesc.length > 0
                    ? input.jobDesc
                    : "Your job description"}
                </p>
              </span>
              <span className="flex gap-1">
                <p className="text-[14px] font-semibold text-[#b2b5b9]">
                  {input.date1.length > 0 ? "" : "12.12.2012"}
                </p>{" "}
                <p className="text-[14px] font-semibold text-[#b2b5b9]">-</p>
                <p className="text-[15px] font-semibold text-[#b2b5b9]">
                  {input.date2.length > 0 ? "" : "12.12.2022"}
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* <div className=""> */}
        {input.jobTitle2.length > 0 && (
          <div className="flex gap-4 pt-[30px]">
            {input.jobTitle2.length > 0 ? (
              <div className="w-[10px] h-[10px] mt-[9px]  bg-[#999999]" />
            ) : (
              ""
            )}
            <div className="flex w-full items-start justify-between">
              <span>
                <h2 className="text-[20px] font-semibold text-[#2d2d30]">
                  {input.jobTitle2}
                </h2>
                <span className="flex gap-1 pt-2">
                  <p className="text-[16px] font-semibold text-[#555758]">
                    {input.exployer2}
                  </p>
                  {input.cityName2.length > 0 ? "|" : ""}
                  <p>{input.cityName2}</p>
                </span>
                <p className="text-[14px] pt-1.5 font-medium text-[#81858a]">
                  {input.jobDesc2}
                </p>
              </span>
              <span className="flex gap-1">
                <p className="text-[14px] font-semibold text-[#b2b5b9]">
                  {input.date3}
                </p>{" "}
                <p className="text-[14px] font-semibold text-[#b2b5b9]">-</p>
                <p className="text-[15px] font-semibold text-[#b2b5b9]">
                  {input.date4}
                </p>
              </span>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>
      <div className="pt-[30px]">
        <h2 className="font-bold text-[20px] pb-3">Education</h2>
        <div className="">
          <div className="flex gap-2">
            <div className="w-[7px] h-[7px] mt-[9px]  bg-[#999999]" />
            <div className="flex w-full items-start justify-between">
              <span>
                <h2 className="text-[20px] font-semibold text-[#2d2d30]">
                  {input.schoolTitle1.length > 0
                    ? input.schoolTitle1
                    : "Your school title"}
                </h2>
                <span className="flex gap-1 pt-2">
                  <p className="text-[16px] font-semibold text-[#555758]">
                    {input.profession1.length > 0
                      ? input.profession1
                      : "Your profession"}
                  </p>
                  |
                  <p>
                    {input.schoolCity1.length > 0
                      ? input.schoolCity1
                      : "Your school city"}
                  </p>
                </span>
                <p className="text-[14px] pt-1.5 font-medium text-[#81858a]">
                  {input.eduDesc.length > 0
                    ? input.eduDesc
                    : "Your educational description"}
                </p>
              </span>
              <span className="flex gap-1">
                <p className="text-[14px] font-semibold text-[#b2b5b9]">
                  {input.schooldate1.length > 0
                    ? input.schooldate1
                    : "Your school start date"}
                </p>{" "}
                <p className="text-[14px] font-semibold text-[#b2b5b9]">-</p>
                <p className="text-[15px] font-semibold text-[#b2b5b9]">
                  {input.schooldate2.length > 0
                    ? input.schooldate2
                    : "Your school end date"}
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* <div className=""> */}
        {input.schoolTitle2.length > 0 && (
          <div className="flex gap-4 pt-[30px]">
            {input.schoolTitle2.length > 0 ? (
              <div className="w-[10px] h-[10px] mt-[9px]  bg-[#999999]" />
            ) : (
              ""
            )}
            <div className="flex w-full items-start justify-between">
              <span>
                <h2 className="text-[20px] font-semibold text-[#2d2d30]">
                  {input.schoolTitle2}
                </h2>
                <span className="flex gap-1 pt-2">
                  <p className="text-[16px] font-semibold text-[#555758]">
                    {input.profession2}
                  </p>
                  {input.schoolCity2.length > 0 ? "|" : ""}
                  <p>{input.schoolCity2}</p>
                </span>
                <p className="text-[14px] pt-1.5 font-medium text-[#81858a]">
                  {input.eduDesc2}
                </p>
              </span>
              <span className="flex gap-1">
                <p className="text-[14px] font-semibold text-[#b2b5b9]">
                  {input.schooldate3}
                </p>{" "}
                <p className="text-[14px] font-semibold text-[#b2b5b9]">-</p>
                <p className="text-[15px] font-semibold text-[#b2b5b9]">
                  {input.schooldate4}
                </p>
              </span>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>
      <div className="pt-[30px]">
        <h2 className="font-bold text-[20px] pb-3">Skills</h2>
        <span className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px]   bg-[#999999]" />
            <h2>Technical skills:</h2>{" "}
            <p className="w-[80%]">
              {input.techSkils.length > 0 ? input.techSkils : "HTML,CSS,JS"}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px]  bg-[#999999]" />
            <h2>Soft skills:</h2>{" "}
            <p>
              {input.softSkils.length > 0
                ? input.softSkils
                : "Communication, Leadership, Adaptability, Problem solving."}
            </p>
          </div>
        </span>
      </div>
      <div className="">
        <h2 className="font-bold text-[20px] pt-5 pb-3">Languages</h2>
        <div className="flex gap-2 items-center">
          <div className="w-[7px] h-[7px]   bg-[#999999]" />
          <p className="w-[80%] capitalize">
            {input.language1.length > 0 ? input.language1 : "English"}
          </p>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <div className="w-[7px] h-[7px]   bg-[#999999]" />
          <p className="w-[80%] capitalize">
            {input.language2.length > 0 ? input.language2 : "Spanish"}
          </p>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <div className="w-[7px] h-[7px]   bg-[#999999]" />
          <p className="w-[80%] capitalize">
            {input.language3.length > 0 ? input.language3 : "Russion"}
          </p>
        </div>{" "}
        <div className="flex gap-2 items-center">
          {input.language4.length > 0 ? (
            <div className="w-[7px] h-[7px]   bg-[#999999]" />
          ) : (
            ""
          )}
          <p className="w-[80%] capitalize">{input.language4}</p>
        </div>{" "}
        <div className="flex gap-1.5 items-center">
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
  );
};

export default Resume;
