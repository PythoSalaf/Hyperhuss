import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateGuild, GuildCard, Modal, SlideText } from "../components";
import { GuildData } from "../components/Dummy";

const Guilds = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const SpliceGuild = GuildData.slice(0, 6);
  return (
    <div className="w-full py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">Guilds</h2>
        <button
          className="rounded-3xl py-1 text-sm md:text-base px-2.5 md:px-4 cursor-pointer border border-white "
          onClick={() => setOpen(true)}
        >
          Create Guild
        </button>
      </div>
      <div className="w-full my-5 border-2 border-dotted py-0.5 rounded-xl">
        <div className="w-[95%] mx-auto">
          <SlideText />
        </div>
      </div>
      <div className="">
        <h2 className="text-xl md:text-2xl font-semibold">Trending Guilds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-6">
          {SpliceGuild.map((item) => (
            <GuildCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-9">
        <h2 className="text-xl md:text-2xl font-semibold">All Guilds</h2>
        <div className="w-full my-4 border border-[#dadada] rounded-lg py-2 overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-b-[#dadada]">
              <tr>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  #
                </th>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  Guild
                </th>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  Entry Amount
                </th>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  Members
                </th>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  Volume
                </th>
                <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="w-full text-center">
              {GuildData?.map((data, index) => (
                <tr
                  key={data.guildId}
                  className="w-full border-b border-b-[#dadada]"
                >
                  <td className="py-2 text-sm md:text-base">{index + 1}</td>
                  <td className="py-2 text-sm md:text-base">
                    {/* {data?.guild?.guildName || "Unknown Guild"} */}
                    {data.title}
                  </td>
                  <td className="py-2 text-sm md:text-base font-semibold">
                    <div className=" py-1">
                      {/* {data?.guild?.entryThreshold
                        ? entryThresholdeth(data.guild.entryThreshold)
                        : "0"}{" "} */}
                      {data.amount} HYPE
                    </div>
                  </td>
                  <td className="py-2 text-sm md:text-base">
                    {/* {data?.guild?.memberNames?.length || 0} */}
                    {data.members}
                  </td>
                  <td className="py-2 text-sm md:text-base">
                    {data?.guild?.memberCap?.toString() || "0"}
                  </td>
                  <td className="py-2 text-sm md:text-base px-1 font-semibold">
                    <button
                      className="rounded-2xl cursor-pointer py-1 px-4 bg-white text-[#081423] border border-black hover:bg-transparent hover:text-white hover:border hover:border-white transition ease-in-out"
                      onClick={() => navigate(`/guilds/${data.guildId}`)}
                    >
                      view
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <CreateGuild onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
};

export default Guilds;
