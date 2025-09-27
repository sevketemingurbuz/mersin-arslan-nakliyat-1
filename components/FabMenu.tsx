"use client";

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaWhatsapp, FaPhone, FaPlus, FaTimes } from "react-icons/fa";

const FabMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab-menu d-md-none">
      // whatsapp
      <Button
        variant="success"
        className={`fab-button whatsapp ${isOpen ? "show" : ""}`}
        href="https://wa.me/905385147597"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim kur"
        style={{
          position: "fixed",
          bottom: isOpen ? "120px" : "80px",
          left: "20px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1)" : "scale(0)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <FaWhatsapp size={24} />
      </Button>

      // phone
      <Button
        variant="primary"
        className={`fab-button phone ${isOpen ? "show" : ""}`}
        href="tel:+905385147597"
        aria-label="Telefon ile ara"
        style={{
          position: "fixed",
          bottom: isOpen ? "180px" : "80px",
          left: "20px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1)" : "scale(0)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <FaPhone size={20} />
      </Button>

      // fab menu main
      <Button
        variant="dark"
        className="fab-main"
        onClick={toggleMenu}
        aria-label={isOpen ? "Menüyü kapat" : "İletişim menüsünü aç"}
        aria-expanded={isOpen}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
          zIndex: 1001,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
      </Button>

      // backdrop
      {isOpen && (
        <div
          className="fab-backdrop"
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.1)",
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default FabMenu;