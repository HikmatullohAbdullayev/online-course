import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import sara from "../../../assets/img/sarah.png";
import GoogleIcon from "../../../assets/icon/GoogleIcon"

const Signup2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    const userData = {
      fullName,
      username,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    console.log("User signed up:", userData);

    navigate("/");
  };
  const userDataChek = JSON.parse(localStorage.getItem("userData"));
  return (
    <section className="flex  justify-between items-start table1005:flex-col table1005:items-center table1005:gap-30 ">
      <div className="flex flex-col items-start ">
        <div className="flex flex-col justify-between items-start  p-20">
          <h2 className="font-600 text-title36 p-8 table1005:text-subTitle24">Students Testimonials</h2>
          <p className="font-500 text-text18 text-text p-14">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>

        <div className=" max-w-[500px] w-full  mx-auto gap-20 mt-80   ">
          <div className="flex flex-col p-20  bg-[#fcfcfd] rounded-6 hover:shadow-md">
            <p className="p-30 bg-white rounded-6  shadow-md">
              The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive, and the interactive
              learning environment was engaging. I highly recommend it!
            </p>
            <div className="flex justify-between items-center mt-16 table:justify-around ">
              <div className="flex justify-between items-center gap-16">
                <img src={sara} alt="img" />
                <h3> Sarah L</h3>
              </div>
              <p className=" p-10 bg-background cursor-pointer rounded-8 hover:bg-primary hover:text-white">
                {" "}
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] w-full border border-shadow p-10  ">
        <p className="font-600 text-title48 text-center table1005:text-title36">Sign Up</p>
        <p className="text-text18 text-center text-text">Create an account to unlock exclusive features.</p>
        <form className="">
          <div className="p-4">
            <label htmlFor="name" className="text-text18 w-full p-8 mb-12">Full Name</label>
            <input className="w-full outline-primary border-primary p-10 rounded-8"
              id="name"
              type="text"
              placeholder="Enter your Name"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-4">
            <label htmlFor="user" className="text-text18 w-full p-8 mb-12">Email</label>
            <input
            className="w-full outline-primary border-primary p-10 rounded-8"
              id="user"
              type="email"
              placeholder="Enter your Email"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="p-4">
            <label htmlFor="password" className="text-text18 w-full p-8 mb-12">Password</label>
            <input
            className="w-full outline-primary border-primary p-10 rounded-8"
              id="password"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center items-center gap-20 p-20">
          <input className="w-20 h-20" type="checkbox" name="chekbox" id="chekbox" />
          <label className=" w-full  " htmlFor="chekbox">I agree with Terms of Use and Privacy Policy</label>
          </div>
          <button className="w-full bg-primary py-18 rounded-6 " onClick={() => handleSignUp()} type="submit">
        
            {userDataChek ? <Navigate to="/" /> : "Sign In"}
          </button>
        </form>

        <p className="w-full px-24 py-20 text-text18 bg-secondary2 flex justify-center items-center gap-20 "> <span><GoogleIcon/></span>Sign Up with Google</p>
        <p className="w-full px-24 py-20 text-text18 text-center">Already have an account? Login</p>
      </div>
    </section>
  );
};

export default Signup2;
