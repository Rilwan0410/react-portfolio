import React, { useState } from "react";
import Header from "./components/Header";
import Stacks from "./components/Stacks";

function App() {
  return (
    <>
      <section className="bg-[linear-gradient(90deg,#0f0c29,#302b63,#24243e)] h-screen w-full grid place-items-center fixed overflow-scroll  ">
        <div className="text-center  rounded-xl items-center text-gray-100  ">
          <Header />

          <div className="content flex  w-full justify-between mt-[150px] h-screen px-[100px]">
            <div>
              <div className="left-side top-[9.4rem] sticky flex flex-col items-start">
                <h1 className="text-[5rem] font-[500]">Rilwan Etti</h1>
                <h4 className="text-[2rem] font-[300]">Full-Stack Developer</h4>

                

                <div className="icons mt-[15rem] flex gap-[25px]">
                  <a href="https://github.com/Rilwan0410" target="_blank">
                    {" "}
                    <i className="fa-brands fa-github text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer" />
                  </a>
                  <i className="fa-brands fa-linkedin text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="right-side w-1/2 flex flex-col" id="about">
              <div className="right-content  text-left text-[1.1rem] text-[rgba(255,255,255,0.65)] font-poppins leading-[2rem]  font-[300]">
                My name is Rilwan Etti and I started programming in 2022 because
                I wanted to make a switch in careers. I didn't realize then that
                I had found something that would turn into a passion of mine. I
                genuinely enjoy building upon my skills as a programmer, and
                nothing brings me more satisfaction than bridging the gaps in my
                knowledge as I continue my pursuit to become the best programmer
                I can be. As of today I have successfully completed a{" "}
                <span class="text-white">full-stack bootcamp</span> for the{" "}
                <span class="text-white">University Of Miami</span>.  Below is a full list of the stacks I have working proficiency in.
              </div>


              <Stacks/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
