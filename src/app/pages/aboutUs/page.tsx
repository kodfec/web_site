import Footer from "../../component/Footer";
import Image from "next/image";
import NavBar from "../../component/NavBar";
import Image1 from "/public/res/aboutus-img1.png";
import VisionImg from "/public/res/vision-img.png";
import MissonImg from "/public/res/mission-img.png";
import WorkingImg from "/public/res/working-img.png";
import PrifileImg from "/public/res/profile-ico.png";
import FbIcon from "/public/res/fb-ico.png";
import InstaIcon from "/public/res/insta-ico.png";
import LinkIcon from "/public/res/linkedin-ico.png";

import Link from "next/link";


const page = () => {
 
  return (
    <div className="bg-white  page-container">
      <NavBar />

      <div className="pt-24 w-full md:flex">
        <div className="w-ful m-10 md:w-6/12">
          <span className="text-4xl font-bold">Who we are..</span>
          <p className="mt-5 text-2xl text-slate-500">
            KODFEC serves as an extended remote development team for many
            medium-level organizations, fast-growing startups, and scale-ups. We
            mix our engineering skills with the DNA of your company to improve
            and succeed in the software product development process. Our goal at
            KODFEC is to develop cutting-edge software products and provide the
            best software solutions possible, resulting in long-term financial
            gains.
          </p>
        </div>
        <div className=" md:w-6/12 m-10">
          <Image src={Image1} alt="Image1" width={400} />
        </div>
      </div>

      <div className="w-full  flex">
        <div className="px-20 text-center">
          <div className="anime-txt">
            At the heart of our company is a passionate team of software
            engineers, designers, and visionaries, all united by a common goal –
            to deliver exceptional software solutions.
          </div>
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-6/12 m-10 border border-blue-400 rounded-lg p-5  ">
          <div className="md:w-32 w-auto  flex items-center justify-center">
            <Image src={VisionImg} alt="VisionImg" width={70} />
          </div>
          <div className="ml-6 text-center md:text-left mt-5">
            <span className="font-bold text-xl">OUR VISION</span>
            <br />
            <span>
              To bring the paradisiac and winning world to the fingertips of the
              entrepreneurs so that they can achieve more.
            </span>
          </div>
        </div>

        <div className="md:w-6/12 m-10 border border-blue-400 rounded-lg p-5 ">
          <div className="md:w-64 w-auto  flex items-center justify-center">
            <Image src={MissonImg} alt="MissonImg" width={70} />
          </div>
          <div className="ml-6 text-center md:text-left mt-5">
            <span className="font-bold text-xl">OUR MISSION</span>
            <br />
            <span>
              To spread throughout the world in order to create the most
              creative team that can change the world with their incredible
              energy and thoughts. To give unique range of products, in several
              industries.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="w-full md:w-6/12 p-10">
          <span className="text-3xl font-bold">
            Check these incredible short facts about KODFEC
          </span>
          <p className="text-lg text-slate-500 mt-5">
            Our team has grown over the years, but anyone joining us possesses
            the same key attributes. A devotion to technical excellence, honor
            and empathy for the needs of our clients, and above all, a streak of
            the creative spirit that inspires all their work.
          </p>
          <Image src={WorkingImg} alt="MissonImg" width={400} />
        </div>
        <div className="w-full md:w-6/12 p-5 bg-blue-200 text-center">
          <span className="text-3xl font-bold dev-team-heder">
            Meet our developer team
          </span>

          {/* prodile card */}
          <div className="w-full flex">
            <div className="md:w-8/12 w-10/12 border-r-4 border-blue-500 mt-10 text-start md:flex">
              <Image src={PrifileImg} alt="MissonImg" width={60} />
              <div className="ml-4">
                <span className="font-semibold text-blue-900 text-xl">
                  Sulochana Rathnayaka
                </span>
                <br />
                <span className="font-medium text-slate-500 text-lg">
                  CEO / Director
                </span>
              </div>
            </div>
            <div className="md:w-4/12 w-2/12 mt-10 gap-x-1 md:px-7 md:pt-2 md:flex pl-2 justify-between">
              <Link href={"/*"} className="col">
                <Image
                  src={FbIcon}
                  alt="FbIco"
                  width={40}
                  className="mb-2 md:mr-2"
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={InstaIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={LinkIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* prodile card */}

          {/* prodile card */}
          <div className="w-full flex">
            <div className="md:w-8/12 w-10/12 border-r-4 border-blue-500 mt-10 text-start md:flex">
              <Image src={PrifileImg} alt="MissonImg" width={60} />
              <div className="ml-4">
                <span className="font-semibold text-blue-900 text-xl">
                  Tharushi Rodrigo
                </span>
                <br />
                <span className="font-medium text-slate-500 text-lg">
                  Director
                </span>
              </div>
            </div>
            <div className="md:w-4/12 w-2/12 mt-10 gap-x-1 md:px-7 md:pt-2 md:flex pl-2 justify-between">
              <Link href={"/*"} className="col">
                <Image
                  src={FbIcon}
                  alt="FbIco"
                  width={40}
                  className="mb-2 md:mr-2"
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={InstaIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={LinkIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* prodile card */}
          {/* prodile card */}
          <div className="w-full flex">
            <div className="md:w-8/12 w-10/12 border-r-4 border-blue-500 mt-10 text-start md:flex">
              <Image src={PrifileImg} alt="MissonImg" width={60} />
              <div className="ml-4">
                <span className="font-semibold text-blue-900 text-xl">
                  Virul Nirmala
                </span>
                <br />
                <span className="font-medium text-slate-500 text-lg">
                  Director
                </span>
              </div>
            </div>
            <div className="md:w-4/12 w-2/12 mt-10 gap-x-1 md:px-7 md:pt-2 md:flex pl-2 justify-between">
              <Link href={"/*"} className="col">
                <Image
                  src={FbIcon}
                  alt="FbIco"
                  width={40}
                  className="mb-2 md:mr-2"
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={InstaIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={LinkIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* prodile card */}
          {/* prodile card */}
          <div className="w-full flex">
            <div className="md:w-8/12 w-10/12 border-r-4 border-blue-500 mt-10 text-start md:flex">
              <Image src={PrifileImg} alt="MissonImg" width={60} />
              <div className="ml-4">
                <span className="font-semibold text-blue-900 text-xl">
                  Pasindu Lakshan
                </span>
                <br />
                <span className="font-medium text-slate-500 text-lg">
                  Director
                </span>
              </div>
            </div>
            <div className="md:w-4/12 w-2/12 mt-10 gap-x-1 md:px-7 md:pt-2 md:flex pl-2 justify-between">
              <Link href={"/*"} className="col">
                <Image
                  src={FbIcon}
                  alt="FbIco"
                  width={40}
                  className="mb-2 md:mr-2"
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={InstaIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={LinkIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* prodile card */}
          {/* prodile card */}
          <div className="w-full flex">
            <div className="md:w-8/12 w-10/12 border-r-4 border-blue-500 mt-10 text-start md:flex">
              <Image src={PrifileImg} alt="MissonImg" width={60} />
              <div className="ml-4">
                <span className="font-semibold text-blue-900 text-xl">
                  Akash Maleesha
                </span>
                <br />
                <span className="font-medium text-slate-500 text-lg">
                  Director
                </span>
              </div>
            </div>
            <div className=" md:w-4/12 w-2/12 mt-10 gap-x-1 md:px-7 md:pt-2 md:flex pl-2 justify-between">
              <Link href={"/*"} className="col">
                <Image src={FbIcon} alt="FbIco" width={40} className="mb-2" />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={InstaIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
              <Link href={"/*"}>
                <Image
                  src={LinkIcon}
                  className="col mb-2 md:mr-2"
                  alt="FbIco"
                  width={40}
                />
              </Link>
            </div>
          </div>
          {/* prodile card */}
        </div>
      </div>

      <div className="footer bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
