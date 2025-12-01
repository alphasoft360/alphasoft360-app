import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import '../styles/projects.css';

const ProjectsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projectsData.map(project => project.category))];
    return cats;
  }, []);

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="projects-list-container">
      {/* Header Section */}
      <div className="projects-header">
        <Container>
          <div className="header-content text-center">
            <h1 className="display-3 fw-bold mb-4">Our Projects</h1>
            <p className="lead header-description">
              Explore our portfolio of innovative solutions and successful projects across various industries.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="filters-section">
            <div className="search-container mb-4">
              <Form className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input ps-5 pe-5"
                />
                <div className="search-icon position-absolute top-50 start-0 translate-middle-y ms-3">
                  <i className="bi bi-search text-muted"></i>
                </div>
              </Form>
            </div>
            
            <div className="category-filters d-flex flex-wrap justify-content-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'primary' : 'outline-light'}
                  className="category-btn"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Projects Grid */}
      <div className="projects-section py-5">
        <Container>
          <div className="projects-stats text-center mb-4">
            <Badge bg="secondary" className="results-count">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </Badge>
          </div>
          
          {filteredProjects.length > 0 ? (
            <Row className="projects-grid g-4">
              {filteredProjects.map(project => (
                <Col key={project.id} lg={4} md={6}>
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="no-results text-center py-5">
              <div className="no-results-icon mb-4">
                <i className="bi bi-search display-1 text-muted"></i>
              </div>
              <h3 className="mb-3">No projects found</h3>
              <p className="text-muted mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                variant="primary"
                className="reset-filters-btn"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ProjectsList;
