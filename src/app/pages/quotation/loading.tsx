import Image from "next/image";
import Logo from "/public/res/kodfec logo (1024 × 1024px).svg";

function loading() {
  return (
    <div className="page-container flex justify-center items-center bodyPage">
         <Image src={Logo} alt="logo" width={400} className="loadingLogo animate-pulse" />
      <div className="e-loadholder">
        <div className="m-loader">
          <span className="e-text">Loading</span>
        </div>
      </div>
    </div>
  );
}

export default loading;
