import { HiOutlineMail } from "react-icons/hi"; 
import { ImLocation } from "react-icons/im"; 

const Footer = () => {
    return (
      <>

<footer className="block bg-violet-700 text-white">
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
       
        <div className="sm:flex-row flex justify-between flex-col">
          <h2 className="font-bold text-4xl md:text-5xl w-full max-w-xl">
          Empowering you to live a healthier, happier life.          </h2>
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex max-w-72 items-center justify-start">
              <ImLocation className="h-5 w-10 mr-2"/>
              <p className=" text-sm sm:text-base">
              123 Fitness Blvd, Health City, CA
              </p>
            </div>
            <div className="mb-4 flex max-w-72 items-center justify-start ">
              <HiOutlineMail className="h-5 w-10 mr-2"/>
              <p className=" text-sm sm:text-base">
              contact@fitlifegym.com
              </p>
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-black mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
        <div className="block"> <nav></nav></div>
          <p className="text-sm sm:text-base">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
        
        </>
    );
}

export default Footer;


