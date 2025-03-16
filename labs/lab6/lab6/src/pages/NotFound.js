import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5" role="alert" aria-live="polite">
      <h1 className="display-1">404</h1>
      <p className="lead">Page Not Found</p>
      <p>The requested page could not be located.</p>
      <Button 
        variant="outline-primary" 
        onClick={() => navigate('/')}
        aria-label="Return to home page"
      >
        Return to Home
      </Button>
    </div>
  );
}