"use client";

import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Modal } from "react-bootstrap";
import Image from "next/image";
import { FaImages, FaCamera, FaTimes } from "react-icons/fa";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const galleryImages = [
    { id: 1, src: "/gallery/1.jpeg", alt: "Nakliye hizmeti görüntüsü 1" },
    { id: 2, src: "/gallery/2.jpeg", alt: "Nakliye hizmeti görüntüsü 2" },
    { id: 3, src: "/gallery/3.jpeg", alt: "Nakliye hizmeti görüntüsü 3" },
    { id: 4, src: "/gallery/4.jpeg", alt: "Nakliye hizmeti görüntüsü 4" },
    { id: 5, src: "/gallery/5.jpeg", alt: "Nakliye hizmeti görüntüsü 5" },
    { id: 6, src: "/gallery/6.jpeg", alt: "Nakliye hizmeti görüntüsü 6" },
    { id: 7, src: "/gallery/7.jpeg", alt: "Nakliye hizmeti görüntüsü 7" },
    { id: 8, src: "/gallery/8.jpeg", alt: "Nakliye hizmeti görüntüsü 8" },
    { id: 9, src: "/gallery/9.jpeg", alt: "Nakliye hizmeti görüntüsü 9" },
    { id: 10, src: "/gallery/10.jpeg", alt: "Nakliye hizmeti görüntüsü 10" },
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 fs-6 px-3 py-2">
            Galeri
          </Badge>
          <h2 className="display-4 fw-bold text-dark mb-4">
            <FaImages className="me-3 text-primary" />
            Çalışmalarımızdan Görüntüler
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Profesyonel nakliye hizmetlerimizden örnekler ve müşteri
            memnuniyetimize ilişkin görseller.
          </p>
        </div>

        <Row className="g-4">
          {galleryImages.map((image) => (
            <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                className="border-0 shadow-sm h-100 gallery-card"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="gallery-image"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                  />
                  <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <FaCamera
                      className="text-white fs-1 opacity-0"
                      style={{ transition: "opacity 0.3s ease" }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 text-center">
                <h4 className="fw-bold text-primary mb-3">
                  <FaImages className="me-2" />
                  Kaliteli Hizmet Garantisi
                </h4>
                <p className="text-muted mb-0">
                  Her projemizde müşteri memnuniyetini ön planda tutarak, en
                  yüksek kalite standartlarında hizmet sunuyoruz. Galerimizdeki
                  görüntüler, başarılı projelerimizin sadece bir kısmını
                  yansıtmaktadır.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gallery-card:hover .gallery-image {
            transform: scale(1.05);
          }
          .gallery-card:hover .gallery-overlay {
            background: rgba(0,0,0,0.3);
          }
          .gallery-card:hover .gallery-overlay .fa-camera {
            opacity: 1 !important;
          }
          .gallery-overlay {
            background: rgba(0,0,0,0);
            transition: background 0.3s ease;
          }
        `,
        }}
      />

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="gallery-modal"
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
        }}
      >
        <Modal.Header className="border-0 p-0" style={{ position: "relative" }}>
          <button
            type="button"
            onClick={handleCloseModal}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1001,
              cursor: "pointer",
            }}
            aria-label="Kapat"
          >
            <FaTimes size={20} />
          </button>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <div
              className="position-relative"
              style={{
                height: "80vh",
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                sizes="(max-width: 576px) 95vw, (max-width: 768px) 90vw, (max-width: 992px) 80vw, 70vw"
                priority
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GalleryPage;
