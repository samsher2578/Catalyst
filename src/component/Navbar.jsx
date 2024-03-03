import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
const Navbar = () => {
  const [isNav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!isNav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-Primary">Catalyst</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Service</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!isNav ? (
          <VscClose color="#00df9a" size={25} />
        ) : (
          <CgMenuGridO color="#00df9a" size={25} />
        )}
      </div>
      <div
        className={
          !isNav
            ? "fixed left-0 top-0 w-3/5 h-full boredr-r border-r-gray-900 bg-Background px-4 ease-in-out duration-500 bg-black "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-Primary mt-8">Catalyst</h1>
        <ul className="pt-20 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Service</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
