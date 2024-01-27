const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 ">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-5">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black mr-3"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-Primary w-52 rounded-md font-medium ml-0  my-6 px-6 py-3 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care out protection of your data. Read our
            <span className="text-Primary"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
