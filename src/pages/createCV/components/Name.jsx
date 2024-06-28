import React from "react";

const Name = ({ handleChange, handleFileChange, input }) => {
  return (
    <div className="grid grid-cols-2 gap-[30px]">
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={handleChange}
          value={input.firstName}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={handleChange}
          value={input.lastName}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={handleChange}
          value={input.email}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={handleChange}
          value={input.phone}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="img">Image:</label>
        <input
          type="file"
          name="img"
          className="p-3 border rounded-sm border-[#e6ebf6]"
          onChange={handleFileChange}
          accept="image/png"
        />
      </div>
    </div>
  );
};

export default Name;
