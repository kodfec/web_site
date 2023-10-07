"use client";
import Image from "next/image";
import Welcome from "/public/res/welcome.png";
import { motion, AnimatePresence } from "framer-motion";

const Card2 = () => {
  return (
    <div className="max-w-full w-full min-h-screen flex justify-center items-center ">
      <div className="bg-white py-10 px-24 rounded-lg shadow-lg max-w-7xl w-full mx-4 sm:mx-auto">
        <div className="mb-3 p-2">
          <span className="animate-spin max-sm:text-3xl text-4xl font-semibold text-gray-700 ">
            WELCOME
          </span>
          <br />

          <span className=" animate-pulse  max-sm:text-4xl md:text-5xl text-6xl font-semibold text-blue-600">
            TO KODFEC
          </span>
        </div>
        <div className="w-full max-sm:block sm:block md:flex gap-5">
          <p className="text-gray-600 text-xl text-justify max-sm:w-full sm:w-full md:w-6/12">
            Having you here makes us very happy. At KODFEC, we are passionate
            about developing outstanding software solutions that change the
            world. To accomplish your demands and go above and beyond your
            expectations, our team of dedicated experts is committed to offering
            top-notch services and products.
          </p>
          <AnimatePresence>
            <div className="flex items-center justify-center h-20 max-sm:w-full sm:w-full max-sm:mt-5 sm:mt-5 md:mt-0 md:w-6/12">
              <motion.div
              initial={{opacity:0.3,width:"20%",height:"20%"}}
              animate={{opacity:0.5,width:"80%",height:"80%"}}
              exit={{opacity:1,width:"0%" ,height:"0%"}}
              transition={{duration:4,repeat:Infinity}}
              >
                <Image className="rounded-3xl" src={Welcome} alt="Welcome" />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
        <div className=" max-sm:mt-10 sm:mt-20 md:mt-24 text-center">
          <span className="max-sm:text-4xl text-5xl font-semibold text-green-600">
            GET IN TOUCH
          </span>
        </div>
        <p className="text-gray-600 text-xl text-center">
          If you want to know more about our products or simply get in touch
          with us, fill in the form here or please call one of our toll-free
          numbers below or email using the contact form below.
        </p>
      </div>
    </div>
  );
};

export default Card2;
