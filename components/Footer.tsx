'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-3">Nakliye Firması</h5>
            <p>
              Yılların verdiği tecrübe ile eşyalarınızı güvenle taşıyoruz. Profesyonel ve sigortalı
              nakliye hizmetlerimizle daima yanınızdayız.
            </p>
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
    <FaFacebook />
  </Link>
  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
    <FaTwitter />
  </Link>
  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
    <FaInstagram />
  </Link>
  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
    <FaLinkedin />
  </Link>
</div>
</Col>

<Col md={4} className="text-center text-md-start">
  <h5 className="mb-3">Hızlı Erişim</h5>
  <Nav className="flex-column">
    <Link href="/" className="text-white">Anasayfa</Link>
    <Link href="/hizmetler" className="text-white">Hizmetlerimiz</Link>
    <Link href="/hakkimizda" className="text-white">Hakkımızda</Link>
    <Link href="/iletisim" className="text-white">İletişim</Link>
  </Nav>
</Col>
          
          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-3">İletişim</h5>
            <address>
              <strong>Adres:</strong> Örnek Mahallesi, Örnek Sokak No: 123, Kadıköy/İstanbul<br />
              <strong>Telefon:</strong> (0212) 123 45 67<br />
              <strong>E-posta:</strong> info@nakliyefirmasi.com.tr
            </address>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Nakliye Firması. Tüm hakları saklıdır.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;