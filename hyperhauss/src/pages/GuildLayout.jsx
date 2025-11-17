import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components";

const GuildLayout = () => {
  return (
    <div className="w-full flex items-start">
      <div className="hidden md:block md:w-[20%] lg:w-[15%]  h-screen fixed">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] lg:w-[85%] bg-red-500 ml-auto">
        <Topbar />
        <div className="w-[98%] md:w-[96%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuildLayout;
