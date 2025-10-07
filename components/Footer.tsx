"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <div className="d-flex justify-content-center justify-content-md-start mb-2">
              <img
                src="/logo/abMainLgGold.png"
                alt="Arslan Nakliyat Logo"
                className={styles.logo}
              />
            </div>
            <p className="mt-2">
              Yılların verdiği tecrübe ile eşyalarınızı güvenle taşıyoruz.
              Profesyonel ve sigortalı nakliye hizmetlerimizle daima
              yanınızdayız.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <Link
                href={"https://www.instagram.com/mersinarslannakliyat/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaFacebook />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaTwitter />
              </Link>

              <Link
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaLinkedin />
              </Link>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-3">Hızlı Erişim</h5>
            <Nav className="flex-column">
              <Link href="/" className="text-white">
                Anasayfa
              </Link>
              <Link href="/our-services" className="text-white">
                Hizmetlerimiz
              </Link>
              <Link href="/about" className="text-white">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-white">
                İletişim
              </Link>
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-3">İletişim</h5>
            <address>
              <strong>Adres:</strong> Mevlana Mahallesi 101038 Sokak No:13/4{" "}
              <b>Toroslar/Mersin</b>
              <br />
              <strong>Telefon:</strong> +90 538 514 75 97 <br />
              <strong>E-posta:</strong> arslanakliyatevdeneve@gmail.com
            </address>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Mersin Arslan Nakliyat. Tüm
              hakları saklıdır.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
