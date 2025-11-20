import { useState } from "react";
import { Chart } from "../components";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("sell");
  const tab = [
    {
      id: "sell",
      label: "Sell",
    },
    {
      id: "buy",
      label: "Buy",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-start w-full flex-col gap-7 md:flex-row">
        <div className="bg-white w-full md:w-[70%] py-3 rounded-lg">
          <div className="w-[96%] mx-auto">
            <Chart />
          </div>
        </div>
        <div className="bg-white w-full md:w-[30%] py-3 rounded-lg">
          <div className="w-[90%] mx-auto">
            <div className="flex items-center w-full gap-1.5 md:gap-3 bg-black shadow-2xl rounded-3xl">
              {tab.map((item) => (
                <button
                  key={item.id}
                  className={`w-full cursor-pointer text-white text-xs md:text-sm lg:text-base rounded-3xl md:font-semibold px-2 md:px-3 py-0.5 md:py-1 
        ${
          activeTab === item.id
            ? item.id === "sell"
              ? "bg-red-700"
              : "bg-green-700"
            : "bg-transparent"
        }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6 text-black">
              {activeTab === "sell" ? (
                <div className="">Sell</div>
              ) : (
                <div className="">Buy</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2>Analyse Trade</h2>
      </div>
    </div>
  );
};

export default Trade;
