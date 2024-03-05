import React from "react";

export default function Header({ activeNav }) {
  console.log(activeNav);
  return (
    <nav className=" ml-[95px] fixed z-10">
      <ul className="flex gap-[30px] p-[20px] pt-[40px] justify-end  text-[rgba(255,255,255,0.6)] font-montserrat">
        <a
          href="#about"
          className={`uppercase text-[0.84rem] tracking-[1.5px] ${
            activeNav == "about" ? "active" : ""
          }`}
        >
          <li>About</li>
        </a>
        <a
          href="#resume"
          className={`uppercase text-[0.84rem] tracking-[1.5px] ${
            activeNav == "resume" ? "active" : ""
          }`}
        >
          <li>Resume</li>
        </a>
        <a
          href="#projects"
          className={`uppercase text-[0.84rem] tracking-[1.5px] ${
            activeNav == "projects" ? "active" : ""
          }`}
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className={`uppercase text-[0.84rem] tracking-[1.5px] ${
            activeNav == "contact" ? "active" : ""
          }`}
        >
          <li>Contact</li>
        </a>

        <a href="">
          <li></li>
        </a>
      </ul>
    </nav>
  );
}
