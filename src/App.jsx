import React, { useState } from "react";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import techBlogImg from "./assets/project-imgs/tech-blog-img.png";
import expressNoteTaker from "./assets/project-imgs/express-note-taker.png";
import CLIEmployeeTracker from "./assets/project-imgs/cli-employee-tracker.png";
import passwordGenerator from "./assets/project-imgs/password-generator.png";
import HBOClone from "./assets/project-imgs/hboClone.jpeg";

function App() {
  return (
    <>
      <section className="bg-[linear-gradient(90deg,#0f0c29,#302b63,#24243e)]  h-screen w-full grid place-items-center fixed overflow-scroll  ">
        <div className="text-center  rounded-xl items-center text-gray-100   ">
          <Header />

          <div className="content flex w-full justify-between mt-[150px] h-screen px-[100px]">
            <div className="h-[4000px]">
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

            <div className="right-side w-1/2 flex flex-col h-[4000px]">
              <div
                className="right-content  text-left text-[1.1rem] text-[rgba(255,255,255,0.65)] font-montserrat leading-[2rem]  font-[300]"
                id="about"
              >
                My name is Rilwan Etti and I started programming in 2022 because
                I wanted to make a switch in careers. I didn't realize then that
                I had found something that would turn into a passion of mine. I
                genuinely enjoy building upon my skills as a programmer, and
                nothing brings me more satisfaction than bridging the gaps in my
                knowledge as I continue my pursuit to become the best programmer
                I can be. As of today I have successfully completed a{" "}
                <span className="text-white font-[400]">
                  full-stack bootcamp
                </span>{" "}
                for the{" "}
                <span className="text-white font-[400]">
                  University Of Miami
                </span>
                . Below is a full list of the technologies I have working
                proficiency in.
              </div>

              <Stacks />
              <Resume />

              <section
                className="projects flex flex-col mt-[300px] gap-[50px] font-montserrat"
                id="projects"
              >
                <Projects
                  title="Tech Blog"
                  imgURL={techBlogImg}
                  description="This is an application that simulates a blog website with the ability for a user to create an account, create blog posts as well as the ability to edit or delete their existing blog post(s). The user can also comment on pre-existing blog posts from other accounts as well."
                  stacksUsed={[
                    "javascript",
                    "MySQL",
                    "Sequelize",
                    "Handlebars",
                    "ExpressJS",
                    "NodeJS",
                  ]}
                  link="https://github.com/Rilwan0410/tech_blog_app"
                />
                <Projects
                  title="HBO Clone"
                  imgURL={HBOClone}
                  description="Clone of the popular HBO site. This was one of the first projects i completed using NextJS, NextJS routers, and NextJS Links, and was a project that helped me better understand Next JS and React."
                  stacksUsed={["NextJS", "React", "TailwindCSS"]}
                  link="https://unique-kringle-44f6ab.netlify.app/create"
                />
                <Projects
                  title="Note Taker"
                  imgURL={expressNoteTaker}
                  description="This is a note taking app powered by express.js using json to store all the notes, and fs.writeFile() as the tool that will add or remove data to the json file to persist and/or delete notes"
                  stacksUsed={[
                    "HMTL",
                    "CSS",
                    "Javascript",
                    " NodeJS",
                    "Express",
                    "JSON",
                  ]}
                  link="https://github.com/Rilwan0410/express_note_app"
                />

                <Projects
                  title="CLI Employee Tracker"
                  imgURL={CLIEmployeeTracker}
                  description="This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data."
                  stacksUsed={["Javascript", "NodeJS", "MySQL"]}
                  link="https://github.com/Rilwan0410/cli-employee-tracker"
                />

                <Projects
                  title="Password Generator"
                  imgURL={passwordGenerator}
                  description="This is a password generator that will generate a unique password based on criteria specified. The criteria options include lowercase, uppercase, special characters and numeric characters. the password must be a minimum of 8 characters to a maximum of 128 characters. This project was built with HTML, CSS, and JavaScript."
                  stacksUsed={["HTML", "CSS", "Javascript"]}
                  link="https://github.com/Rilwan0410/passwordGenerator?tab=readme-ov-file"
                />
              </section>

              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
