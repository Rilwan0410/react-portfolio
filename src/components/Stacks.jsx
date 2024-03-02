import React from "react";
import htmlLogo from "../assets/svg/html-logo.svg";
import javascriptLogo from "../assets/svg/javascript-logo.svg";
import expressLogo from "../assets/svg/expressjs.svg";
import cssLogo from "../assets/svg/css-logo.svg";
import reactLogo from "../assets/svg/react.svg";
import nodeLogo from "../assets/svg/nodejs.svg";
import mongoLogo from "../assets/svg/mongodb.svg";
import mysqlLogo from "../assets/svg/mysql.svg";
import jqueryLogo from "../assets/svg/jquery.svg";
import tailwindLogo from "../assets/svg/tailwindcss.svg";
import sassLogo from "../assets/svg/sass.svg";
import handlebarsLogo from "../assets/svg/handlebarsjs.svg";
import gitLogo from "../assets/svg/git-logo.svg";

export default function Stacks() {
  return (
    <div className="stacks mt-[90px] flex flex-wrap gap-[20px] ">
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={htmlLogo}
        alt=""
      />
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={cssLogo}
        alt=""
      />
      <img
        className="w-[35px] h-[35px] mt-[20px] object-contain"
        src={javascriptLogo}
        alt=""
      />
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={reactLogo}
        alt=""
      />
      <img className="w-[70px] h-[70px] object-contain" src={nodeLogo} alt="" />
      <img
        className="w-[70px] h-[70px] object-contain"
        src={expressLogo}
        alt=""
      />
      <img
        className="w-[70px] h-[70px] object-contain"
        src={mysqlLogo}
        alt=""
      />
      <img
        className="w-[70px] h-[70px] object-contain"
        src={mongoLogo}
        alt=""
      />
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={tailwindLogo}
        alt=""
      />
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={sassLogo}
        alt=""
      />
      <img
        className="w-[70px] h-[70px] object-contain"
        src={jqueryLogo}
        alt=""
      />
      <img
        className="w-[70px] h-[70px] object-contain"
        src={handlebarsLogo}
        alt=""
      />
      <img
        className="w-[40px] h-[40px] mt-[15px] object-contain"
        src={gitLogo}
        alt=""
      />
    </div>
  );
}
