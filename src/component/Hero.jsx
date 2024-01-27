import { ReactTyped } from "react-typed";
import Btn from "./Btn";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-screen-md mt-24 w-full h-screen mx-auto text-center flex flex-col">
        <p className="text-Primary font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, Flexible Financing For
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-Primary"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500 py-3">
          Monitor your data analytics to increase for BTB, BTC & SASS platforms.
        </p>
        <Btn />
      </div>
    </div>
  );
};

export default Hero;
