import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../../config/config";

import { useSearchParams } from "react-router-dom";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [searchParams] = useSearchParams(); // Extract query params
  const token = searchParams.get("token"); // Get token value

   const[tokenData,setTokenData]=useState('');

  // const tokenretrival = async () => {
  //   try {
  
  //   const response = await axios.get(`${API_KEY}/user/reset-password/`);
  //   console.log(token);
  //   console.log(response.data);
  //   setTokenData(response.data);
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  const handleReset = async () => {
    try {
      const response = await axios.post(`${API_KEY}/user/reset-password`, { password,token });
      alert(response.data.msg); // Show success message
      console.log(response.data);
    } 
    catch (error) {
      alert("Error resetting password!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center  w-full ">
      <div className="bg-neutral-100 p-6 rounded-lg shadow-md w-[90%] flex flex-col mx-15 mt-12">
        <h1 className=" font-bold mx-2 my-6 text-3xl">Reset Password</h1>
       <div className="flex flex-col py-2">
        {/* <input
          type="password"
          placeholder="Enter new password"
          className="w-2/3 border px-2 py-3 rounded my-6"
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <input
          type="password"
          placeholder="Enter new password"
          className="w-2/3 border px-2 py-3 rounded my-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button
          className="py-2 px-2 bg-blue-500 text-white mt-4 w-1/7 rounded hover:bg-blue-600"
          onClick={handleReset}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;