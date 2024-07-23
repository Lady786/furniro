import React from "react";
import location from "../../../public/icons/location.png";
import phone from "../../../public/icons/phone.png";
import clock from "../../../public/icons/clock.png";
import shopBg from "../../../public/img/shop-bg.png";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <div className="relative">
        <img className="mx-[auto] w-full" src={shopBg.src} alt="" />
        <div className="absolute top-[40%] text-center w-full">
          <div className="container">
            <p className="font-poppins text-[48px] font-[600]">Contact</p>
            <p className="font-poppins text-[16px] font-[300] ml-3">
              <Link href={"/"}>Home</Link> / Contact
            </p>
          </div>
        </div>
      </div>
      <div className=" container h-[1144px]  flex flex-col items-center justify-around">
        <div className="w-[644px] h-[48px]  flex flex-col items-center mt-[100px]">
          <h1 className="text-[36px] font-poppins font-bold">
            Get In Touch With Us
          </h1>
          <p className="text-[16px] text-[#9F9F9F] text-center mt-[10px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="w-[1058px] h-[923px]  flex justify-between mt-[150px]">
          <div className="w-[393px] h-[577px]  flex flex-col justify-between items-center ">
            <div className="w-[250px] h-[100px] flex ">
              <img
                className="w-[22px] h-[27px] mt-[10px]"
                src={location.src}
                alt=""
              />
              <h1 className="text-[24px]  font-bold font-poppins ml-[40px]">
                Address <br />{" "}
                <span className="text-[16px] font-poppins font-medium">
                  236 5th SE Avenue, New York NY10000, United States
                </span>
              </h1>
            </div>
            <div className="w-[250px] h-[100px] flex ">
              <img
                className="w-[22px] h-[27px] mt-[10px]"
                src={phone.src}
                alt=""
              />
              <h1 className="text-[24px] font-bold font-poppins ml-[40px]">
                Phone <br />
                <span className="text-[16px] font-poppins font-medium">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </span>
              </h1>
            </div>
            <div className="w-[250px] h-[100px] flex ">
              <img
                className="w-[22px] h-[27px] mt-[10px]"
                src={clock.src}
                alt=""
              />
              <h1 className="text-[24px] font-bold font-poppins ml-[40px]">
                Working Time <br />
                <span className="text-[16px] font-poppins font-medium">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[531px] h-[741px] ">
            <form className="flex flex-col justify-between w-[531px] h-[650px]">
              <div className="w-[520px] h-[121px]  flex flex-col justify-between">
                <label
                  className="text-[16px] font-poppins font-medium"
                  htmlFor="name"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                  id="name"
                  type="text"
                  placeholder="Abs"
                />
              </div>
              <div className="w-[520px] h-[121px]  flex flex-col justify-between">
                <label
                  className="text-[16px] font-poppins font-medium"
                  htmlFor="email"
                >
                  Email Adress
                </label>
                <input
                  className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                  id="email"
                  type="text"
                  placeholder="Abs@def.com"
                />
              </div>
              <div className="w-[520px] h-[121px]  flex flex-col justify-between">
                <label
                  className="text-[16px] font-poppins font-medium"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-[520px] h-[75px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                  id="subject"
                  type="text"
                  placeholder="This is an optional   "
                />
              </div>
              <div className="w-[520px] h-[121px]  flex flex-col justify-between">
                <label
                  className="text-[16px] font-poppins font-medium"
                  htmlFor="name"
                >
                  Message
                </label>

                <input
                  className="w-[520px] h-[120px] outline-none  border-[3px] text-stone-600 pl-[20px] rounded-2xl"
                  id="name"
                  type="text"
                  placeholder="Hi! id like to ask about"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
