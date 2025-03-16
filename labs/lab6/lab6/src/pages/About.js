import { Card, ListGroup, Badge } from 'react-bootstrap';

export default function About() {
  const skills = ['Java', 'Python', 'JavaScript', 'Android Studio', 'Firebase', 'Agile Methodologies'];
  const experience = [
    "Junior Developer @ Android Development Project (2024)",
    "Lead Developer @ Dalhousie Degree Checklist (2024)",
    "Frontend Developer @ NASA Hackathon (2023)"
  ];

  return (
    <article aria-labelledby="about-heading">
      <h1 id="about-heading" className="mb-4">About Me</h1>
      
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title as="h2">Education</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>BSc Computer Science</strong><br />
              Dalhousie University
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title as="h2">Professional Experience</Card.Title>
          <ListGroup variant="flush">
            {experience.map((exp, index) => (
              <ListGroup.Item key={index}>{exp}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="shadow" aria-labelledby="skills-heading">
        <Card.Body>
          <Card.Title as="h2" id="skills-heading">Technical Expertise</Card.Title>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} pill bg="primary" className="fs-6">
                {skill}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}