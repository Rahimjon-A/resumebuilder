import React, { useState } from "react";
import Name from "./Name";
import Resume from "./Resume";
import Sitebar from "./Sitebar";
import Expriense from "./Expriense";
import Education from "./Education";
import Skils from "./Skils";
import Languages from "./Languages";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/CardSlice";
import { Link } from "react-router-dom";
// import { addToCart } from "../redux/CardSlice";

const Table = () => {
  const [sidebar, setSidebar] = useState(1);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    img: "",
    jobTitle: "",
    exployer: "",
    cityName: "",
    date1: "",
    date2: "",
    jobDesc: "",
    jobTitle2: "",
    cityName2: "",
    exployer2: "",
    date3: "",
    date4: "",
    jobDesc2: "",
    schoolTitle1: "",
    schoolTitle2: "",
    profession1: "",
    profession2: "",
    schooldate1: "",
    schooldate2: "",
    schooldate3: "",
    schooldate4: "",
    schoolCity1: "",
    schoolCity2: "",
    eduDesc: "",
    eduDesc2: "",
    techSkils: "",
    softSkils: "",
    language1: "",
    language2: "",
    language3: "",
    language4: "",
    language5: "",
    language6: "",
  });

  const validateInput = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "jobTitle",
      "exployer",
      "cityName",
      "date1",
      "date2",
      "jobDesc",
    ];

    for (let field of requiredFields) {
      if (!input[field]) {
        return false;
      }
    }

    return true;
  };

  const onclick = (input) => {
    if (validateInput()) {
      dispatch(addToCart(input));
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg")
    ) {
      const fileUrl = URL.createObjectURL(file);
      setInput({
        ...input,
        img: fileUrl,
      });
    } else {
      alert("Please upload a PNG or JPG file!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="flex">
      <div className="bg-[#0367a6] h-screen w-[80px] flex flex-col justify-center items-center py-4">
        <Sitebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <div className="w-1/2 h-[100vh] px-10 py-5 overflow-x-scroll flex flex-col gap-3">
        {sidebar === 1 && (
          <Name
            handleChange={handleChange}
            input={input}
            handleFileChange={handleFileChange}
          />
        )}
        {sidebar === 2 && <Expriense input={input} setInput={setInput} />}
        {sidebar === 3 && <Education input={input} setInput={setInput} />}
        {sidebar === 4 && <Skils input={input} setInput={setInput} />}
        {sidebar === 5 && <Languages input={input} setInput={setInput} />}
      </div>
      <div className="w-1/2 h-[100vh] p-[30px] bg-[#f9fafd]">
        <Resume input={input} />
        <div className="flex justify-end pt-3">
          <Link to={'/home'}
            onClick={() => onclick(input)}
            className="uppercase py-2 px-3 font-bold rounded-lg bg-[#0367a6] text-[#fff]"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
