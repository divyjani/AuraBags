import React from "react";
import { API_KEY } from "../../../config/config";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import { useEffect } from "react";
import '../../assets/Auths/Login.css'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const handlePasswordReset = async () => {
    if (!resetEmail) return alert("Please enter your registered email.");
    
    await axios.post(`${API_KEY}/user/forgot-password`, { email: resetEmail })
 .then(() => {

        setShowResetPopup(false);
        setShowConfirmPopup(true);
      })
      .catch(err => console.error("Error sending reset link:", err));
  };

  

     const [token,setToken]=useState('');     

  const onSubmit = async (data) => {
    console.log("button was clicked");
   const response= await axios.post(`${API_KEY}/user/login`,data,{
    withCredentials: true,
   })    
        .then(response => {
    const token = response.data.token;
    localStorage.setItem("authToken", token); // Store token
    console.log("Token stored:", token);
    setToken(token);
     console.log(response.data);
     if (response.data.redirectTo) {
      window.location.href = response.data.redirectTo; // Manual redirect
    }
})
.catch(err => console.error("Error logging in:", err));
   
  };

  return (
    <>
    <video src="/BagVid2.mp4" type="video/mp4" autoPlay loop muted className="login-video" > </video>
    <div className="flex justify-end items-start h-screen p-10  bg-gray-100"> 
      <div className="bg-white px-10 py-8  rounded-xl shadow-lg w-[25rem] mt-10 mr-7 ">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
              className="w-full border p-2 rounded mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "At least 6 characters" } })}
              className="w-full border p-2 rounded mt-1"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>


          <div className="w-full flex justify-center">
          <button type="submit" className="w-1/2 bg-blue-500 text-white p-2 mt-3 rounded hover:bg-blue-600 hover:cursor-pointer ">Login</button>
</div>

        </form>

        {/* Register Link */}
        <div className="w-full flex justify-between items-center mt-4">
          <button onClick={() => setShowResetPopup(true)} className="text-orange-400 flex gap-1 items-center hover:text-orange-700">
            <FaUnlockAlt /> Forgot Password
          </button>
          <Link to="/signup" className="text-blue-400 flex gap-1 items-center hover:text-blue-700">
            <FaUserAlt /> Register here
          </Link>
        </div>
      </div>

      {/* Reset Password Popup */}
      {showResetPopup && (
  <div className="fixed  flex justify-center items-center inset-0 bg-black  opacity-85">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[30rem] text-center 
        fixed top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100">
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      <input type="email" placeholder="Enter your registered email"
        className="border p-3 w-full rounded"
        value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
      <div className="mt-6 flex gap-4 justify-around">
        <button className="bg-blue-500 text-white py-3 px-6 min-w-1/3 rounded-lg hover:bg-blue-600 opacity-100" onClick={handlePasswordReset}>
          Send Reset Link
        </button>
        <button className="bg-gray-400 text-white py-3 px-3 w-1/3 rounded-lg hover:bg-gray-500 opacity-100" onClick={() => setShowResetPopup(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {/* Confirmation Popup */}
      {showConfirmPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reset Link Sent!</h2>
            <p>Check your registered email for the password reset link.</p>
            <button className="mt-4 bg-green-500 text-white p-2 rounded" onClick={() => setShowConfirmPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
   
    </>
  );
};


     

export default Login;