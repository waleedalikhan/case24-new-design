import React from "react";
import mobileImg from "../../assets/img/mobile-img.png";

const LeftSideContent: React.FC = () => {
  return (
    <>
      <div className="bg-white w-full h-[400px] md:h-[750px] flex items-center justify-center rounded-lg mb-6">
        <div className="flex items-center justify-center p-12">
          <img src={mobileImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default LeftSideContent;
