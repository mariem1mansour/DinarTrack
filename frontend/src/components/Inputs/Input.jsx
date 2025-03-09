import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Input = ({ value, placeholder, onChange, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const taggelShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box ">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          onChange={(e) => onChange(e)}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => taggelShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer "
                onClick={() => taggelShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
