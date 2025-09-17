import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutPage.css";

const owners = [
  {
    name: "Tanmay Frank - +254 703409780",
    role: "Co-Founder & Lead Developer",
    image: "./frank.jpg" , // replace with your image in /public
    bio: "Passionate software engineer and science teacher with a focus on creating innovative and user-friendly digital solutions for education.",
    achievements: [
      "Developed multiple full-stack cross-platform applications",
      "AI & Economics award winner",
      "Contributed to open-source education projects",
    ],
  },
  {
    name: "Mr. Bundi - +254 795035537",
    role: "Co-Founder & Project Manager",
    image: "elijah.jpg", // replace with your image in /public
    bio: "Experienced project manager with expertise in leading technology teams and driving digital transformation in schools and enterprises.",
    achievements: [
      "2+ years of project management experience",
      "Led successful implementation of Financial tech projects",
      "Economics award winner",
    ],
  },
];

const AboutPage = () => {
  return (
    <div className="about-page bg-light py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 text-primary">About Us</h1>
          <p className="lead text-muted">
            Know the people behind this platform — passionate about
            education, innovation, and technology.
          </p>
        </div>

        {/* Owners Section */}
        <Row className="g-4">
          {owners.map((owner, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-sm border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src={owner.image}
                  alt={owner.name}
                  className="owner-img"
                />
                <Card.Body>
                  <h3 className="card-title text-primary fw-bold">
                    {owner.name}
                  </h3>
                  <h5 className="text-muted">{owner.role}</h5>
                  <p className="card-text mt-3">{owner.bio}</p>
                  <h6 className="fw-semibold mt-4">Key Achievements:</h6>
                  <ul>
                    {owner.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
