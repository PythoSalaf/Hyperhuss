import { useState } from "react";
import { Chat, Modal, ProposeTradeModal, TopUpStakeModal } from "../components";

const GuildDetails = () => {
  const [join, setJoin] = useState(false);
  const [openProposeModal, setOpenProposeModal] = useState(false);
  const [openTopupModal, setOpenTopupModal] = useState(false);
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold">Guild Details</h2>
      <div className="w-full border border-dashed mt-5 py-3 rounded-lg">
        <div className="w-[97%] mx-auto flex items-start gap-4 md:gap-8 flex-col md:flex-row">
          <div className="border border-dashed border-[#dadada] rounded-xl py-2 w-full">
            <div className="w-[94%] mx-auto">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-sm md:text-base  font-semibold">
                  Guild Name:
                </h3>
                <h3 className="text-sm md:text-base  font-semibold">
                  Delta Sensitive
                </h3>
              </div>
              <div className="w-full flex items-center justify-between my-3">
                <h3 className="text-sm md:text-base  font-semibold">
                  Guild Creator:
                </h3>
                <h3 className="text-sm md:text-base  font-semibold">Pytho</h3>
              </div>
              <div className="w-full flex items-center justify-between ">
                <h3 className="text-sm md:text-base  font-semibold">
                  Creator Address:
                </h3>
                <h3 className="text-sm md:text-base  font-semibold">
                  0x8438.....09383
                </h3>
              </div>
              <div className="w-full flex items-center justify-between my-3">
                <h3 className="text-sm md:text-base  font-semibold">
                  Guild Pool:
                </h3>
                <h3 className="text-sm md:text-base  font-semibold">10 HYPE</h3>
              </div>
              <div className="w-full flex items-center justify-between my-3">
                <h3 className="text-sm md:text-base  font-semibold">
                  Risk Threshold:
                </h3>
                <h3 className="text-sm md:text-base  font-semibold">40%</h3>
              </div>
            </div>
          </div>
          <div className="w-full border border-dashed border-[#dadada] rounded-xl py-2">
            <div className="w-[94%] mx-auto py-2">
              <div className="w-full border border-[#dadada] rounded-md h-28 py-2">
                <p className="w-[95%] mx-auto text-xs md:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, nisi ab. Maiores inventore enim voluptas rem quasi
                  numquam pariatur nemo quidem impedit, a, aliquam beatae minima
                  quia nulla consequatur expedita.
                </p>
              </div>
              <div className="mt-4 w-full">
                {join ? (
                  <div className="flex items-center w-full gap-4">
                    <button className="bg-green-600 text-white w-full py-1 text-sm md:text-base font-semibold rounded-3xl cursor-pointer">
                      Top up stake
                    </button>
                    <button className="bg-red-600 text-white w-full py-1 text-sm md:text-base font-semibold rounded-3xl cursor-pointer">
                      Withdraw stake
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full bg-white  text-black font-semibold border border-black text-sm md:text-base cursor-pointer rounded-3xl py-1 hover:bg-transparent hover:text-white hover:border hover:border-white "
                    onClick={() => setJoin(true)}
                  >
                    Join Guild
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 py-2 rounded-lg border border-[#dadada] w-full">
        <div className="w-[96%] mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl">All Members</h2>
          <div className="w-full my-4 border border-[#dadada] rounded-lg py-2 overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-b-[#dadada]">
                <tr>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    #
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Name
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Address
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Members
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Stake
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Caps
                  </th>
                </tr>
              </thead>
              {/* <tbody className="w-full text-center">
                {guild.memberNames?.map((name, index) => (
                  <tr
                    key={index}
                    className="w-full border-b border-b-[#dadada]"
                  >
                    <td className="py-2 text-sm md:text-base">{index + 1}</td>
                    <td className="py-2 text-sm md:text-base">
                      {name || "Unknown"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberAddresses[index]
                        ? `${guild.memberAddresses[index].slice(
                            0,
                            6
                          )}...${guild.memberAddresses[index].slice(-4)}`
                        : "N/A"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberNames.length}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberStakes[index]
                        ? entryThresholdeth(guild.memberStakes[index])
                        : "0"}{" "}
                      ETH
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberCap ? guild.memberCap.toString() : "0"}
                    </td>
                  </tr>
                )) || (
                  <tr>
                    <td colSpan="6" className="py-2 text-sm md:text-base">
                      No members found
                    </td>
                  </tr>
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
      <div className="my-5 py-2 rounded-lg border border-[#dadada] w-full">
        <div className="w-[96%] mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl">Trade Proposals</h2>
          <div className="w-full my-4 border border-[#dadada] rounded-lg py-2 overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-b-[#dadada]">
                <tr>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    #
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Trader
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Amount
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Description
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Status
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Votes (Yes/Total)
                  </th>
                </tr>
              </thead>
              {/* <tbody className="w-full text-center">
                {proposals?.map((proposal, index) => (
                  <tr
                    key={index}
                    className="w-full border-b border-b-[#dadada]"
                  >
                    <td className="py-2 text-sm md:text-base">{index + 1}</td>
                    <td className="py-2 text-sm md:text-base">
                      {proposal.trader
                        ? `${proposal.trader.slice(
                            0,
                            6
                          )}...${proposal.trader.slice(-4)}`
                        : "N/A"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {proposal.amount
                        ? entryThresholdeth(proposal.amount)
                        : "0"}{" "}
                      ETH
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {proposal.descript || "No description"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {proposal.fulfilled
                        ? "Fulfilled"
                        : proposal.executed
                        ? "Executed"
                        : proposal.approved
                        ? "Approved"
                        : "Pending"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {proposal.yesVotes}/{proposal.totalVotes}
                    </td>
                  </tr>
                )) || (
                  <tr>
                    <td colSpan="6" className="py-2 text-sm md:text-base">
                      No trade proposals found
                    </td>
                  </tr>
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
      <div className="w-full border mt-10 border-[#dadada] rounded-xl py-2 mb-3">
        <div className="w-[94%] mx-auto py-2">
          <h2 className="font-semibold text-xl md:text-2xl">Guild Chat Room</h2>
          <div className="mt-6">
            <Chat />
          </div>
        </div>
      </div>
      <div className="">
        <Modal
          isOpen={openProposeModal}
          onClose={() => setOpenProposeModal(false)}
        >
          <ProposeTradeModal onClose={() => setOpenProposeModal(false)} />
        </Modal>
      </div>
      <div className="">
        <Modal isOpen={openTopupModal} onClose={() => setOpenTopupModal(false)}>
          <TopUpStakeModal onClose={() => setOpenTopupModal(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default GuildDetails;
