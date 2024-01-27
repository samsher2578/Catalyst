const Btn = () => {
  return (
    <button className="bg-Primary w-52 rounded-md font-medium my-6 mx-auto py-3 text-black">
      Get Started
    </button>
  );
};

const Dbtn = () => {
  return (
    <button className="bg-black w-52 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-Primary">
      Get Started
    </button>
  );
};
const Tbtn = () => {
  return (
    <button className="bg-Primary w-52 rounded-md font-medium my-6 mx-auto py-3 text-black">
      Set Trial
    </button>
  );
};

export default Btn;
export { Dbtn, Tbtn };
