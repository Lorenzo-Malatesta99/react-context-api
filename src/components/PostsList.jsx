import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-3 d-flex align-items-stretch">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
