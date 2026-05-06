import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="floating-top-button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span className="floating-top-button-icon" aria-hidden="true">
        <FiArrowUp />
      </span>
      <span>Top</span>
    </button>
  );
}
