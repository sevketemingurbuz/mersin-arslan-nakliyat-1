import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Badge,
} from "react-bootstrap";
import Link from "next/link";
import {
  FaBriefcase,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaHeadset,
  FaTruck,
  FaHouseUser,
  FaCity,
  FaWarehouse,
  FaIndustry,
} from "react-icons/fa";

import { FaStore } from "react-icons/fa6";
export const metadata = {
  title: "Tüm Hizmetlerimiz | Mersin Arslan Nakliyat",
  description:
    "Firmamızın sunduğu tüm profesyonel hizmetler: evden eve nakliyat, ofis taşımacılığı, eşya depolama ve daha fazlası.",
};

const services = [
  {
    id: "1",
    title: "Evden Eve Nakliyat",
    description:
      "Eşyalarınızı güvenle yeni adresinize taşıyoruz. Paketleme, montaj ve demontaj dahil profesyonel çözümler sunuyoruz.",
    icon: <FaTruck className="fs-1 text-primary" />,
  },

  {
    id: "2",
    title: "Şehir İçi Nakliyat",
    description:
      "Mersin içi nakliye ihtiyaçlarınız için hızlı, güvenilir ve ekonomik çözümler sunuyoruz.",
    icon: <FaHouseUser className="fs-1 text-primary" />,
  },

  {
    id: "3",
    title: "Şehir Dışı Nakliyat",
    description:
      "Türkiye’nin her noktasına sigortalı ve güvenli şehirler arası nakliyat hizmeti.",
    icon: <FaCity className="fs-1 text-primary" />,
  },

  {
    id: "4",
    title: "Ofis Taşımacılığı",
    description:
      "İşinizi aksatmadan, profesyonel ve sistemli ofis taşıma çözümleri.",
    icon: <FaBriefcase className="fs-1 text-primary" />,
  },

  {
    id: "5",
    title: "Fabrika Taşımacılığı",
    description:
      "Ağır makine ve endüstriyel ekipmanlar için güvenli fabrika taşımacılığı hizmeti.",
    icon: <FaIndustry className="fs-1 text-primary" />,
  },

  {
    id: "6",
    title: "Mağaza Taşımacılığı",
    description:
      "Mağaza ve showroom taşımacılığında hızlı ve güvenli çözümler.",
    icon: <FaStore className="fs-1 text-primary" />,
  },

  {
    id: "7",
    title: "Eşya Depolama",
    description:
      "Fazla eşyalarınız için güvenli, nem ve rutubetten korunmuş depolama alanları.",
    icon: <FaWarehouse className="fs-1 text-primary" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
            Hizmetlerimiz
          </Badge>
          <h2 className="display-4 fw-bold text-dark mb-4">
            Profesyonel Nakliye Hizmetleri
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            İhtiyaçlarınıza özel çözümler sunmak için geniş bir hizmet
            yelpazesine sahibiz. Aşağıda tüm nakliye ve depolama hizmetlerimizi
            inceleyebilirsiniz.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id}>
              <Card
                className="h-100 border-0 shadow-sm service-card"
                style={{ transition: "all 0.3s ease" }}
              >
                <CardBody className="p-4">
                  <div className="text-center mb-3">
                    <div
                      className={`bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                    >
                      <i>{service.icon}</i>
                    </div>
                  </div>
                  <CardTitle className="fw-bold text-center mb-3 fs-5">
                    {service.title}
                  </CardTitle>
                  <CardText
                    className="text-muted text-center mb-4"
                    style={{ minHeight: "80px" }}
                  >
                    {service.description}
                  </CardText>
                </CardBody>
                <CardFooter className="bg-white border-0 text-center p-4">
                  <Link href={`/our-services/${service.id}`}>
                    <Button
                      variant="primary"
                      className="px-4 py-2 rounded-pill"
                    >
                      <i className="fas fa-arrow-right me-2"></i>
                      Detaylı Bilgi
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 pt-5">
          <Col md={12} className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div
                className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaShieldAlt className="fs-1 text-primary" />
              </div>
              <h5 className="fw-bold mb-2">Güvenilir Hizmet</h5>
              <p className="text-muted small">Eşyalarınızı güvenle taşıyoruz</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div
                className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaClock className="fs-1 text-success" />
              </div>
              <h5 className="fw-bold mb-2">Zamanında Teslimat</h5>
              <p className="text-muted small">Söz verdiğimiz zamanda teslim</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div
                className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaDollarSign className="fs-1 text-warning" />
              </div>
              <h5 className="fw-bold mb-2">Uygun Fiyat</h5>
              <p className="text-muted small">En uygun fiyatlarla hizmet</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div
                className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaHeadset className="fs-1 text-info" />
              </div>
              <h5 className="fw-bold mb-2">7/24 Destek</h5>
              <p className="text-muted small">Her zaman yanınızdayız</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
