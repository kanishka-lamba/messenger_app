import React from "react";
function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <div className="flex flex-col bg-blue-100 h-screen">
      {friends.map((friend) => (
        <button
          className={`py-5 hover:bg-blue-200 hover:rounded-md my-2 pl-6 pr-32 mx-2 ${
            friend === selectedFriend ? "bg-blue-200" : ""
          }`}
          key={friend}
          onClick={() => onSelectFriend(friend)}
        >
          <div className="flex items-center justify-start">
            <div className="w-16 h-16 bg-blue-950 rounded-full mr-4 text-white text-3xl text-center pt-3">
              {friend[0].toUpperCase()}
            </div>
            {friend}
          </div>
        </button>
      ))}
    </div>
  );
}

export default FriendList;
