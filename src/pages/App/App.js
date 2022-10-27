import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import Blogs from "../Blogs/Blogs";
import FilteredBlogs from "../FilteredBlogs/FilteredBlogs";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <div className="content">
        <PhotoCarousel />
      </div>
      <Routes>
        {/* client-side route that renders the component instance if the path matches the url in the address bar */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:tag" element={<FilteredBlogs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </main>
  );
}
