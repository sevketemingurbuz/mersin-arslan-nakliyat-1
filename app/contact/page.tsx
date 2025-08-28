import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'react-bootstrap';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'İletişim | Nakliye Firması',
  description: 'Bize ulaşın. Adres, telefon, e-posta bilgileri ve iletişim formu.',
};

const ContactPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">İletişim</h1>
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="p-4 shadow-sm h-100">
            <CardBody>
              <CardTitle className="fw-bold mb-3">İletişim Bilgileri</CardTitle>
              <p>
                <strong>Adres:</strong> Örnek Mahallesi, Örnek Sokak No: 123, Kadıköy/İstanbul
              </p>
              <p>
                <strong>Telefon:</strong> (0212) 123 45 67
              </p>
              <p>
                <strong>E-posta:</strong> info@nakliyefirmasi.com.tr
              </p>
              <p>
                <strong>WhatsApp:</strong> +90 5xx xxx xx xx
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.9602511475!2d28.73199852206894!3d41.00498226068222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa75e0541d113%3A0xe5a363f82e88a38a!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1678255955113!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;