import { Chart } from "../components";

const Trade = () => {
  return (
    <div className="w-full">
      <div className="flex items-start w-full flex-col gap-7 md:flex-row">
        <div className="bg-white w-full md:w-[70%] py-3 rounded-lg">
          <div className="w-[96%] mx-auto">
            <Chart />
          </div>
        </div>
        <div className="bg-white w-full md:w-[30%] py-3"></div>
      </div>
      <div className="mt-20">
        <h2>Trade</h2>
      </div>
    </div>
  );
};

export default Trade;
