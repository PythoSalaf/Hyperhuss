import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", type: "received" },
    {
      id: 2,
      text: "I want a chat UI with input fixed at the bottom.",
      type: "sent",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { id: Date.now(), text: input, type: "sent" }]);
    setInput("");
  };

  return (
    <div className="w-full flex flex-col  bg-gray-900 text-white py-5">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) =>
          msg.type === "sent" ? (
            <div key={msg.id} className="flex justify-end">
              <div className="bg-blue-600 px-4 py-2 text-sm md:text-base rounded-2xl rounded-br-none max-w-[75%]">
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex">
              <div className="bg-gray-700 px-4 text-sm md:text-base py-2 rounded-2xl rounded-bl-none max-w-[75%]">
                {msg.text}
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-2 flex px-2 md:px-5 sticky bottom-0">
        {/* {isMember && ( */}
        {/* <button
          className="bg-[#2ecc71] text-white p-2 rounded-l-lg hover:bg-[#27ae60] cursor-pointer"
          // onClick={() => handleAction("propose")}
        >
          Propose Trade
        </button> */}
        {/* )} */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a trading tip..."
          className="flex-1 p-2 border border-gray-700 rounded-none focus:outline-none bg-gray-800 text-white"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
