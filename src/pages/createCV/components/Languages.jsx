import React from "react";

const Languages = ({ input, setInput }) => {
  return (
    <div>
      <label>Language 1:</label>
      <input
        type="text"
        placeholder="language 1:"
        className="p-3 border mb-5 w-full rounded-sm border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language1: e.target.value,
          })
        }
        value={input.language1}
      />{" "}
      <label>Language 2:</label>
      <input
        type="text"
        placeholder="language 2"
        className="p-3 border w-full rounded-sm mb-[20px] border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language2: e.target.value,
          })
        }
        value={input.language2}
      />
      <label>Language 3:</label>
      <input
        type="text"
        placeholder="language 3"
        className="p-3 border mb-5 w-full rounded-sm border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language3: e.target.value,
          })
        }
        value={input.language3}
      />{" "}
      <label>Language 4:</label>
      <input
        type="text"
        placeholder="language 4:"
        className="p-3 border w-full rounded-sm mb-[20px] border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language4: e.target.value,
          })
        }
        value={input.language4}
      />{" "}
      <label>Language 5:</label>
      <input
        type="text"
        placeholder="language 5"
        className="p-3 border mb-5 w-full rounded-sm border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language5: e.target.value,
          })
        }
        value={input.language5}
      />{" "}
      <label>Language 6:</label>
      <input
        type="text"
        placeholder="language 6"
        className="p-3 border w-full rounded-sm mb-[20px] border-[#e6ebf6]"
        onChange={(e) =>
          setInput({
            ...input,
            language6: e.target.value,
          })
        }
        value={input.language6}
      />
    </div>
  );
};

export default Languages;
