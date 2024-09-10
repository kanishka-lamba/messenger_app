import React, { useState } from "react";
function ChatWindow({ messages, onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="py-5 bg-blue-50 h-screen w-screen px-24 flex flex-col-reverse justify-end">
      {/* Input and Button */}
      <div className="flex items-center space-x-3 mt-4">
        <input
          className="border border-gray-300 rounded-md p-2 flex-grow py-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-28"
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      {/* Message List */}
      <div className="flex flex-col justify-end flex-grow overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className="flex justify-end mb-2">
            <p className="bg-blue-700 text-white p-3 rounded-lg max-w-xs text-sm break-words">
              {msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ChatWindow;
