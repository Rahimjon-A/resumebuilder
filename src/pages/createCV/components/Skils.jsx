import React from "react";

const Skils = ({ input, setInput }) => {
  return (
    <div>
      <label>Technikal Skills:</label>
      <input
        type="text"
        placeholder="Technikal Skills:"
        className="p-3 border mb-5 w-full rounded-sm border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            techSkils: e.target.value,
          })
        }
        value={input.techSkils}
      />{" "}
      <label>Soft Skills:</label>
      <input
        type="text"
        placeholder="Soft Skills:"
        className="p-3 border w-full rounded-sm mb-[20px] border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            softSkils: e.target.value,
          })
        }
        value={input.softSkils}
      />
    </div>
  );
};

export default Skils;
