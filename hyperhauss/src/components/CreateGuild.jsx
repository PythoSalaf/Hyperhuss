import { MdClose } from "react-icons/md";

const CreateGuild = ({ onClose }) => {
  return (
    <div className="w-full text-white">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl md:text-2xl">Create Guild</h2>
        <div className="font-bold cursor-pointer" onClick={onClose}>
          <MdClose className="w-5 h-5 md:w-6 md:h-6 " />
        </div>
      </div>
      <div className="w-full flex items-center flex-col gap-3 md:gap-5 mt-3.5 md:mt-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Guild Name"
            className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Creator Name"
            className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
          />
        </div>
      </div>
      <div className="w-full flex items-center flex-col gap-3 md:gap-5 my-3 md:my-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Members Caps (e.g 5)"
            className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Entry Threshold (HYPE, e.g 0.01)"
            className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-5 ">
        <input
          type="text"
          placeholder="Risk Threshold (%, e.g 50)"
          className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
        />
        <textarea
          className="resize-none w-full rounded-xl border border-white h-14 md:h-20 px-2 md:px-4 py-1 md:py-2 placeholder:text-white"
          placeholder="Guild Description"
        ></textarea>
      </div>
      <button className="w-full bg-white text-black mt-4 mb-2 py-1 md:py-1.5 rounded-xl md:text-base text-sm cursor-pointer font-semibold">
        Create Guild
      </button>
    </div>
  );
};

export default CreateGuild;
