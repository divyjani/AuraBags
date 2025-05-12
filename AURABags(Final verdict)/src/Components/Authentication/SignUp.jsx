import React from "react";
import { API_KEY } from "../../../config/config";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   
  const navigate=useNavigate();
  

  const onSubmit = async(data) => {
    let response=await axios.post(`${API_KEY}/user/create`,data,
      {
        withCredentials: true,
      }
    );
     navigate('/login');
    console.log(response.data);
  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white px-14 py-8 rounded-lg shadow-md w-[25rem]">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required", minLength: { value: 3, message: "At least 3 characters" } })}
              className="w-full border p-2 rounded mt-1"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

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

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;