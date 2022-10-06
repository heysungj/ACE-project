import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import Admin from "../Admin/Admin";
import OrderHistoryPage from "../Blogs/Blogs";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/blogs" element={<OrderHistoryPage />} />
        </Routes>
      </>
    </main>
  );
}
