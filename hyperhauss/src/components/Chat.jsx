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
    <div className="w-full flex flex-col  bg-gray-900 text-white">
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

      {/* Input */}
      <div className="w-full  bg-gray-800 border-t border-gray-700 flex items-center gap-3 sticky bottom-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-xl bg-gray-700 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
