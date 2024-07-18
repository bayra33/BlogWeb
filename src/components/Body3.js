import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MetaBlog } from "./MetaBlog";
import Link from "next/link";
import { GoArrowUp } from "react-icons/go";


export const Body3 = () => {
  return (
    <div className="bg-[#f6f6f7] p-5">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:w-[1100px] left-0 text-left">
          About
        </h1>
        <p className="my-4 text-gray-600 text-base md:text-lg lg:text-xl text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="my-4 flex flex-col gap-2 text-gray-600 text-left">
          <p>Email: info@jstemplate.net</p>
          <p>Phone: 880 123 456 789</p>
          <div className="flex gap-5 my-6 text-gray-600">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-4 my-6">
            <Link href="https://www.facebook.com/">
              <FaFacebook className="text-xl md:text-2xl lg:text-3xl hover:text-sky-700" />
            </Link>
            <a href="https://x.com/?lang=en" target="_blank">
              <FaTwitter className="text-xl md:text-2xl lg:text-3xl hover:text-sky-700" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaSquareInstagram className="text-xl md:text-2xl lg:text-3xl hover:text-sky-700" />
            </a>

            <a href="https://mn.linkedin.com/" target="_blank">
              <FaLinkedin className="text-xl md:text-2xl lg:text-3xl hover:text-sky-700" />
            </a>
          </div>
        </div>
        <div>
          <div className="w-11/12 mx-auto h-[2px] bg-[#DCDDDF]"> </div>
          <div className="text-xl my-5">
            <MetaBlog width="231px" height="54px" />
          </div>
          <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-xl text-gray-600">Terms of Use</p>
            <p className="text-xl text-gray-600">Privacy Policy</p>
            <p className="text-xl text-gray-600">Cookie Policy</p>
          </div>
   
          <div className=""><Link href="#adad"><GoArrowUp style={{width:"30px", height:"30px"}} /></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
