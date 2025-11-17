import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full bg-white py-2 text-black">
      <div className="w-[96%] mx-auto flex items-center justify-between">
        <Link to="/" className="block md:hidden">
          <h2 className="text-xl  font-bold">HyperHaus</h2>
        </Link>
        <div className="">
          <div className="hidden md:block">
            <input
              type="search"
              className="border border-black px-3 py-1 rounded-md outline-0"
            />
          </div>
        </div>
        <div className="">
          <p className="">animating slide</p>
        </div>
        <div className="hidden md:block">
          <div className="bg-black rounded-full h-5 w-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
