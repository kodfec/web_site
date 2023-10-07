import {
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaPhoneSquareAlt,
  FaPhoneVolume,
  FaWhatsappSquare,
} from "react-icons/fa";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";

const page = () => {
  return (
    <div className="bg-slate-950 page-container">
      <NavBar />
      <div className="pt-32 pb-14 w-full bg-white">
        <div className="w-full text-center px-4">
          <div className="w-full mt-4 pb-6 sm:block md:flex justify-center items-center">
            <div className="sm:w-full md:w-1/2 p-5">
              <div className="flex max-sm:flex-col text-center sm:text-start mb-8 shadow-lg shadow-blue-600 rounded-lg p-4">
                <div className="max-sm:w-full w-1/4 flex justify-center items-center">
                  <FaEnvelopeOpenText className="text-6xl" />
                </div>
                <div className="max-sm:w-full w-3/4 max-sm:mt-4  flex flex-col lg:flex-row items-center">
                  <span className="w-full lg:w-2/4 text-2xl font-bold">
                    Email Us:
                  </span>
                  <span className="w-full text-2xl">contact@kodfec.com</span>
                </div>
              </div>

              <div className="flex max-sm:flex-col text-center sm:text-start mb-8 shadow-lg shadow-blue-600 rounded-lg p-4">
                <div className="max-sm:w-full w-1/4 flex justify-center items-center">
                  <FaPhoneSquareAlt className="text-6xl" />
                </div>
                <div className="max-sm:w-full w-3/4 max-sm:mt-4  flex flex-col lg:flex-row items-center">
                  <span className="w-full lg:w-2/4 text-2xl font-bold">
                    Call Us:
                  </span>
                  <div className="w-full flex flex-col">
                    <span className="w-full text-2xl">+94 76 708 1491</span>
                    <span className="w-full text-2xl">+94 72 147 2677</span>
                  </div>
                </div>
              </div>

              <div className="flex max-sm:flex-col text-center sm:text-start mb-8 shadow-lg shadow-blue-600 rounded-lg p-4">
                <div className="max-sm:w-full w-1/4 flex justify-center items-center">
                  <FaWhatsappSquare className="text-6xl" />
                </div>
                <div className="max-sm:w-full w-3/4 max-sm:mt-4  flex flex-col lg:flex-row items-center">
                  <span className="w-full lg:w-2/4 text-2xl font-bold">
                    Whatsapp On:
                  </span>
                  <span className="w-full text-2xl">+94 76 708 1491</span>
                </div>
              </div>
            </div>
            <div className="max-sm:mt-4 sm:mt-4 md:mt-0 sm:w-full md:w-1/2 p-5">
              <div className="shadow-lg shadow-black w-full rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15837.838754900818!2d79.87355495010638!3d7.067971884444178!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDQnMTUuNCJOIDc5wrA1MScyMi43IkU!5e0!3m2!1sen!2slk!4v1695399682840!5m2!1sen!2slk"
                  width="100%"
                  height="450"
                  className="border-0 rounded-2xl"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBar bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
