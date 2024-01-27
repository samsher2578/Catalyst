import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-Primary">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt,
          cum culpa veritatis blanditiis quis, impedit distinctio eum mollitia
          magni quae porro iure voluptas nam nulla ut, magnam repellat. Quam?
        </p>
        <div className="flex justify-between md:w-9/12  my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 mx-10 ">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>

            <li className="py-2 text-sm">home</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>
            <li className="py-2 text-sm">home</li>

            <li className="py-2 text-sm">home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
