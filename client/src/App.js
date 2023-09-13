/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { Routes, Route } from "react-router-dom";
import { PostPage } from "./pages/PostPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import { CreatePost } from "./pages/CreatePost";
import { SinglePostPage } from "./pages/SinglePostPage";
import { EditPost } from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
