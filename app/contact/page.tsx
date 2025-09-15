import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Badge } from 'react-bootstrap';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'İletişim | Nakliye Firması',
  description: 'Bize ulaşın. Adres, telefon, e-posta bilgileri ve iletişim formu.',
};

const ContactPage = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">İletişim</Badge>
          <h1 className="display-4 fw-bold text-dark mb-4">Bizimle İletişime Geçin</h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Nakliye ihtiyaçlarınız için 7/24 hizmetinizdeyiz. Hemen iletişime geçin, size en uygun çözümü sunalım.
          </p>
        </div>

        <Row className="g-4">
          {/* Contact Info Card */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <CardTitle className="fw-bold text-primary mb-4 fs-3">
                  <i className="fas fa-phone me-2"></i>
                  İletişim Bilgileri
                </CardTitle>
                
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Adres</h6>
                      <p className="text-muted mb-0">Örnek Mahallesi, Örnek Sokak No: 123, Kadıköy/İstanbul</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-phone text-success"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Telefon</h6>
                      <p className="text-muted mb-0">(0212) 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-envelope text-info"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">E-posta</h6>
                      <p className="text-muted mb-0">info@nakliyefirmasi.com.tr</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fab fa-whatsapp text-warning"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">WhatsApp</h6>
                      <p className="text-muted mb-0">+90 5xx xxx xx xx</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-4">
                  <h6 className="fw-bold mb-3">
                    <i className="fas fa-map me-2"></i>
                    Konumumuz
                  </h6>
                  <div className="rounded-3 overflow-hidden shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.9602511475!2d28.73199852206894!3d41.00498226068222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa75e0541d113%3A0xe5a363f82e88a38a!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1678255955113!5m2!1str!2str"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <CardTitle className="fw-bold text-primary mb-4 fs-3">
                  <i className="fas fa-paper-plane me-2"></i>
                  Mesaj Gönderin
                </CardTitle>
                <ContactForm />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Working Hours */}
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <Card className="border-0 shadow-sm">
              <CardBody className="p-4 text-center">
                <h4 className="fw-bold text-primary mb-3">
                  <i className="fas fa-clock me-2"></i>
                  Çalışma Saatlerimiz
                </h4>
                <Row>
                  <Col md={4} className="mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-primary mb-1">Pazartesi - Cuma</h6>
                      <p className="text-muted mb-0">08:00 - 18:00</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-success mb-1">Cumartesi</h6>
                      <p className="text-muted mb-0">09:00 - 16:00</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="bg-info bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-info mb-1">Pazar</h6>
                      <p className="text-muted mb-0">Acil Durumlar</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;