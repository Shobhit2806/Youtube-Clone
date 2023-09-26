import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 rounded-lg p-2 my-2">
      <img
        className="h-12 w-12"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p> {text}</p>
      </div>
    </div>
  );
};

export default Comment;
