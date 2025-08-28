import { notFound } from 'next/navigation';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { servicesData } from '@/app/data/services'; 
import ContactForm from '@/components/ContactForm'; 

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
    <Container className="my-5">
      {/* Başlık */}
      <Row className="mb-5">
        <Col>
          <h1 className="text-center fw-bold">{service.title}</h1>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Sol taraf: resim ve içerik */}
        <Col xs={12} md={7}>
          <div className="d-flex justify-content-center mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
          <p className="lead">{service.content}</p>
        </Col>

        {/* Sağ taraf: detay kartı */}
        <Col xs={12} md={5}>
          <Card className="p-4 shadow-sm h-100 border-0">
            <CardBody>
              <h5 className="fw-bold mb-3">Hizmet Detayları</h5>
              <p><strong>Açıklama:</strong> {service.description}</p>
              <ContactForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicePage;
