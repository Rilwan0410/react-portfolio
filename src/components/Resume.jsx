import React from "react";

export default function Resume({
  job,
  role,
  description,
  stacksUsed,
  startDate,
  endDate,
}) {
  return (
   
      <div className="card flex justify-start gap-[25px] font-montserrat  ">
        <div className="time-frame capitalize whitespace-nowrap text-gray-400 text-[0.8rem] font-[600]">
          {startDate}{" "}
          <div className=" align-middle mx-[2px] w-[12px] h-[2px] inline-block bg-gray-400"></div>{" "}
          {endDate}
        </div>

        <div className="experience-details flex items-start flex-col">
          <h1 className="font-[600]">{job}</h1>
          <h4 className="font-[500] text-gray-400 flex mt-[3px]">{role}</h4>
          <p className="text-left font-[400] text-gray-200 mt-[10px]">
            {description}
          </p>

          <div className="technologies-used mt-[20px] flex flex-wrap gap-[10px] text-gray-800">
            {stacksUsed.map((stack) => {
              return (
                <div className="bg-[rgba(255,255,255,0.5)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">
                  {stack}
                </div>
              );
            })}
          </div>
        </div>
      </div>

  );
}
