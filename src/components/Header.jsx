import React from 'react'

export default function Header() {
  return (
<nav className=' ml-[95px] fixed z-10'>
    <ul className="flex gap-[30px] p-[20px] pt-[40px] justify-end  text-[rgba(255,255,255,0.6)] font-montserrat">
        <a href="#about">
            <li>About Me</li>
        </a>
        <a href="#resume">
            <li>Resume</li>
        </a>
        <a href="">
            <li>Contact</li>
        </a>
        <a href="">
            <li></li>
        </a>
        <a href="">
            <li></li>
        </a>
    </ul>
</nav>
  )
}
