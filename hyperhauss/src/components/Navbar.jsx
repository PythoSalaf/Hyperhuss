import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-black flex py-3 md:py-4 items-center border-b border-b-[#dadada] fixed">
      <div className="w-[96%] md:w-[94%] mx-auto flex items-center justify-between ">
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl">
          <h2>HyperHaus</h2>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="">Guilds</Link>
          <Link to="">Trade</Link>
          <Link to="">Swap</Link>
          <Link to="">Dashboard</Link>
        </div>
        <div className="hidden md:block">
          <button className="bg-white rounded-3xl text-black px-4 py-1.5 transition ease-in-out duration-300 hover:text-white hover:bg-amber-700 cursor-pointer">
            Login/signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
