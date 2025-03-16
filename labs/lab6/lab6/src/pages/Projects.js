import { Card, Badge } from 'react-bootstrap';

const projects = [
  {
    title: "Job Marketplace Android App",
    description: "Local job posting application with Firebase integration",
    tech: ['Android Studio', 'Firebase', 'Google Maps API'],
    role: "Junior Developer",
    date: "2024"
  },
  {
    title: "Dalhousie Degree Checklist",
    description: "Web-based academic progress tracking system",
    tech: ['React', 'Node.js', 'MySQL'],
    role: "Lead Developer",
    date: "2024"
  },
  {
    title: "Cozmic Mozart (NASA Hackathon)",
    description: "AI-generated music from space imagery",
    tech: ['JavaScript', 'Image Processing', 'Music APIs'],
    role: "Frontend Developer",
    date: "2023"
  }
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h1 id="projects-heading" className="mb-4">Featured Projects</h1>
      
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {project.role} • {project.date}
                </Card.Subtitle>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mt-auto">
                  {project.tech.map((tech) => (
                    <Badge key={tech} bg="secondary" className="me-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}