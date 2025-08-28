import React from 'react';
import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardText, CardFooter } from 'react-bootstrap';
import Link from 'next/link';
import { servicesData } from '@/app/data/services';

export const metadata = {
  title: 'Tüm Hizmetlerimiz | Nakliye Firması',
  description: 'Nakliye firmamızın sunduğu tüm profesyonel hizmetler: evden eve nakliyat, ofis taşımacılığı, eşya depolama ve daha fazlası.',
};

const ServicesPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 fw-bold">Hizmetlerimiz</h1>
      <p className="lead text-center mb-5">
        İhtiyaçlarınıza özel çözümler sunmak için geniş bir hizmet yelpazesine sahibiz. Aşağıda
        tüm nakliye ve depolama hizmetlerimizi inceleyebilirsiniz.
      </p>
      <Row className="g-4">
        {servicesData.map(service => (
          <Col md={6} lg={4} key={service.id}>
            <Card className="h-100 shadow-sm">
              <CardBody>
                <CardTitle className="fw-bold">{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </CardBody>
              <CardFooter className="bg-white border-0 text-center">
                <Link href={`/our-services/${service.id}`}>
                  <Button variant="primary">Detaylı Bilgi</Button>
                </Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;