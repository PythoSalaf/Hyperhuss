import { MdClose } from "react-icons/md";

const JoinGuildModal = ({ onClose }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg md:text-xl">Join GuildName</h2>
        <div className="font-bold cursor-pointer" onClick={onClose}>
          <MdClose className="w-5 h-5 md:w-6 md:h-6 " />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-start flex-col ">
          <label className="mb-2">Member Name</label>
          <input
            type="text"
            className="border border-white rounded-xl py-1 md:py-1.5 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex items-start flex-col my-6">
          <label className="mb-2">Entry Threshold</label>
          <input
            type="number"
            className="border border-white rounded-xl py-1 md:py-1.5 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
            placeholder="0.0001"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-1">
        <button className="bg-white text-black px-8 py-1 md:py-1.5 text-sm md:text-base font-semibold rounded-3xl cursor-pointer border border-black hover:bg-transparent hover:text-white hover:border hover:border-white">
          Join Guild
        </button>
      </div>
    </div>
  );
};

export default JoinGuildModal;
