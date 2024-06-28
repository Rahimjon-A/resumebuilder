import React from "react";

const Education = ({ setInput, input }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <label>School Name:</label>
        <input
          type="text"
          placeholder="School Name"
          className="p-3 border mb-5 rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              schoolTitle1: e.target.value,
            })
          }
          value={input.schoolTitle1}
        />{" "}
        <label>Profession:</label>
        <input
          type="text"
          placeholder="Profession "
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              profession1: e.target.value,
            })
          }
          value={input.profession1}
        />
        <label>City Name:</label>
        <input
          type="text"
          placeholder="City Name"
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              schoolCity1: e.target.value,
            })
          }
          value={input.schoolCity1}
        />
        <div className="flex gap-6 pb-[20px]">
          <span className="flex gap-1 flex-col">
            <label>Start date:</label>
            <input
              type="date"
              //   placeholder="Job Title"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  schooldate1: e.target.value,
                })
              }
              value={input.schooldate1}
            />
          </span>
          <span className="flex gap-1 flex-col">
            <label>End Date:</label>
            <input
              type="date"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  schooldate2: e.target.value,
                })
              }
              value={input.schooldate2}
            />
          </span>
        </div>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              eduDesc: e.target.value,
            })
          }
          value={input.eduDesc}
        />{" "}
      </div>
      <div className="flex flex-col gap-1 pt-[50px]">
        <label>School Title:</label>
        <input
          type="text"
          placeholder="School Title"
          className="p-3 border mb-5 rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              schoolTitle2: e.target.value,
            })
          }
          value={input.schoolTitle2}
        />{" "}
        <label>Profession:</label>
        <input
          type="text"
          placeholder="Profession"
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              profession2: e.target.value,
            })
          }
          value={input.profession2}
        />{" "}
        <label>City Name:</label>
        <input
          type="text"
          placeholder="City Name"
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              schoolCity2: e.target.value,
            })
          }
          value={input.schoolCity2}
        />{" "}
        <div className="flex gap-6 pb-[20px]">
          <span className="flex gap-1 flex-col">
            <label>Start Date:</label>
            <input
              type="date"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  schooldate3: e.target.value,
                })
              }
              value={input.schooldate3}
            />
          </span>
          <span className="flex gap-1 flex-col">
            <label htmlFor="firstName">End Date:</label>
            <input
              type="date"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  schooldate4: e.target.value,
                })
              }
              value={input.schooldate4}
            />
          </span>
        </div>
        <label htmlFor="firstName">Description:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Description"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              eduDesc2: e.target.value,
            })
          }
          value={input.eduDesc2}
        />
      </div>
    </div>
  );
};

export default Education;
