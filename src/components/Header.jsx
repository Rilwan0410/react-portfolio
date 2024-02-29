import React from 'react'

export default function Header() {
  return (
<nav className=' w-[98%] fixed z-10'>
    <ul className="flex gap-[30px] p-[20px] justify-center  text-[rgba(255,255,255,0.8)] font-montserrat">
        <a href="">
            <li>About Me</li>
        </a>
        <a href="">
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
