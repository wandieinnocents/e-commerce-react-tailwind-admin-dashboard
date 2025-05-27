import InputField from "components/fields/InputField";
import React, { useState } from "react"; // Import useState
import axios from "axios";
import { toast } from 'react-toastify';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("signu");

    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:4001/api/auth/register",
        formData
      );
      console.log("Signup successful:", response.data);
      // alert("Signup successful!");
      toast.success("Signup successful!");
      // Handle successful signup (e.g., redirect to login, show success message)


    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || error.response?.data?.error || "Signup failed. Please try again.";
      // alert("Signup failed: " + errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex h-full w-full min-h-screen items-center justify-center  md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center lg:pl-0 xl:max-w-[420px] ">
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white text-center">
            Sign Up
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600 text-center">
            Enter your email and password to sign up!
          </p>


          <input
            type="text"
            id="username"
            placeholder="wandie"
            value={formData.username}
            onChange={handleChange}
            className="mb-3 border rounded px-3 py-2 w-full"
          />


          <input
            type="text"
            id="email"
            placeholder="wandie@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="mb-3 border rounded px-3 py-2 w-full"
          />

          {/* Password */}

          <input
            type="password"
            id="password"
            placeholder="wandie@gmail.com"
            value={formData.password}
            onChange={handleChange}
            className="mb-3 border rounded px-3 py-2 w-full"
          />

          <button
            onClick={handleSubmit} // Call handleSubmit on button click
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
              Already have an account ?
            </span>
            <a
              href="/auth/sign-in"
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}