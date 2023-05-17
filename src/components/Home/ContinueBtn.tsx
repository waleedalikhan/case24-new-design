import React from "react";

type Props = {
  onClick?: () => void;
  title: string;
  svgIcon: React.ReactNode;
};

const ContinueBtn: React.FC<Props> = ({ onClick, title, svgIcon }) => {
  return (
    <div>
      <button
        className="bg-primary h-10 w-full text-white rounded-xl flex justify-center items-center gap-2"
        onClick={onClick}
      >
        <span className="font-workSans">{title}</span>
        <div>{svgIcon}</div>
      </button>
    </div>
  );
};
export default ContinueBtn;
