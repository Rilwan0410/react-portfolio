import React from "react";
import techBlogImg from "../assets/project-imgs/tech-blog-img.png";
import expressNoteTaker from "../assets/project-imgs/express-note-taker.png";
import CLIEmployeeTracker from "../assets/project-imgs/cli-employee-tracker.png";
import passwordGenerator from "../assets/project-imgs/password-generator.png";

export default function Project({
  title,
  description,
  imgURL,
  stacksUsed,
  link,
}) {
  return (
    <a href={link} target="_blank">
      <div className="project flex p-[25px] cursor-pointer  gap-[20px] hover:bg-[rgba(0,0,0,0.1)] transition duration-200 ease-in-out rounded-md">
        <div className="projet-screenshot">
          <img
            src={imgURL}
            alt=""
            className="bg-white min-w-[150px] opacity-80  h-[90px] rounded-md"
          />
        </div>

        <div className="">
          <div className="project-details text-left">
            <h1 className="title font-[600]">{title}</h1>
            <p className="details  text-gray-400 text-[0.95rem] mt-[10px] leading-[25px] w-[400px]">
              {description}
            </p>
          </div>
          <div className="technologies-used mt-[20px] flex flex-wrap gap-[10px] text-[rgba(255,255,255,0.5)]">
            {stacksUsed.map((stack) => {
              return (
                <div
                  className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]"
                  key={Math.floor(Math.random() * 100000)}
                >
                  {stack}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
