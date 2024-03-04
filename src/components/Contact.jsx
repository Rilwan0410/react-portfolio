import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [validationMsg, setValidationMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3u8vt39", "template_tv0po2r", form.current, {
        publicKey: "P_rJaLQfwfMvM0jtS",
      })
      .then(
        () => {
          if (!message || !name || !email) {
            setEmailSent(true);
            setValidationMsg("Please fill out all inputs");
            return;
          }
          console.log("SUCCESS!");

          setName("");
          setEmail("");
          setMessage("");
          setEmailSent(true);
          setValidationMsg("Email Sent!");
          setTimeout(() => {
            setEmailSent(false);
            setValidationMsg("");
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mt-[300px]">
      <h1 className="text-left mb-[50px] text-[1.8rem] font-montserrat text-gray-200">
        Contact
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="font-montserrat  flex flex-col gap-[60px] "
        id="contact"
      >
        <div className="form-group flex justify-start items-start flex-col">
          <label htmlFor="name" className="block  font-bold text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => {
              setEmailSent(false);
              setValidationMsg("");
              setName(e.target.value);
            }}
            className="w-full bg-transparent border-transparent outline-none  text-gray-200  border-b-[#8a63b1] border-[2px] border-b-solid text-[1.2rem] p-[10px] font-[300]"
          />
        </div>

        <div className="form-group  flex justify-start items-start flex-col">
          <label htmlFor="email" className="block font-bold text-gray-400">
            Email
          </label>
          <input
            name="from_email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmailSent(false);
              setValidationMsg("");
              setEmail(e.target.value);
            }}
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
            value={message}
            onChange={(e) => {
              setEmailSent(false);
              setValidationMsg("");
              setMessage(e.target.value);
            }}
            className="w-full  outline-none bg-[rgba(255,255,255,0.1)] p-[20px] text-gray-200 text-[1.1rem] rounded-lg font-[300]"
          ></textarea>
        </div>

        {emailSent ? <span className="my-[-20px]">{validationMsg}</span> : ""}

        <button className="bg-[#8a63b1] opacity-80 hover:opacity-100 transition duration-500 ease-in-out p-[10px] rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
