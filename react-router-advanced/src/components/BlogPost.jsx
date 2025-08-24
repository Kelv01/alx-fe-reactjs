import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Now showing blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
