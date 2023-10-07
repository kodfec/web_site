import Image from "next/image";
import background from "/public/res/2825704.gif";
import NavBar from "./component/NavBar";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import Card4 from "./component/Card4";
import Footer from "./component/Footer";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="portfolioBody">
      <NavBar />

      <div>
        <div className="card-image">
          <div>
            <Image
              src={background}
              alt="background"
              className="w-full h-screen object-cover object-center absolute top-0 left-0"
            />

            <div className=" rounded-md bg-transparent wordcontent max-sm:top-32 sm:top-32 md:top-52 backdrop-blur-lg">
              <span className=" font-bold text-lg mb-10 mainspan">
                Powering Possibilities through Innovative Code
              </span>
              <p className=" ml-7 mt-4">
                Using innovative and cutting-edge coding techniques to create
                software solutions that open up new possibilities for businesses
                and individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="card max-sm:relative bg-white shadow-2xl">
          <Card2 />
        </div>

        <div className="card max-sm:relative bg-blue-50 shadow-2xl">
          <Card3 />
        </div>

        <div className="card max-sm:relative bg-white shadow-2xl">
          <Card4 />
        </div>
      </div>

      <div className="footerBar">
        <Footer />
      </div>
    </div>
  );
}
