import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setMessages(storedMessages);
  }, []);

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Contact Messages</h1>
      {messages.length === 0 ? (
        <p className="text-center">No messages yet.</p>
      ) : (
        <Row>
          {messages.map((msg) => (
            <Col md={6} lg={4} key={msg.id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>New Message from {msg.name}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {msg.email}<br />
                    <strong>Phone:</strong> {msg.phone}<br />
                    <strong>Message:</strong> {msg.message}
                  </Card.Text>
                  <Button variant="danger" onClick={() => deleteMessage(msg.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Messages;
