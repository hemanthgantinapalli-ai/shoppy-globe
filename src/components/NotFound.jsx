import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

/**
 * NotFound Component - 404 Page
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Oops! Page Not Found</h1>
        <p className="error-message">
          Sorry, the page you are looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="error-details">
          <p>
            <strong>Error:</strong> The requested URL was not found on this server.
          </p>
          <p>
            <strong>Status Code:</strong> 404 Not Found
          </p>
        </div>

        <div className="error-suggestions">
          <h3>Here's what you can do:</h3>
          <ul>
            <li>Check the URL for typos</li>
            <li>Go back to the homepage</li>
            <li>Use the search to find what you need</li>
            <li>Contact support if you need help</li>
          </ul>
        </div>

        <div className="not-found-actions">
          <button onClick={() => navigate("/")} className="home-btn">
            🏠 Go to Home
          </button>
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
