import React from "react";

const Expriense = ({ setInput, input }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <label>Job Title:</label>
        <input
          type="text"
          placeholder="Job Title"
          className="p-3 border mb-5 rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              jobTitle: e.target.value,
            })
          }
          value={input.jobTitle}
        />{" "}
        <label>Compayn Title:</label>
        <input
          type="text"
          placeholder="Company Title..."
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              exployer: e.target.value,
            })
          }
          value={input.exployer}
        />
        <label>City Name:</label>
        <input
          type="text"
          placeholder="City Name"
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              cityName: e.target.value,
            })
          }
          value={input.cityName}
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
                  date1: e.target.value,
                })
              }
              value={input.date1}
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
                  date2: e.target.value,
                })
              }
              value={input.date2}
            />
          </span>
        </div>
        <label htmlFor="firstName">Job Description:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Job Title"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              jobDesc: e.target.value,
            })
          }
          value={input.jobDesc}
        />{" "}
      </div>
      <div className="flex flex-col gap-1 pt-[50px]">
        <label htmlFor="firstName">Job Title:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Job Title"
          className="p-3 border mb-5 rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              jobTitle2: e.target.value,
            })
          }
          value={input.jobTitle2}
        />{" "}
        <label>Company Title:</label>
        <input
          type="text"
          placeholder="Company Title..."
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              exployer2: e.target.value,
            })
          }
          value={input.exployer2}
        />{" "}
        <label>City Name:</label>
        <input
          type="text"
          placeholder="City Name"
          className="p-3 border rounded-sm mb-[20px] border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              cityName2: e.target.value,
            })
          }
          value={input.cityName2}
        />{" "}
        <div className="flex gap-6 pb-[20px]">
          <span className="flex gap-1 flex-col">
            <label>Start Date:</label>
            <input
              type="date"
              //   name="firstName"
              //   placeholder="Job Title"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  date3: e.target.value,
                })
              }
              value={input.date3}
            />
          </span>
          <span className="flex gap-1 flex-col">
            <label htmlFor="firstName">End Date:</label>
            <input
              type="date"
              name="firstName"
              placeholder="Job Title"
              className="p-3 border w-[200px] rounded-sm border-[#e6ebf6]"
              onChange={(e) =>
                setInput({
                  ...input,
                  date4: e.target.value,
                })
              }
              value={input.date4}
            />
          </span>
        </div>
        <label htmlFor="firstName">Job Description:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Job Title"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={(e) =>
            setInput({
              ...input,
              jobDesc2: e.target.value,
            })
          }
          value={input.jobDesc2}
        />
      </div>
    </div>
  );
};

export default Expriense;
