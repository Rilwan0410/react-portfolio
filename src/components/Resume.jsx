import React from 'react'

export default function Resume() {
  return (
<div className="resume mt-[80px]" id="resume">

    <div className="card flex justify-start gap-[25px] font-montserrat mt-[150px] "> 
    {/* bg-[rgba(0,0,0,0.1)] rounded-md p-[30px] */}

                <div className="time-frame capitalize whitespace-nowrap text-gray-400 text-[0.8rem] font-[600]">SEPT 2023 <div className=' align-middle mx-[2px] w-[12px] h-[2px] inline-block bg-gray-400'></div> MAR 2024</div>

                <div className="experience-details flex items-start flex-col">
                  <h1 className="font-[600]" >University Of Miami Full-Stack Bootcamp</h1>
                  <h4 className="font-[400] text-gray-400 flex mt-[2px]">Student</h4>
                  <p className="text-left font-[400] text-gray-200 mt-[10px]">24 week, full-stack course that focused on teaching the fundamentals of the Mern stack.</p>

                  <div className="technologies-used mt-[20px] flex flex-wrap gap-[10px] text-gray-800">
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">HTML</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">CSS</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Javascript</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">React</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">MySQL</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">MongoDB</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Express</div>
                    <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Git</div>
                  </div>
                </div>
                </div>

              </div>

  )
}
