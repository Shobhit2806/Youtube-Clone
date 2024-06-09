import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shobhit",
      text: "lorem ipusk faabf",
      replies: [
        {
          name: "Shobhit",
          text: "lorem ipusk nested",
          replies: [
            {
              name: "Shobhit",
              text: "lorem ipusk faabf",
              replies: [
                {
                  name: "Shobhit",
                  text: "lorem ipusk nested",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shobhit",
      text: "lorem ipusk faabf",
      replies: [{
        name: "Shobhit",
        text: "lorem ipusk faabf",
        replies: [],
      }],
    },
    {
      name: "Shobhit",
      text: "lorem ipusk faabf",
      replies: [],
    },
    {
      name: "Shobhit",
      text: "lorem ipusk faabf",
      replies: [],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
