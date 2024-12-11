import React from "react";
import PostsList from "../../components/PostsList";

const PostsPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">I Miei Post</h1>
      <PostsList />
    </div>
  );
};

export default PostsPage;
