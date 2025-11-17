import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const active =
    "bg-white text-black py-1 px-4 md:text-base rounded-md lg:text-lg font-semibold flex items-center gap-x-3";
  const inactive =
    "md:text-sm lg:text-base py-1 px-4 rounded-md font-semibold flex items-center gap-x-4 hover:bg-white hover:text-black md:text-base lg:text-lg font-semibold";
  return (
    <div className="w-full py-1.5 border-r border-r-[#dadada] h-screen">
      <div className="w-[80%] mx-auto">
        <Link to="/">
          <h2 className="md:text-2xl lg:text-3xl font-bold">HyperHaus</h2>
        </Link>

        <div className="w-full mt-20 flex flex-col gap-y-6">
          <NavLink
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            <div className="bg-black w-4 h-4"></div>
            Guilds
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? active : inactive}`}
          >
            Trade
          </NavLink>
          <NavLink>Leaderboards</NavLink>
          <NavLink>Reward</NavLink>
          <NavLink>Swap</NavLink>
          <NavLink>Dashboard</NavLink>
        </div>
        <div className="mt-22">
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
