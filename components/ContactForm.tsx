'use client';

import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    name: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
 
      const endpointUrl = 'http://localhost:8080/mail/send'; 
      
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Talebiniz başarıyla iletildi.');
        setFormData({ subject: '', message: '', name: '', phone: '' });
      } else {
        setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 shadow-sm">
      <Card.Title className="text-center mb-4">Talep Formu</Card.Title>
      <Form onSubmit={handleSubmit}>
        
        
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Konu</Form.Label>
          <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} style={{height: '35px'}} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mesaj</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} style={{height: '35px'}} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>İsminiz</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} style={{height: '35px'}} required />
        </Form.Group>
        
        <Form.Group className="mb-3 row" controlId="formPhone">
          <Form.Label>Telefon Numaranız <em className='small fw-light'>Başında sıfır olmadan</em></Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{height: '35px'}} required />
        </Form.Group>
        
        
        
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </div>
      </Form>
      {status && <p className="mt-3 text-center">{status}</p>}
    </Card>
  );
};

export default ContactForm;