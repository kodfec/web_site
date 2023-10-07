"use client";
import Image from "next/image";
import webDevelopmentIcon from "/public/res/webDevelopmentIcon.png";
import mobileAppDevelopmentIcon from "/public/res/mobileAppDevelopmentIcon.png";
import desktopAppDevelopmentIcon from "/public/res/desktopApplicationIcon.png";
import posDevelopmentIcon from "/public/res/posDevelopmentIcon.png";
import hostingServicesIcon from "/public/res/hostingServicesIcon.png";
import softwareConsultationIcon from "/public/res/softwareConsultation.png";

const Card3 = () => {
 
  return (
    <div className="container  px-4  rounded-lg shadow-lg py-10 ">
      <div className="w-full md:px-40 md:flex text-center md:text-left bg-white pt-8 mb-5 rounded-lg shadow-lg">
        <div className="md:mb-10 md:max-w-fit w-full  border-e-4 border-blue-600 px-2">
          <span className="text-3xl font-bold text-blue-600">
            EXPLORE OUR <br />
            OFFERINGS
          </span>
          <br />
        </div>
        <div className="md:w-8/12 ps-1 font-semibold text-slate-500">
          <span>
            {" "}
            Discover our expansive portfolio of meticulously crafted services,
            each designed with precision to drive your business towards
            unprecedented heights of success and growth.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-blue-300 shadow-lg text-center">
          <div className="flex justify-center">
            <Image
              src={mobileAppDevelopmentIcon}
              alt="Mobile Application"
              className=" hover:bg-green-400"
            />
          </div>
          <span className="font-semibold text-lg text-blue-600 ">
            Mobile Development
          </span>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg  border border-blue-300 text-center">
          <div className="flex justify-center">
            <Image src={webDevelopmentIcon} alt="Web Application" />
          </div>
          <h5 className="font-semibold text-lg text-blue-600">
            Web Development
          </h5>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-300 text-center">
          <div className="flex justify-center">
            <Image src={desktopAppDevelopmentIcon} alt="Desktop Application" />
          </div>
          <h5 className="font-semibold text-lg text-blue-600">
            Desktop Application Development
          </h5>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-300 text-center">
          <div className="flex justify-center">
            <Image src={posDevelopmentIcon} alt="Pos Development" />
          </div>
          <h5 className="font-semibold text-lg text-blue-600">
            POS Development
          </h5>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-300 text-center">
          <div className="flex justify-center">
            <Image src={hostingServicesIcon} alt="Hosting Services" />
          </div>
          <h5 className="font-semibold text-lg text-blue-600">
            Hosting Service
          </h5>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-300 text-center">
          <div className="flex justify-center">
            <Image src={softwareConsultationIcon} alt="Software Consultation" />
          </div>
          <h5 className="font-semibold text-lg text-blue-600">
            Software consultation
          </h5>
          <p className="text-slate-600">
            Empowering Your Digital Presence with Expert Web Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
