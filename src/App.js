import React, { useState } from "react";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";

function App() {
  const friends = ["Alice", "Bob", "Charlie"];
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({
    Alice: [],
    Bob: [],
    Charlie: [],
  });

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedFriend]: [...prevMessages[selectedFriend], message],
    }));
  };

  return (
    <div className="flex">
      <FriendList
        friends={friends}
        onSelectFriend={setSelectedFriend}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && (
        <ChatWindow
          messages={messages[selectedFriend]}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}

export default App;
