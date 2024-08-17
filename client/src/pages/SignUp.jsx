// import React from 'react'
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import OAuth from "../components/OAuth";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(null);
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });
      
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      // console.log(error);
      setLoading(false);
      setError(error.message || "An unexpected error occurred. Please try again.");
    }
    // console.log(data);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center text-3xl my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className=" border p-3 rounded-sm  "
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className=" border p-3 rounded-sm  "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className=" border p-3 rounded-sm  "
          id="password"
          onChange={handleChange}
        />
        <button
          disabled = {loading}
          type="submit"
          className="bg-slate-700 p-3 text-white rounded-sm uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading...": "Sign Up"}
        </button>
      </form>
      <OAuth />
      <div className="flex gap-2 my-3">
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
