import { FiArrowUp } from "react-icons/fi";

export default function BackToTop({ language = "en" }) {
  const label = language === "de" ? "Nach oben" : "Back to top";
  const text = language === "de" ? "Oben" : "Top";

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
      aria-label={label}
      title={label}
    >
      <span className="floating-top-button-icon" aria-hidden="true">
        <FiArrowUp />
      </span>
      <span>{text}</span>
    </button>
  );
}
