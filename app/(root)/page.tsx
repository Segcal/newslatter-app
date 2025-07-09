import PrimaryButton from "@/components/atoms/primaryButton";
import { FiChevronRight } from "react-icons/fi";

const LandingPage = () => {
  const title = " Effortlessly Connect & Engage with Your Audience";
  const description =
    "Newsletter Hub empowers creators, businesses, and communities to build a loyal readership, design stunning email campaigns, and deliver their message with impact";

  return (
    <>
      <div className="flex justify-center items-center">
        <p className="text-base inline-flex items-center gap-3  bg-gradient-to-r from-purple-500/20 font-medium to-blue-500/20 text-purple-200  px-6 py-1 rounded-full ">
          Launch Your Message 🚀 Newsletter Hub Is Here!{" "}
          <span>
            <FiChevronRight />
          </span>{" "}
        </p>
      </div>
      <div className="flex justify-center items-center flex-col mt-2 px-4">
        <h1 className="text-3xl md:text-6xl lg:text-7xl md:w-2/4 font-bold text-center mt-10 mb-5 text-purple-200">
          {title}
        </h1>
        <p className="md:w-1/2 text-center md:text-xl text-base text-purple-200 my-4">
          {description}
        </p>
      <div className="flex gap-4 items-center mt-4 ">
          <PrimaryButton>
          Get Started
        </PrimaryButton>
        <button className="flex items-center cursor-pointer gap-2 text-purple-900 capitalize  bg-purple-200 px-4 py-2 rounded-full hover:bg-purple-600/20 hover:text-purple-200  transition-colors duration-300">
          learn more
          <span>
            <FiChevronRight />
          </span>
        </button>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
