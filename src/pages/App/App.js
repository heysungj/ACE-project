import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import Admin from "../Admin/Admin";
import Blogs from "../Blogs/Blogs";
import FilteredBlogs from "../FilteredBlogs/FilteredBlogs";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <div className="content">
          <PhotoCarousel />
        </div>
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/blogs" element={<Blogs user={user} />} />
          <Route path="/blogs/:tag" element={<FilteredBlogs />} />
        </Routes>
        <Footer />
      </>
    </main>
  );
}
