import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <section className="bg-[linear-gradient(90deg,#0f0c29,#302b63,#24243e)] h-screen w-full grid place-items-center ">
        <div className="text-center fixed bg-[rgba(0,0,0,0.15)] w-[98%] h-[95%]  rounded-xl items-center text-gray-100 ">
          <Header />

          <div className="content flex  w-full h-full justify-between mt-[150px] px-[150px]">

            <div className="left flex flex-col items-start">
              <h1 className="text-[4rem] font-bold">Rilwan Etti</h1>
              <h4 className="text-[1.2rem] font-[300]">Full-Stack Developer</h4>
              <div className="icons"></div>
            </div>

            <div className="right w-1/2">Content</div>

          </div>

        </div>
      </section>
    </>
  );
}

export default App;
