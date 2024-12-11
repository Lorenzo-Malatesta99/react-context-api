import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetailPage from "./pages/PostsPage/DetailPage";
import Navbar from "./components/Navbar";
import { PostsProvider } from "./context/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/blog/:id" element={<PostDetailPage />} />
      </Routes>
    </PostsProvider>
  );
};

export default App;
