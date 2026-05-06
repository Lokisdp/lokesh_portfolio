import { Link } from "react-router-dom";

export default function Thesis() {
  return (
    <div className="page-placeholder">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>Master Thesis</h1>
      <p>
        This thesis page will later include the problem statement, methodology,
        tools, scenarios, and validation results.
      </p>
    </div>
  );
}