"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const MyNavbar = () => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("basic-navbar-nav");
    if (navbarCollapse) {
      // close dropdown
      if (navbarCollapse.classList.contains("show")) {
        const toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
        if (toggleButton) {
          toggleButton.click();
        }
      }
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shdow-lg"
      style={{ minHeight: "100px" }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo/artBoard1.png"
            alt="Logo"
            width={120}
            height={110}
            style={{ objectFit: "contain" }}
            priority
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              href="/"
              active={pathname === "/"}
              className="px-3 fs-5"
              onClick={handleLinkClick}
            >
              Anasayfa
            </Nav.Link>
            <NavDropdown
              title="Hizmetlerimiz"
              id="hizmetler-dropdown"
              className="px-3 fs-5"
            >
              <NavDropdown.Item
                as={Link}
                href="/our-services/1"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Evden Eve Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/2"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Şehir İçi Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/3"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Şehir Dışı Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/4"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Ofis Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/5"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Fabrika Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/6"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Mağaza Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/7"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Eşya Depolama
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              href="/about"
              active={pathname === "/about"}
              className="px-3 fs-5"
              onClick={handleLinkClick}
            >
              Hakkımızda
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              active={pathname === "/contact"}
              className="px-3 fs-5"
              onClick={handleLinkClick}
            >
              İletişim
            </Nav.Link>
          </Nav>
          <Button
            variant="success"
            href="https://wa.me/905362002944"
            target="_blank"
            className="ms-3"
            onClick={handleLinkClick}
          >
            Whatsapp İletişim
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;