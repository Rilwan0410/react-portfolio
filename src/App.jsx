import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import techBlogImg from "./assets/project-imgs/tech-blog-img.png";
import expressNoteTaker from "./assets/project-imgs/express-note-taker.png";
import CLIEmployeeTracker from "./assets/project-imgs/cli-employee-tracker.png";
import passwordGenerator from "./assets/project-imgs/password-generator.png";
import HBOClone from "./assets/project-imgs/hboClone.jpeg";
import codingQuiz from "./assets/project-imgs/coding-quiz.png";

function App() {
  const [activeNav, setActiveNav] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-container]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <section className="bg-[linear-gradient(90deg,#0f0c29,#302b63,#24243e)]  h-screen w-full grid place-items-center fixed overflow-scroll  ">
        <div className="text-center  rounded-xl items-center text-gray-100   ">
          <Header activeNav={activeNav} />

          <div className="content flex w-full justify-between mt-[150px] h-screen px-[100px]">
            <div className="h-[4300px]">
              <div className="left-side top-[9.4rem] sticky flex flex-col items-start">
                <h1 className="text-[4.8rem] font-[500]">Rilwan Etti</h1>
                <h4 className="text-[2rem] font-[300]">Full-Stack Developer</h4>

                <div className="icons mt-[18rem] flex gap-[25px]">
                  <a href="https://github.com/Rilwan0410" target="_blank">
                    {" "}
                    <i className="fa-brands fa-github text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer" />
                  </a>
                  <a href="https://www.linkedin.com/in/rilwan-etti-0998202b7/" target="_blank">
                  <i className="fa-brands fa-linkedin text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer" />
                  </a>
                  <a
                    href="https://stackoverflow.com/users/23524684/rilwan-etti"
                    target="_blank"
                  >
                    {" "}
                    <i className="fa-brands fa-stack-overflow text-[2.1rem] text-gray-500 hover:text-white transition duration-500 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            <div className="right-side w-1/2 flex flex-col ">
              <div
                data-container
                className="right-content  text-left  text-[1.1rem] text-[rgba(255,255,255,0.65)] font-montserrat leading-[2rem]  font-[300]"
                id="about"
              >
                My name is Rilwan Etti and I started programming in 2022 because
                I wanted to make a switch in careers. I didn't realize then that
                I had found something that would turn into a passion of mine. I
                genuinely enjoy building upon my skills as a programmer, and
                nothing brings me more satisfaction than bridging the gaps in my
                knowledge as I continue my pursuit to become the best programmer
                I can be. As of today, I have successfully completed a{" "}
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

              <div
                className="resume mt-[230px] flex flex-col gap-[60px]"
                id="resume"
                data-container
              >
                <Resume
                  job="University Of Miami Full-Stack Bootcamp"
                  role="Student"
                  description="24 week, full-stack course that focused on teaching the fundamentals of the Mern stack."
                  stacksUsed={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "MySQL",
                    "MongoDB",
                    "Express",
                    "Git",
                  ]}
                  startDate="SEPT 2023"
                  endDate="MAR 2024"
                />
              </div>

              <section
                data-container
                className="projects flex flex-col mt-[300px] gap-[50px] font-montserrat"
                id="projects"
              >
                <Project
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
                <Project
                  title="HBO Clone"
                  imgURL={HBOClone}
                  description="Clone of the popular HBO site. This was one of the first projects i completed using NextJS, NextJS routers, and NextJS Links, and was a project that helped me better understand Next JS and React."
                  stacksUsed={["NextJS", "React", "TailwindCSS"]}
                  link="https://re-hboclone.netlify.app/create"
                />
                <Project
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

                <Project
                  title="CLI Employee Tracker"
                  imgURL={CLIEmployeeTracker}
                  description="This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data."
                  stacksUsed={["Javascript", "NodeJS", "MySQL"]}
                  link="https://github.com/Rilwan0410/cli-employee-tracker"
                />

                <Project
                  title="Password Generator"
                  imgURL={passwordGenerator}
                  description="This is a password generator that will generate a unique password based on criteria specified. The criteria options include lowercase, uppercase, special characters and numeric characters. the password must be a minimum of 8 characters to a maximum of 128 characters. This project was built with HTML, CSS, and JavaScript."
                  stacksUsed={["HTML", "CSS", "Javascript"]}
                  link="https://github.com/Rilwan0410/passwordGenerator?tab=readme-ov-file"
                />

                <Project
                  title="Coding Quiz"
                  imgURL={codingQuiz}
                  description="This is a coding quiz game that will challenge your skills on basic programming quesions. You have 75 seconds to answer all of the questions, but the catch is that you will be deducted 10 seconds for each question you answer incorrectly. How ever many seconds are left once you finished the quiz will be your final score."
                  stacksUsed={["HTML", "CSS", "Javascript"]}
                  link="https://github.com/Rilwan0410/quizGame"
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
