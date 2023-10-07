import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaPrint,
  FaPhoneVolume,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-3 pb-10 px-5 w-full"
      style={{ backgroundColor: "#001627" }}
    >
      <div className="mx-auto">
        <div className="flex flex-wrap gap-x-5 ">


          <div className="w-full text-center lg:w-1/4">
            <h5 className="text-uppercase mb-4 text-4xl font-bold">
              KODFEC
            </h5>
            <p className="text-white text-center">
              We at KODFEC&trade; are here to help you realize your goals by
              providing high-quality software solutions.
            </p>
          </div>

          <div className="w-full lg:w-1/4 mt-9 pt-4">
            <p className="text-white text-center">
              Copyright &copy;2023 KODFEC All Right Reserved
            </p>
          </div>

          <div className="w-full lg:w-2/12 mt-9 pt-4">
            <div className="text-center">
              <ul className="flex justify-center gap-4">
                <li className="list-inline-item">
                  <a href="https://web.facebook.com/kodfecPvtLimited/" className="text-white">
                    <FaFacebook className="text-3xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaTwitter className="text-3xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/kodfec_pvt_ltd/" className="text-white">
                    <FaInstagram className="text-3xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/kodfec-corporation-a3a693287/" className="text-white">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FaYoutube className="text-4xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 text-center max-sm:mt-6 sm:mt-6 lg:mt-0">
            <h5 className="text-uppercase text-4xl font-bold">
              Contact
            </h5>
            <p className="text-white mb-2 mt-3">
              <FaHome className="text-xl inline" />
              &nbsp;&nbsp;525 Pulluhena, Pamunugama.
            </p>
            <p className="text-white mb-2">
              <FaEnvelope className="text-xl inline" />
              &nbsp;&nbsp;contact@kodfec.com
            </p>
            <p className="text-white mb-2">
              <FaPhoneAlt className="text-xl inline" />
              &nbsp;&nbsp;+94 767081491
            </p>
            <p className="text-white mb-2">
              <FaPrint className="text-xl inline" />
              &nbsp;&nbsp;+94 767081491
            </p>
          </div>

          <div className="w-full mt-4">
            <hr className="hr-break-1" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
