import laptop from "../assets/laptop.jpg";
import { Dbtn } from "./Btn";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2">
        <img
          src={laptop}
          alt="analytics image"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center mx-4x">
          <p className="text-Primary font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            accusamus enim consequatur accusantium quae recusandae voluptate
            facere culpa deleniti rerum perspiciatis, adipisci aut corporis
            eaque fugit dignissimos similique tempore. Odit!
          </p>
          <Dbtn />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
