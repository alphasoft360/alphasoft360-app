import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import blogData from './blogData';

const BlogCard = ({ image, date, author, title, excerpt, category, id }) => {
  return (
    <Link to={`/blog/${id}`} className="text-decoration-none">
      <Card className="blog-card h-100 shadow-sm border-0 overflow-hidden">
        <div className="card-image-wrapper position-relative">
          <Card.Img
            variant="top"
            src={image}
            className="card-image"
            style={{ height: '240px', objectFit: 'cover' }}
          />
          <span className="category-badge">{category}</span>
        </div>
        <Card.Body>
          <div className="card-meta d-flex justify-content-between mb-3">
            <span className="meta-item text-muted small">
              <i className="far fa-calendar-alt me-2"></i> {date}
            </span>
            <span className="meta-item text-muted small">
              <i className="far fa-user me-2"></i> {author}
            </span>
          </div>
          <Card.Title as="h5" className="fw-bold mb-3">{title}</Card.Title>
          <Card.Text className="text-secondary">{excerpt}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

const BlogSection = () => {
  return (
    <section className="blog-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold text-uppercase mb-2 d-block">Latest Articles</span>
          <h2 className="fw-bold mb-4">Insights & Technology Updates</h2>
          <p className="text-muted">Stay updated with the latest trends in technology and software development</p>
        </div>
        <Row className="g-4">
          {blogData.map((post, index) => (
            <Col md={6} lg={4} key={index}>
              <BlogCard {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
