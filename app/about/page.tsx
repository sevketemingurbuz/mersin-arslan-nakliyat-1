import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const metadata = {
  title: "Hakkımızda | Nakliye Firması",
  description: "Nakliye firmamızın hikayesi, misyonu ve vizyonu hakkında bilgi edinin.",
};
const AboutPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Hakkımızda</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <p>
            2005 yılında küçük bir aile şirketi olarak çıktığımız bu yolda, bugün
            Türkiye&#39;nin  dört bir yanına hizmet veren, sektörün lider firmalarından biri haline geldik.
            Müşteri memnuniyetini her zaman en ön planda tutarak, profesyonel ve güvenilir nakliye
            hizmetleri sunmayı misyon edindik.
          </p>
          <p>
            Tecrübeli ekibimiz, modern ekipmanlarımız ve geniş araç filomuz ile hem bireysel hem
            de kurumsal müşterilerimizin tüm nakliye ihtiyaçlarına çözüm üretiyoruz. Eşyalarınızı
            kendi eşyamız gibi koruyarak, zamanında ve hasarsız bir şekilde teslim etmeyi
            garanti ediyoruz.
          </p>
          <h4>Misyonumuz</h4>
          <p>
            Müşterilerimize en üst düzeyde güven ve kalite sunarak, nakliye süreçlerini kolaylaştırmak.
          </p>
          <h4>Vizyonumuz</h4>
          <p>
            Sektördeki yenilikleri takip ederek, teknoloji ve insan odaklı çözümlerle Türkiye&#39;nin  en
            tercih edilen nakliye firması olmak.
          </p>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <Image src="/images/hakkimizda2.jpg" fluid rounded alt="Hakkımızda görseli" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;