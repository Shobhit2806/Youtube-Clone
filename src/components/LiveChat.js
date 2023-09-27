import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: "Shobhit",
          message: "lorem ipsum",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full ml-2 p-2 h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="w-full ml-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON FORM SUBMIT", liveMsg);
          dispatch(
            addMessage({
              name: "Shobhit",
              message:liveMsg,
            })
          );
        }}
      >
        <input
          className="w-96"
          type="text"
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
