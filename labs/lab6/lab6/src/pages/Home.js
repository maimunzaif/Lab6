import { Card, Button, Badge } from 'react-bootstrap'; // Add Badge to imports

export default function Home() {
  return (
    <section className="text-center" aria-labelledby="home-heading">
      <div className="hero-section mb-5">
        <h1 id="home-heading" className="display-5 fw-bold mb-3">
          Hi, I'm Maimun Zaif
        </h1>
        <p className="lead text-muted mb-4">
          Third-Year Computer Science Student @ Dalhousie University<br />
          Passionate Developer | Tech Enthusiast | Problem Solver
        </p>
        
        <div className="d-flex justify-content-center gap-3 mb-5">
          <Button 
            variant="outline-primary" 
            size="lg"
            href="/Projects"
            aria-label="View my projects"
          >
            View My Work
          </Button>
          <Button
            variant="outline-secondary"
            size="lg"
            href="/About"
            aria-label="Learn more about me"
          >
            My Journey
          </Button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>📱 Mobile Development</Card.Title>
              <Card.Text>
                Currently exploring Android ecosystem with Java and Firebase, 
                building practical applications like local job market platforms
              </Card.Text>
              <Badge bg="info" className="me-1">Android Studio</Badge>
              <Badge bg="info" className="me-1">Firebase</Badge>
              <Badge bg="info">Google Maps API</Badge>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🌐 Web Development</Card.Title>
              <Card.Text>
                Creating full-stack solutions with modern frameworks.
                Recently developed a university course tracking system
                using React and Node.js
              </Card.Text>
              <Badge bg="info" className="me-1">React</Badge>
              <Badge bg="info" className="me-1">Node.js</Badge>
              <Badge bg="info">MySQL</Badge>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🤖 AI Exploration</Card.Title>
              <Card.Text>
                Experimenting with AI integration through projects like
                NASA Hackathon's image-to-music generator using JavaScript
                and machine learning APIs
              </Card.Text>
              <Badge bg="info" className="me-1">Python</Badge>
              <Badge bg="info" className="me-1">APIs</Badge>
              <Badge bg="info">Image Processing</Badge>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-muted">
          🎓 Currently diving deep into algorithms, software engineering principles, 
          and human-computer interaction. Passionate about turning classroom knowledge 
          into real-world solutions!
        </p>
      </div>
    </section>
  );
}
