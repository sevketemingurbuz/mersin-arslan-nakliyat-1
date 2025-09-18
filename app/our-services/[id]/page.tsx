import { notFound } from 'next/navigation';
import { Container, Row, Col, Card, CardBody, Badge, Button } from 'react-bootstrap';
import { servicesData } from '@/app/data/services'; 
import ContactForm from '@/components/ContactForm'; 
import Link from 'next/link';
// import Image from 'next/image'

interface ServicePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = servicesData.find(s => s.id === params.id);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız hizmet sayfası bulunamadı.',
    };
  }

  return {
    title: `${service.title} | Nakliye Firması`,
    description: service.description,
  };
}

const ServicePage = ({ params }: ServicePageProps) => {
  const service = servicesData.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">Hizmet Detayı</Badge>
          <h1 className="display-4 fw-bold text-dark mb-4">{service.title}</h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            {service.description}
          </p>
        </div>

        <Row className="g-4">
          <Col lg={7} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <div className="text-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="bg-white rounded-3 p-4">
                  <h3 className="fw-bold text-primary mb-3">
                    <i className="fas fa-info-circle me-2"></i>
                    Hizmet Hakkında
                  </h3>
                  <p className="fs-5 text-muted lh-lg">{service.content}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="border-0 shadow-sm h-100">
              <CardBody className="p-4">
                <h4 className="fw-bold text-primary mb-4">
                  <i className="fas fa-clipboard-list me-2"></i>
                  Hizmet Özellikleri
                </h4>
                
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-check text-primary"></i>
                    </div>
                    <span className="fw-bold">Profesyonel Ekip</span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-shield-alt text-success"></i>
                    </div>
                    <span className="fw-bold">Sigortalı Taşımacılık</span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-clock text-warning"></i>
                    </div>
                    <span className="fw-bold">Zamanında Teslimat</span>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <i className="fas fa-tools text-info"></i>
                    </div>
                    <span className="fw-bold">Montaj/Demontaj</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <Link href="/our-services">
                    <Button variant="outline-primary" className="me-2">
                      <i className="fas fa-arrow-left me-2"></i>
                      Tüm Hizmetler
                    </Button>
                  </Link>
                  <Button variant="success" href="https://wa.me/905362002944" target="_blank">
                    <i className="fab fa-whatsapp me-2"></i>
                    WhatsApp
                  </Button>
                </div>

                <div className="border-top pt-4">
                  <h5 className="fw-bold text-primary mb-3">
                    <i className="fas fa-paper-plane me-2"></i>
                    Teklif Alın
                  </h5>
                  <ContactForm />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col md={12} className="text-center mb-4">
            <h3 className="fw-bold text-dark">Diğer Hizmetlerimiz</h3>
            <p className="text-muted">İhtiyacınıza uygun diğer hizmetlerimizi de inceleyebilirsiniz</p>
          </Col>
          {servicesData.filter(s => s.id !== service.id).slice(0, 3).map(relatedService => (
            <Col md={4} key={relatedService.id} className="mb-3">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-3 text-center">
                  <img
                    src={relatedService.image}
                    alt={relatedService.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: '120px', objectFit: 'cover', width: '100%' }}
                  />
                  <h6 className="fw-bold mb-2">{relatedService.title}</h6>
                  <p className="text-muted small mb-3">{relatedService.description}</p>
                  <Link href={`/our-services/${relatedService.id}`}>
                    <Button variant="outline-primary" size="sm">
                      Detaylı Bilgi
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicePage;
