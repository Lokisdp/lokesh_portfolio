import { Link } from "react-router-dom";

export default function ThesisHighlight() {
  return (
    <section id="thesis" className="section">
      <h2>Thesis</h2>

      <div className="thesis-card">
        <div className="thesis-content">
          <span className="thesis-tag">Master Thesis</span>
          <h3>Validation of an Ego-Motion Algorithm with Synthetic Radar Data</h3>
          <p>
            A thesis-focused validation framework for evaluating radar-based
            ego-motion algorithms through synthetic data generation,
            scenario-based analysis, and robustness testing.
          </p>

          <Link to="/thesis" className="thesis-link">
            View Thesis Details
          </Link>
        </div>
      </div>
    </section>
  );
}