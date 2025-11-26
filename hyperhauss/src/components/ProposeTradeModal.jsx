import { MdClose } from "react-icons/md";
const ProposeTradeModal = ({ onClose }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg md:text-xl">Propose Trade</h2>
        <div className="font-bold cursor-pointer" onClick={onClose}>
          <MdClose className="w-5 h-5 md:w-6 md:h-6 " />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-start flex-col ">
          <label className="mb-2">Amount(ETH)</label>
          <input
            type="number"
            className="border border-white rounded-xl py-1 md:py-1.5 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold"
            placeholder="Max 0.002"
          />
        </div>
        <div className="flex items-start flex-col mt-4">
          <label className="mb-2">Description</label>
          <textarea
            type="number"
            className="border border-white rounded-xl py-1 md:py-2 w-full px-3 outline-0 placeholder:text-white placeholder:text-sm placeholder:font-semibold resize-none h-24"
            placeholder="Describe the trade"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-1">
        <button className="bg-white text-black px-4 py-1 md:py-1.5 text-sm md:text-base font-semibold rounded-3xl cursor-pointer border border-black hover:bg-transparent hover:text-white hover:border hover:border-white">
          Propose Trade
        </button>
      </div>
    </div>
  );
};

export default ProposeTradeModal;
