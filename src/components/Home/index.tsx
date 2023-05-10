import React from "react";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

const Home: React.FC = () => {
  return (
    <div className="xl:container mx-auto sm:px-6 px-4 pt-4 sm:pt-12">
      <div>
        <h1 className="md:text-4xl text-2xl font-medium">
          iPhone 11 Pro case with cord
        </h1>
      </div>
      <div className="flex mt-6 w-full gap-8 flex-col xl:flex-row">
        <div className=" xl:w-1/2">
          <LeftSideContent />
        </div>
        <div className="xl:w-1/2">
          <RightSideContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
