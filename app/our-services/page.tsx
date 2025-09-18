import React from 'react';
import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardText, CardFooter, Badge } from 'react-bootstrap';
import Link from 'next/link';
import { servicesData } from '@/app/data/services';

export const metadata = {
  title: 'Tüm Hizmetlerimiz | Nakliye Firması',
  description: 'Nakliye firmamızın sunduğu tüm profesyonel hizmetler: evden eve nakliyat, ofis taşımacılığı, eşya depolama ve daha fazlası.',
};

const ServicesPage = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">Hizmetlerimiz</Badge>
          <h1 className="display-4 fw-bold text-dark mb-4">Profesyonel Nakliye Hizmetleri</h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
            İhtiyaçlarınıza özel çözümler sunmak için geniş bir hizmet yelpazesine sahibiz. 
            Aşağıda tüm nakliye ve depolama hizmetlerimizi inceleyebilirsiniz.
          </p>
        </div>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={service.id}>
              <Card className="h-100 border-0 shadow-sm service-card" style={{transition: 'all 0.3s ease'}}>
                <CardBody className="p-4">
                  <div className="text-center mb-3">
                    <div className={`bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} 
                         style={{width: '70px', height: '70px'}}>
                      <i className={`fas fa-truck text-primary fs-3`}></i>
                    </div>
                  </div>
                  <CardTitle className="fw-bold text-center mb-3 fs-5">{service.title}</CardTitle>
                  <CardText className="text-muted text-center mb-4" style={{minHeight: '80px'}}>
                    {service.description}
                  </CardText>
                </CardBody>
                <CardFooter className="bg-white border-0 text-center p-4">
                  <Link href={`/our-services/${service.id}`}>
                    <Button variant="primary" className="px-4 py-2 rounded-pill">
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
            <h2 className="fw-bold text-dark mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="fas fa-shield-alt text-primary fs-4"></i>
              </div>
              <h5 className="fw-bold mb-2">Güvenilir Hizmet</h5>
              <p className="text-muted small">Eşyalarınızı güvenle taşıyoruz</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="fas fa-clock text-success fs-4"></i>
              </div>
              <h5 className="fw-bold mb-2">Zamanında Teslimat</h5>
              <p className="text-muted small">Söz verdiğimiz zamanda teslim</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="fas fa-dollar-sign text-warning fs-4"></i>
              </div>
              <h5 className="fw-bold mb-2">Uygun Fiyat</h5>
              <p className="text-muted small">En uygun fiyatlarla hizmet</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-4">
            <div className="bg-white rounded-3 p-4 shadow-sm h-100">
              <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                <i className="fas fa-headset text-info fs-4"></i>
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