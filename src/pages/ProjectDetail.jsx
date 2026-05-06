import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div className="page-placeholder">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>This project detail page will be expanded later with real content.</p>
    </div>
  );
}