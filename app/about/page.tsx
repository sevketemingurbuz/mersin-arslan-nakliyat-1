import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  CardBody,
  Badge,
} from "react-bootstrap";
import { FaBuilding, FaCrosshairs } from "react-icons/fa";
export const metadata = {
  title: "Hakkımızda | Mersin Arslan Nakliyat",
  description: "Firmamızın hikayesi, misyonu ve vizyonu hakkında bilgi edinin.",
};

const AboutPage = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
            Hakkımızda
          </Badge>
          <h2 className="display-4 fw-bold text-dark mb-4">
            Güvenilir Nakliye Ortağınız
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            2008 yılından beri müşteri memnuniyetini ön planda tutarak,
            profesyonel nakliye hizmetleri sunuyoruz.
          </p>
        </div>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <h3 className="fw-bold text-primary mb-4">Hikayemiz</h3>
                <p className="fs-5 text-muted mb-4">
                  2008 yılında küçük bir aile şirketi olarak çıktığımız bu
                  yolda, bugün Türkiye&#39;nin dört bir yanına hizmet veren,
                  sektörün lider firmalarından biri haline geldik. Müşteri
                  memnuniyetini her zaman en ön planda tutarak, profesyonel ve
                  güvenilir nakliye hizmetleri sunmayı misyon edindik.
                </p>
                <p className="fs-5 text-muted">
                  Tecrübeli ekibimiz, modern ekipmanlarımız ve geniş araç
                  filomuz ile hem bireysel hem de kurumsal müşterilerimizin tüm
                  nakliye ihtiyaçlarına çözüm üretiyoruz. Eşyalarınızı kendi
                  eşyamız gibi koruyarak, zamanında ve hasarsız bir şekilde
                  teslim etmeyi garanti ediyoruz.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <Image
                src="/images/about1.jpg"
                fluid
                rounded
                alt="Hakkımızda görseli"
                className="shadow-lg"
                style={{ borderRadius: "15px" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <CardBody className="p-4">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaBuilding className="fs-1 text-primary" />
                </div>
                <h4 className="fw-bold text-dark mb-3">Misyonumuz</h4>
                <p className="text-muted fs-5">
                  Müşterilerimize en üst düzeyde güven ve kalite sunarak,
                  nakliye süreçlerini kolaylaştırmak.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <CardBody className="p-4">
                <div
                  className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <FaCrosshairs className="fs-1 text-success" />
                </div>
                <h4 className="fw-bold text-dark mb-3">Vizyonumuz</h4>
                <p className="text-muted fs-5">
                  Sektördeki yenilikleri takip ederek, teknoloji ve insan odaklı
                  çözümlerle Türkiye&#39;nin en tercih edilen nakliye firması
                  olmak.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col md={3} className="text-center mb-4">
            <div className="bg-primary text-white rounded-3 p-4">
              <h2 className="fw-bold mb-1">15+</h2>
              <p className="mb-0">Yıllık Deneyim</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-success text-white rounded-3 p-4">
              <h2 className="fw-bold mb-1">1000+</h2>
              <p className="mb-0">Mutlu Müşteri</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-warning text-white rounded-3 p-4">
              <h2 className="fw-bold mb-1">20+</h2>
              <p className="mb-0">Araç Filosu</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-info text-white rounded-3 p-4">
              <h2 className="fw-bold mb-1">24/7</h2>
              <p className="mb-0">Hizmet</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
