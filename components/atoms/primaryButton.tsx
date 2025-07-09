import { ReactNode, MouseEventHandler } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return (
    <button
      className="hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all hover:scale-105 cursor-pointer bg-indigo-600 ease-in duration-300  text-white font-bold py-2 px-6 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default PrimaryButton;