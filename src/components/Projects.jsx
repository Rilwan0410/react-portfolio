import React from 'react'
import techBlogImg from '../assets/project-imgs/tech-blog-img.png'
import expressNoteTaker from '../assets/project-imgs/express-note-taker.png'


export default function Projects() {
  return (
  <section className="projects mt-[300px] flex flex-col gap-[50px] font-montserrat" id="projects">
<a href="https://rilwan-tech-blog-950b9bce78ba.herokuapp.com" target='_blank'>
<div className="project flex p-[25px] cursor-pointer  gap-[20px] hover:bg-[rgba(0,0,0,0.1)] transition duration-200 ease-in-out rounded-md">
    <div className="projet-screenshot">
        <img src={techBlogImg} alt="" className="bg-white w-[150px] opacity-80  h-[90px] rounded-md"/>
        {/*  border-solid border-[3px] border-[rgba(0,0,0,0.6)] */}
    </div>

<div className="">
    <div className="project-details text-left">
        <h1 className="title font-[600]">Tech Blog</h1>
        <p className="details  text-gray-400 text-[0.95rem] mt-[10px] leading-[25px] w-[400px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quam earum est facectus eveniet voluptas inventore face Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptas consequatur</p>
    </div>
    <div className="technologies-used mt-[20px] flex flex-wrap gap-[10px] text-[rgba(255,255,255,0.5)]">
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Javascript</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">MySQL</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Sequelize</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">handlebars</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Express</div>
                  </div>
                  </div>
</div>
</a>

<a href="https://rilwan-express-note-app-de8bcdf2e04e.herokuapp.com/notes" target="_blank">
<div className="project flex p-[25px] gap-[20px] hover:bg-[rgba(0,0,0,0.1)] transition duration-200 ease-in-out rounded-md">
    <div className="projet-screenshot">
        <img src={expressNoteTaker} alt="" className="bg-white opacity-80 w-[150px] h-[90px] rounded-md"/>

    </div>

<div className="">
    <div className="project-details text-left">
        <h1 className="title font-[600]">Note Taker</h1>
        <p className="details  text-gray-400 text-[0.95rem] mt-[10px] leading-[25px] w-[400px]">Lorem ipsum dolor sit, amet consectetur adipisicing elitr adipisicing elit. Repellat, voluptas consequatur</p>
    </div>
    <div className="technologies-used mt-[20px] flex flex-wrap gap-[10px] text-[rgba(255,255,255,0.5)]">
    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">HMTL</div>
    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">CSS</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Javascript</div>
                    <div className="bg-[rgba(255,255,255,0.3)] font-[600] rounded-[1000px] p-[3px] text-[0.9rem] px-[10px]">Express</div>
                  </div>
                  </div>
</div>
</a>

  </section>
  )
}
