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
  Badge,
} from "react-bootstrap";
import {
  FaBoxes,
  FaTruck,
  FaShieldAlt,
  FaUser,
  FaHandshake,
} from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import styles from "@/styles/Carousel.module.css";

const featuredServices = [
  {
    id: "1",
    title: "Evden Eve Nakliyat",
    description:
      "Eşyalarınızı güvenle eski adresinizden, yeni adresinize taşıyoruz.",
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
    icons: <FaUser size={30} className="fs-1 text-primary mb-2" />,
  },
  {
    quote: "Profesyonel ve hızlılar. Ofis taşıma sürecimiz çok kolay geçti.",
    author: "Ayşe Kaya",
    icons: <FaUser size={30} className="fs-1 text-primary mb-2" />,
  },
  {
    quote:
      "Eşyalarımız hızlı ve güvenli bir şekilde taşındı. Çok teşekkür ederim.",
    author: "Mehmet Demir",
    icons: <FaUser size={30} className="fs-1 text-primary mb-2" />,
  },
];

const HomePage = () => {
  return (
    <main>
      <div className="text-center py-3 visually-hidden">
        <h1>Mersin Arslan Nakliyat – Profesyonel ve Hızlı Ulaşım Çözümleri</h1>
      </div>
      <Carousel className={styles.indicators} interval={2800} pause={false}>
        <CarouselItem interval={2800}>
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
            <h2 className="display-4 fw-bold">Güvenilir Nakliye Hizmeti</h2>
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

        <CarouselItem interval={2500}>
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
            <h2 className="display-4 fw-bold">Yeni Adresiniz İçin Hazırız</h2>
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

        <CarouselItem interval={2500}>
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
            <h2 className="display-4 fw-bold">Hızlı ve Profesyonel Çözümler</h2>
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

      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
              Hizmetlerimiz
            </Badge>
            <h2 className="display-4 fw-bold text-dark mb-4">
              Öne Çıkan Hizmetlerimiz
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Profesyonel nakliye hizmetlerimizle ihtiyaçlarınıza en uygun
              çözümleri sunuyoruz.
            </p>
          </div>
          <Row className="g-4">
            {featuredServices.map((service) => (
              <Col md={4} key={service.id}>
                <Card className="border-0 shadow-sm h-100 text-center">
                  <CardBody className="p-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "80px", height: "80px" }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="fw-bold text-dark mb-3 fs-5">
                      {service.title}
                    </CardTitle>
                    <CardText className="text-muted mb-4">
                      {service.description}
                    </CardText>
                    <Link href={`/our-services/${service.id}`} passHref>
                      <Button
                        variant="primary"
                        className="px-4 py-2 rounded-pill"
                      >
                        <i className="fas fa-arrow-right me-2"></i>
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

      <div className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow-sm h-100">
                <CardBody className="p-4">
                  <h3 className="fw-bold text-primary mb-4">
                    Güvenilir ve Kaliteli Hizmet
                  </h3>
                  <p className="fs-5 text-muted mb-4">
                    2005 yılından beri nakliye sektöründe hizmet veriyoruz.
                    Müşteri memnuniyetini ön planda tutan yaklaşımımızla,
                    eşyalarınızı en güvenli şekilde taşıyoruz. Her aşamada
                    yanınızda olarak, taşınma sürecinizi stressiz ve kolay hale
                    getiriyoruz.
                  </p>
                  <Link href="/about" passHref>
                    <Button
                      variant="primary"
                      className="px-4 py-2 rounded-pill"
                    >
                      <i className="fas fa-arrow-right me-2"></i>
                      Daha Fazla Oku
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <Image
                  src="/images/mock7.jpg"
                  alt="Hakkımızda"
                  width={600}
                  height={400}
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-primary py-5">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="light" text="primary" className="mb-3 fs-6 px-3 py-2">
              Müşteri Yorumları
            </Badge>
            <h2 className="text-white mb-4 fw-bold">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p
              className="text-white-50 lead mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Memnuniyetimiz, müşterilerimizin başarısıyla ölçülür. İşte bizimle
              çalışan müşterilerimizin deneyimleri.
            </p>
          </div>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Carousel controls={false} indicators={false}>
                {testimonials.map((test, index) => (
                  <CarouselItem key={index} interval={5000}>
                    <Card className="border-0 bg-white bg-opacity-10 backdrop-blur">
                      <CardBody className="p-4 text-center">
                        <div className="mb-3">
                          <i className="fas fa-quote-left text-white-50 fs-1"></i>
                        </div>
                        <p className="lead text-white fst-italic mb-4">
                          {test.quote}
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                          <div
                            className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: "50px", height: "50px" }}
                          >
                            <i className="fas fa-user text-red mt-2">
                              {test.icons}
                            </i>
                          </div>
                          <div>
                            <h6 className="text-white mb-0 fw-bold">
                              {test.author}
                            </h6>
                            <small className="text-white-50">Müşterimiz</small>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </CarouselItem>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
              İletişim
            </Badge>
            <h1 className="display-4 fw-bold text-dark mb-4">
              Bir Projeniz mi Var?
            </h1>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Nakliye ihtiyaçlarınız için bize ulaşın, size özel çözümler
              sunalım. Ücretsiz keşif ve teklif için hemen iletişime geçin.
            </p>
          </div>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="border-0 shadow-sm">
                <CardBody className="p-4">
                  <div className="text-center mb-4">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <FaHandshake className="fs-1 text-primary" />
                    </div>
                    <h4 className="fw-bold text-primary mb-3">Teklif Alın</h4>
                    <p className="text-muted">
                      Formu doldurun, size en kısa sürede dönüş yapalım.
                    </p>
                  </div>
                  <ContactForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default HomePage;
