import React from "react";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

const Home: React.FC = () => {
  return (
    <div className="xl:container mx-auto sm:px-6 px-4 pt-4 sm:pt-12">
      <div className="flex mt-6 w-full gap-8 flex-col xl:flex-row">
        <div className="xl:w-1/2">
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
