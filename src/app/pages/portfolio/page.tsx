import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import Image from "next/image";
import galleryImage from "/public/res/galleryIcon.png";
import ElectronicShop from "/public/res/home_electronic.png";
import NRShop from "/public/res/GRN.jpg";

const page = () => {
  return (
    <div className="portfolioBody ">
      <NavBar />
      <div className="pt-10 pb-10 flex flex-col items-center lg:grid justify-items-center  grid-cols-2  xl:grid-cols-3">
        {/* first */}
        <div className="relative mt-20 max-sm:w-80 h-80 sm:w-96 md:w-96 md:h-96 rounded-3xl flex border-4 border-blue-600">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover rounded-3xl"
              src={ElectronicShop}
              alt="Background"
            />
          </div>

          <div className="absolute flex flex-col px-2 py-4 bottom-0">
            <p className="font-bold text-2xl  bg-blue-200 px-3 rounded-lg text-center py-1">
              CK ELECTRONICS
            </p>
            <span className=" bg-blue-200 mt-3 text-center py-1 px-3 rounded-lg">
              Web Site
            </span>
          </div>

          <div className="absolute right-2 top-2  p-2  bg-blue-200 rounded-3xl flex justify-center items-center">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

        {/* next */}

        <div className="relative mt-20 max-sm:w-80 h-80 sm:w-96 md:w-96 md:h-96 rounded-3xl flex border-4 border-blue-600">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover rounded-3xl"
              src={NRShop}
              alt="Background"
            />
          </div>

          <div className="absolute flex flex-col px-2 py-4 bottom-0">
            <p className="font-bold text-2xl  bg-blue-200 px-3 rounded-lg text-center py-1">
              NR Super
            </p>
            <span className=" bg-blue-200 mt-3 text-center py-1 px-3 rounded-lg">
             POS System
            </span>
          </div>

          <div className="absolute right-2 top-2  p-2  bg-blue-200 rounded-3xl flex justify-center items-center">
            <button>
              <Image src={galleryImage} alt="Gallery" />
            </button>
          </div>
        </div>

      </div>

      <div className="h-screen"></div>

      <div className="footerBar bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
