import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
import { Tbtn } from "./Btn";
const Cards = () => {
  return (
    <div className="w-full py-40 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={single}
            className="w-20 mx-auto mt-[-3rem] bg-transparent  bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8"> send up to 2GB</p>
          </div>
          <Tbtn />
        </div>
        <div className="w-full shadow-xl bg-gray-100 md:my-0 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={double}
            className="w-20 mx-auto mt-[-3rem] bg-transparent  bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1.5TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8"> send up to 5GB</p>
          </div>
          <button className="bg-black w-52 rounded-md font-medium my-6 mx-auto py-3 text-Primary">
            Set Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={triple}
            className="w-20 mx-auto mt-[-3rem] bg-transparent  bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$449</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">3TB Storage</p>
            <p className="py-2 border-b mx-8">5 Granted User</p>
            <p className="py-2 border-b mx-8"> send up to 10GB</p>
          </div>
          <Tbtn />
        </div>
      </div>
    </div>
  );
};

export default Cards;
