import React, { useState } from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <>
      <section className="bg-[linear-gradient(90deg,#0f0c29,#302b63,#24243e)] h-screen w-full grid place-items-center overflow-scroll ">
        <div className="text-center fixed w-[98%] h-[95%]  rounded-xl items-center text-gray-100 ">
          <Header />

          <div className="content flex  w-full  justify-between mt-[150px] px-[100px]">

            <div className="left flex flex-col items-start">
              <h1 className="text-[6rem] font-[500]">Rilwan Etti</h1>
              <h4 className="text-[2rem] font-[300]">Full-Stack Developer</h4>


              <div className="icons mt-[15rem] flex gap-[25px]">
             <a href="https://github.com/Rilwan0410" target="_blank"> <i className="fa-brands fa-github text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer"/></a>
              <i className="fa-brands fa-linkedin text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer"/>
              </div>

            </div>

            <div className="right w-1/2 overflow-scroll">
              <div className="right-content h-[3000px] text-left text-[1.1rem] text-[rgba(255,255,255,0.65)] font-poppins leading-[2rem] mt-[30px] font-[300]">
                My name is Rilwan Etti and I started programming in 2022 because I wanted to make a switch in careers. I didn't realize then that I had found something that would turn into a passion of mine. I genuinely enjoy building upon my skills as a programmer, and nothing brings me more satisfaction than bridging the gaps in my knowledge as I continue my pursuit to become the best programmer I can be. As of today I have successfully completed a <span class="text-white">full-stack bootcamp</span> for the <span class="text-white">University Of Miami</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default App;
