"use client";

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaWhatsapp, FaPhone, FaTimes, FaHeadset } from "react-icons/fa";

const FabMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navbar linklerine tıklandığında fab menüyü kapat
  useEffect(() => {
    const handleNavLinkClick = () => {
      closeMenu();
    };

    // Custom event listener ekle
    window.addEventListener('navLinkClicked', handleNavLinkClick);

    return () => {
      window.removeEventListener('navLinkClicked', handleNavLinkClick);
    };
  }, []);

  return (
    <div className="fab-menu d-md-none">
      {/*whatsapp*/}
      <Button
        variant="success"
        className={`fab-button whatsapp ${isOpen ? "show" : ""}`}
        href="https://wa.me/905385147597"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim kur"
        style={{
          position: "fixed",
          bottom: isOpen ? "140px" : "80px",
          left: "30px",
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

      {/*phone - 1*/}
      <Button
        variant="primary"
        className={`fab-button phone-1 ${isOpen ? "show" : ""}`}
        href="tel:+905385147597"
        aria-label="Cep telefonu 1"
        title="Cep Telefonu 1"
        style={{
          position: "fixed",
          bottom: isOpen ? "200px" : "80px",
          left: "30px",
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
        <div style={{ position: "relative" }}>
          <FaPhone size={20} />
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            backgroundColor: "#fff",
            color: "#007bff",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            border: "2px solid #007bff"
          }}>1</span>
        </div>
      </Button>

      {/*phone - 2*/}
      <Button
        variant="primary"
        className={`fab-button phone-2 ${isOpen ? "show" : ""}`}
        href="tel:+905510346582"
        aria-label="Cep telefonu 2"
        title="Cep Telefonu 2"
        style={{
          position: "fixed",
          bottom: isOpen ? "260px" : "80px",
          left: "30px",
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
        <div style={{ position: "relative" }}>
          <FaPhone size={20} />
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            backgroundColor: "#fff",
            color: "#007bff",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            border: "2px solid #007bff"
          }}>2</span>
        </div>
      </Button>

      {/* fab menu main*/}
      <Button
        variant="dark"
        className="fab-main"
        onClick={toggleMenu}
        aria-label={isOpen ? "Menüyü kapat" : "İletişim menüsünü aç"}
        aria-expanded={isOpen}
        style={{
          position: "fixed",
          bottom: "50px",
          left: "35px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
          zIndex: 1001,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          backgroundColor: isOpen ? "#d31d1d" : "green",
          border: isOpen ? "none" : "1px solid #1c972a",
        }}
      >
        {isOpen ? (
          <FaTimes style={{ color: "#fff" }} size={24} />
        ) : (
          <FaHeadset size={24} />
        )}
      </Button>

      {/*backdrop*/}
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
