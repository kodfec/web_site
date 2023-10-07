"use client";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import ShakeHand from "/public/res/shakehand.jpg";
import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/app/api/sendEmail";
import CustomAlert from "@/app/component/CustomAlert";

const Page = () => {
  const [qutationButton, setQutationButton] = useState(
    "Click to send quotation"
  );
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Address1, setAddres1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [requirement, setRequirement] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const closeAlert = () => {
    setIsAlertVisible(false);
    if (
      alertMessage ===
      "Your quotation successfully sent. We will response as soon as possible Thank you!"
    ) {
      window.location.reload();
    }
    setAlertMessage("");
  };

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  return (
    <div className="page-container">
      <NavBar />

      <div className="pt-28 w-ful flex justify-center items-center bg-white">
        <div className="w-full text-center">
          <span className="uppercase text-6xl font-bold">Get Quote</span>
          <div className="w-full flex justify-center mt-5">
            <p className="w-3/4 text-lg">
              Ready to bring your vision to life? Request a personalized
              quotation today and discover how our tailored solutions can drive
              your success.
            </p>
          </div>

          <div className="w-full sm:block md:flex justify-center items-center mt-5">
            <div className="max-sm:hidden sm:hidden md:flex items-center w-1/3 border-blue-600 border-e-8 vertical_line">
              <Image src={ShakeHand} alt="shake hand" className="w-full" />
            </div>
            <div className="max-w-full sm:max-w-full md:w-2/3  mb-5">
              <div className="mb-5 mt-5">
                <span className="uppercase w-full text-xl font-bold">
                  Nice to meet you
                </span>
              </div>

              <div>
                <div className="w-full text-start px-6 mb-2 font-bold">
                  <span>What sould we call you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full max-sm:mb-2 sm:mb-2 md:mb-0 md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="first name"
                      name="fname"
                      id=""
                      value={fname}
                      onChange={(e: any) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      id=""
                      value={lname}
                      onChange={(e: any) => {
                        setLname(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How shall we contact you?</span>
                </div>
                <div className="w-full sm:block md:flex ">
                  <div className="sm:w-full max-sm:mb-2 sm:mb-2 md:mb-0 md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      id=""
                      value={mobile}
                      onChange={(e: any) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </div>
                  <div className="sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="Email"
                      name="email"
                      id=""
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How can we find you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full md:w-1/2 max-sm:mb-2 sm:mb-2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="Address Line 1"
                      name="line1"
                      id=""
                      value={Address1}
                      onChange={(e: any) => {
                        setAddres1(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" sm:w-full md:w-1/2">
                    <input
                      className="w-11/12 border-blue-200 border-2 rounded-xl px-4 h-11"
                      type="text"
                      placeholder="Address Line 2 (Optional)"
                      name="line2"
                      id=""
                      value={Address2}
                      onChange={(e: any) => {
                        setAddress2(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full text-start px-6 mt-5 mb-2 font-bold">
                  <span>How should we help you?</span>
                </div>
                <div className="w-full sm:block md:flex">
                  <div className="sm:w-full md:w-full">
                    <textarea
                      className="w-11/12 border-blue-200 border-2 rounded-xl p-4 "
                      name="requirement"
                      id=""
                      cols={40}
                      rows={5}
                      placeholder="Tell us about your requirement"
                      value={requirement}
                      onChange={(e: any) => {
                        setRequirement(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5 mb-5 flex justify-center items-center">
                <button
                  className=" uppercase bg-blue-700 text-white pt-3 pb-3 px-6 font-bold rounded-2xl hover:bg-blue-500"
                  onClick={sendData}
                >
                  {qutationButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomAlert message={alertMessage} onClose={closeAlert} />
      <div className="footerBar bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );

  async function sendData() {
    const data = {
      fname,
      lname,
      mobile,
      email,
      Address1,
      Address2,
      requirement,
    };

    if (fname === "") {
      showAlert("Please enter your first name");
    } else if (lname === "") {
      showAlert("Please set your last name");
    } else if (mobile === "") {
      showAlert("Please set your mobile number");
    } else if (email === "") {
      showAlert("Please set your email address");
    } else if (Address1 === "") {
      showAlert("Please set your address");
    } else if (requirement === "") {
      showAlert("Please set your requirement");
    } else {
      setQutationButton("...Please Wait...");
      await sendEmail(JSON.stringify(data));
      showAlert(
        "Your quotation successfully sent. We will response as soon as possible Thank you!"
      );
    }
  }
};

export default Page;
