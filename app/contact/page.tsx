import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Badge,
} from "react-bootstrap";
import ContactForm from "@/components/ContactForm";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMap,
  FaPaperPlane,
} from "react-icons/fa";
export const metadata = {
  title: "İletişim | Mersin Arslan Nakliyat",
  description:
    "Bize ulaşın. Adres, telefon, e-posta bilgileri ve iletişim formu.",
};

const ContactPage = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
            İletişim
          </Badge>
          <h2 className="display-4 fw-bold text-dark mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Nakliye ihtiyaçlarınız için 7/24 hizmetinizdeyiz. Hemen iletişime
            geçin, size en uygun çözümü sunalım.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <CardTitle className="fw-bold text-primary mb-4 fs-3">
                  <FaPhone className="me-2" />
                  İletişim Bilgileri
                </CardTitle>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Adres</h6>
                      <p className="text-muted mb-0">
                        Mevlana Mahallesi 101038 Sokak No:13/4 <br />{" "}
                        <b>Toroslar/Mersin</b>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FaPhone className="text-success" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Telefon</h6>
                      <p className="text-muted mb-0">+90 538 514 75 97</p>
                      <p className="text-muted mb-0">+90 551 034 65 28</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FaEnvelope className="text-info" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">E-posta</h6>
                      <p className="text-muted mb-0">
                        arslanakliyatevdeneve@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FaWhatsapp className="text-warning" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">WhatsApp</h6>
                      <p className="text-muted mb-0">+90 538 514 75 97</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="fw-bold mb-3">
                    <FaMap className="me-2" />
                    Konumumuz
                  </h6>
                  <div className="rounded-3 overflow-hidden shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.50998027857!2d34.62166257570957!3d36.830260566004554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3dcad08693f%3A0xef8eb612835ec40c!2sMevlana%2C%20101038.%20Sk.%20No%3A13%20D%3A4%2C%2033080%20Toroslar%2FMersin!5e0!3m2!1str!2str!4v1758568562576!5m2!1str!2str"
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
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <CardTitle className="fw-bold text-primary mb-4 fs-3">
                  <FaPaperPlane className="me-2" />
                  Mesaj Gönderin
                </CardTitle>
                <ContactForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <Card className="border-0 shadow-sm">
              <CardBody className="p-4 text-center">
                <h4 className="fw-bold text-primary mb-3">
                  <FaClock className="me-2" />
                  Kurumsal Değerler
                </h4>
                <Row>
                  <Col md={4} className="mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-primary mb-1">
                        Firma Avantajları
                      </h6>
                      <p className="text-muted mb-0">
                        Yüksek Standartlarla Hizmet
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-success mb-1">
                        Müşteri Memnuniyeti
                      </h6>
                      <p className="text-muted mb-0">
                        %100 Çözüm Odaklı Yaklaşım
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="bg-info bg-opacity-10 rounded-3 p-3">
                      <h6 className="fw-bold text-info mb-1">
                        Deneyimli Kadro
                      </h6>
                      <p className="text-muted mb-0">
                        Uzman ve Profesyonel Ekip
                      </p>
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
