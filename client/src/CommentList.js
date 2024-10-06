import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  console.log(postId)

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data); 
  };

  useEffect(() => {
    fetchComments();
  }, []); 

  const renderdComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.content}
      </li>
    );
  });

  return (
    <ul>{renderdComments}</ul>   
  )
};