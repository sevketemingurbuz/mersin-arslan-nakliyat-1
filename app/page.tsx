import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Carousel,
  Button,
  CarouselItem,
  CarouselCaption,
} from "react-bootstrap";
import { FaBoxes, FaTruck, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import styles from "@/styles/Carousel.module.css";

const featuredServices = [
  {
    id: "1",
    title: "Evden Eve Nakliyat",
    description: "Eşyalarınızı güvenle yeni adresinize taşıyoruz.",
    icon: <FaBoxes className="fs-1 text-primary mb-3" />,
  },
  {
    id: "4",
    title: "Ofis Taşımacılığı",
    description: "İş akışınızı aksatmadan, tüm ofis eşyalarınızı taşıyoruz.",
    icon: <FaTruck className="fs-1 text-primary mb-3" />,
  },
  {
    id: "7",
    title: "Eşya Depolama",
    description: "Fazla eşyalarınız için güvenli ve temiz depolama çözümleri.",
    icon: <FaShieldAlt className="fs-1 text-primary mb-3" />,
  },
];

const testimonials = [
  {
    quote:
      "Harika bir hizmet! Eşyalarım hasarsız ve zamanında teslim edildi. Kesinlikle tavsiye ederim.",
    author: "Ahmet Yılmaz",
  },
  {
    quote: "Profesyonel ve hızlılar. Ofis taşıma sürecimiz çok kolay geçti.",
    author: "Ayşe Kaya",
  },
];

const HomePage = () => {
  return (
    <main>
      <Carousel className={styles.indicators}>
        <CarouselItem>
          <div style={{ position: "relative", width: "100%", height: "60vh" }}>
            <Image
              src="/images/fx1.jpg"
              alt="First slide"
              fill
              style={{ objectFit: "cover", filter: "brightness(50%)" }}
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
          </div>

          <CarouselCaption className={`text-white ${styles.carouselCaption}`}>
            <h1 className="display-4 fw-bold">Güvenilir Nakliye Hizmeti</h1>
            <p className="lead">
              Yılların tecrübesiyle eşyalarınız emin ellerde.
            </p>
            <Link href="/contact" passHref>
              <Button variant="outline-light" size="lg">
                Hemen Teklif Al
              </Button>
            </Link>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <div style={{ position: "relative", width: "100%", height: "60vh" }}>
            <Image
              src="/images/fx1.2.jpg"
              alt="Second slide"
              fill
              style={{ objectFit: "cover", filter: "brightness(50%)" }}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
          </div>
          <CarouselCaption className={`text-white ${styles.carouselCaption}`}>
            <h1 className="display-4 fw-bold">Yeni Adresiniz İçin Hazırız</h1>
            <p className="lead">
              Ev veya ofis fark etmez, her taşımayı uzmanlıkla
              gerçekleştiriyoruz.
            </p>
            <Link href="/our-services" passHref>
              <Button variant="outline-light" size="lg">
                Hizmetlerimizi Keşfet
              </Button>
            </Link>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <div style={{ position: "relative", width: "100%", height: "60vh" }}>
            <Image
              src="/images/fx1.3.jpg"
              alt="Second slide"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "rgba(0,0,0,0.4)",
                pointerEvents: "none",
              }}
            />
          </div>
          <CarouselCaption className={`text-white ${styles.carouselCaption}`}>
            <h1 className="display-4 fw-bold">Hızlı ve Profesyonel Çözümler</h1>
            <p className="lead">
              Şehir içi ve şehirler arası taşımacılıkta yanınızdayız.
            </p>
            <Link href="/our-services" passHref>
              <Button variant="outline-light" size="lg">
                Hizmetlerimizi Keşfet
              </Button>
            </Link>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>

      <Container className="my-5">
        <h2 className="text-center mb-5">Öne Çıkan Hizmetlerimiz</h2>
        <Row className="g-4">
          {featuredServices.map((service) => (
            <Col md={4} key={service.id}>
              <Card className="text-center p-3 h-100 shadow-sm">
                <CardBody>
                  {service.icon}
                  <CardTitle className="fw-bold">{service.title}</CardTitle>
                  <CardText>{service.description}</CardText>
                  <Link href={`/our-services/${service.id}`} passHref>
                    <Button variant="primary">Detaylı Bilgi</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="fw-bold mb-3">Güvenilir ve Kaliteli Hizmet</h2>
              <p>
                2005 yılından beri nakliye sektöründe hizmet veriyoruz. Müşteri
                memnuniyetini ön planda tutan yaklaşımımızla, eşyalarınızı en
                güvenli şekilde taşıyoruz. Her aşamada yanınızda olarak, taşınma
                sürecinizi stressiz ve kolay hale getiriyoruz.
              </p>
              <Link href="/about" passHref>
                <Button variant="outline-primary">Daha Fazla Oku</Button>
              </Link>
            </Col>
            <Col md={4} className="mt-4 mt-md-0">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm bg-white position-relative">
                <Image
                  src="/images/mock1.jpg"
                  alt="Hakkımızda"
                  fill
                  className="img-fluid rounded shadow object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">Müşteri Yorumlarımız</h2>
          <Carousel controls={false} indicators={false}>
            {testimonials.map((test, index) => (
              <CarouselItem key={index} interval={5000}>
                <p className="lead fst-italic">{test.quote}</p>
                <p>- {test.author}</p>
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <h2 className="text-center mb-4">Bir Projeniz mi Var?</h2>
              <p className="text-center mb-4">
                Nakliye ihtiyaçlarınız için bize ulaşın, size özel çözümler
                sunalım.
              </p>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default HomePage;
