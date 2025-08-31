"use client";

import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar.module.css";

const MyNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shdow-sm"
      style={{ minHeight: "80px" }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Arslan Nakliye
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" active={pathname === "/"}>
              Anasayfa
            </Nav.Link>
            <NavDropdown title="Hizmetlerimiz" id="hizmetler-dropdown">
              <NavDropdown.Item
                as={Link}
                href="/our-services/1"
                className={styles.dropdownItem}
              >
                Evden Eve Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/2"
                className={styles.dropdownItem}
              >
                Şehir İçi Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/3"
                className={styles.dropdownItem}
              >
                Şehir Dışı Nakliyat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/4"
                className={styles.dropdownItem}
              >
                Ofis Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/5"
                className={styles.dropdownItem}
              >
                Fabrika Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/6"
                className={styles.dropdownItem}
              >
                Mağaza Taşımacılığı
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/our-services/7"
                className={styles.dropdownItem}
              >
                Eşya Depolama
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/about" active={pathname === "/about"}>
              Hakkımızda
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              active={pathname === "/contact"}
            >
              İletişim
            </Nav.Link>
          </Nav>
          <Button
            variant="success"
            href="https://wa.me/905362002944"
            target="_blank"
            className="ms-3"
          >
            Whatsapp İletişim
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
