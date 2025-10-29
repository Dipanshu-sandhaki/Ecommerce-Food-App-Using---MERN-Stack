import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  // 1. State ko Navbar se yahan move kiya
  const [menu, setMenu] = useState("home"); // Default "home" hai

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        {/* 2. State aur setter dono Navbar ko pass kiye */}
        <Navbar
          menu={menu}
          setMenu={setMenu}
          setShowLogin={setShowLogin}
        />
        <Routes>
          {/* 3. Setter function ko Home page ko pass kiya */}
          <Route path="/" element={<Home setMenu={setMenu} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
