import React from "react";

export default function Contact() {
  return (
    <div className='mt-[300px]'>
    <h1 className="text-left mb-[50px] text-[1.8rem] font-montserrat text-gray-200">Contact</h1>
      <form
        action=""
        className="font-montserrat  flex flex-col gap-[60px] "
        id="contact"
      >
        <div className="form-group flex justify-start items-start flex-col">
          <label htmlFor="name" className="block  font-bold text-gray-400">
            Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-transparent outline-none  text-gray-200  border-b-[#8a63b1] border-[2px] border-b-solid text-[1.2rem] p-[10px] font-[300]"
          />
        </div>

        <div className="form-group  flex justify-start items-start flex-col">
          <label htmlFor="email" className="block font-bold text-gray-400">
            Email
          </label>
          <input
            type="email"
            className="w-full  bg-transparent border-transparent outline-none text-gray-200  border-b-[#8a63b1] border-[2px] border-b-solid text-[1.2rem] p-[10px] font-[300]"
          />
        </div>

        <div className="form-group  flex justify-start items-start flex-col">
          <label
            htmlFor="email"
            className="block mb-[15px] font-bold text-gray-400"
          >
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="6"
            className="w-full  outline-none bg-[rgba(255,255,255,0.1)] p-[20px] text-gray-200 text-[1.1rem] rounded-lg font-[300]"
          ></textarea>
        </div>

        <button className="bg-[#8a63b1] opacity-80 hover:opacity-100 transition duration-500 ease-in-out p-[10px] rounded-lg">Submit</button>
      </form>
    </div>
  );
}
