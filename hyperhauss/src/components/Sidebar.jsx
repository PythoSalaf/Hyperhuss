import { Link, NavLink } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { FaAward, FaChartLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { PiSwapBold } from "react-icons/pi";

const Sidebar = () => {
  const active =
    "bg-white text-black py-1 px-4 md:text-base rounded-md lg:text-lg font-semibold flex items-center gap-x-3";
  const inactive =
    "md:text-sm lg:text-base py-1 px-4 rounded-md font-semibold flex items-center gap-x-4 hover:bg-white hover:text-black md:text-base lg:text-lg font-semibold";
  return (
    <div className="w-full py-1.5 border-r border-r-[#dadada] h-screen">
      <div className="w-[80%] mx-auto">
        <Link to="/">
          <h2 className="md:text-2xl lg:text-3xl font-semibold">HyperHaus</h2>
        </Link>

        <div className="w-full mt-20 flex flex-col gap-y-4">
          <NavLink
            to="/guilds"
            end
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <AiFillProduct className="w-5 h-5" />
            Guilds
          </NavLink>
          <NavLink
            to="/guilds/trade"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <FaChartLine className="w-5 h-5" />
            Trade
          </NavLink>

          <NavLink
            to="/guilds/reward"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <IoGiftSharp />
            Reward
          </NavLink>
          <NavLink
            to="/guilds/swap"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <PiSwapBold />
            Swap
          </NavLink>
          <NavLink
            to="/guilds/leaderboard"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <FaAward className="h-6 w-6" />
            Leaderboard
          </NavLink>
        </div>
        <div className="mt-16">
          <div className="w-full bg-white text-black py-1.5 rounded-3xl shadow flex items-center justify-center">
            <p className="font-semibold md:text-sm lg:text-base">
              0x8438.....09383
            </p>
          </div>
          <button className="cursor-pointer mt-6 border border-[#dadada] rounded-3xl w-full py-1.5 hover:bg-white hover:text-black">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
