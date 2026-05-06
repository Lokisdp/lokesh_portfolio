import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiChevronDown,
  FiMessageCircle,
  FiRefreshCw,
  FiSend,
  FiX,
} from "react-icons/fi";
import {
  findLokiAnswer,
  initialLokiMessages,
  normalizeLokiInput,
  questionBank,
  quickActions,
} from "../data/lokiKnowledge";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialLokiMessages);
  const [suggestions, setSuggestions] = useState(questionBank.start);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [showQuestionPrompt, setShowQuestionPrompt] = useState(false);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  const currentSuggestions = useMemo(
    () => suggestions.slice(0, 6),
    [suggestions]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [isOpen, messages, isThinking, showQuestionPrompt, suggestions]);

  const openChat = () => {
    setIsOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  };

  const answerQuestion = (question) => {
    if (isThinking) {
      return;
    }

    const result = findLokiAnswer(question);

    setMessages((current) => [
      ...current,
      { from: "user", text: question },
    ]);
    setInput("");
    setSuggestions([]);
    setShowQuestionPrompt(false);
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { from: "bot", text: result.answer },
      ]);
      setLastAnswer(result.more ? result : null);
      setIsThinking(false);

      if (result.understood && result.id !== "question-menu") {
        setShowQuestionPrompt(true);
        return;
      }

      setSuggestions(result.suggestions || questionBank.start);
    }, 1000);
  };

  const resetChat = () => {
    setMessages(initialLokiMessages);
    setSuggestions(questionBank.start);
    setLastAnswer(null);
    setIsThinking(false);
    setShowQuestionPrompt(false);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  };

  const showTopics = () => {
    setShowQuestionPrompt(false);
    setSuggestions(questionBank.menu);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  };

  const tellMeMore = () => {
    if (!lastAnswer?.more || isThinking) {
      return;
    }

    setShowQuestionPrompt(false);
    setLastAnswer(null);
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { from: "bot", text: lastAnswer.more },
      ]);
      setIsThinking(false);
      setShowQuestionPrompt(true);
    }, 700);
  };

  const handleQuestionPrompt = (answer) => {
    setShowQuestionPrompt(false);

    if (answer === "yes") {
      showTopics();
      return;
    }

    setSuggestions([]);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const question = input.trim();

    if (!question) {
      return;
    }

    if (showQuestionPrompt) {
      const normalizedQuestion = normalizeLokiInput(question);

      if (["yes", "yeah", "yep", "sure"].includes(normalizedQuestion)) {
        setMessages((current) => [...current, { from: "user", text: question }]);
        setInput("");
        handleQuestionPrompt("yes");
        return;
      }

      if (["no", "nope", "not now"].includes(normalizedQuestion)) {
        setMessages((current) => [...current, { from: "user", text: question }]);
        setInput("");
        handleQuestionPrompt("no");
        return;
      }
    }

    answerQuestion(question);
  };

  return (
    <>
      {isOpen && (
        <section className="chat-panel" aria-label="Loki chat">
          <div className="chat-panel-header">
            <div className="chat-panel-title">
              <span className="chat-panel-icon">
                <FiMessageCircle />
              </span>
              <div>
                <h2>Loki</h2>
                <p>Portfolio chatbot</p>
              </div>
            </div>

            <div className="chat-panel-actions">
              <button
                type="button"
                className="chat-panel-close"
                onClick={showTopics}
                aria-label="Show topics"
                title="Show topics"
              >
                Topics
              </button>
              <button
                type="button"
                className="chat-panel-close"
                onClick={resetChat}
                aria-label="Reset chat"
                title="Reset chat"
              >
                <FiRefreshCw />
              </button>
              <button
                type="button"
                className="chat-panel-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                title="Close chat"
              >
                <FiX />
              </button>
            </div>
          </div>

          <div className="chat-messages" aria-live="polite" ref={messagesRef}>
            {messages.map((message, index) => (
              <div
                className={`chat-message-wrap chat-message-wrap-${message.from}`}
                key={`${message.from}-${index}-${message.text}`}
              >
                {message.from === "bot" && <span className="chat-speaker">Loki</span>}
                <div className={`chat-message chat-message-${message.from}`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="chat-message-wrap chat-message-wrap-bot">
                <span className="chat-speaker">Loki</span>
                <div className="chat-message chat-message-bot chat-thinking">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-quick-actions" aria-label="Quick actions">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                download={action.download || undefined}
              >
                {action.label}
              </a>
            ))}
          </div>

          {showQuestionPrompt ? (
            <div className="chat-question-prompt">
              <p>Do you have any questions?</p>
              <div>
                {lastAnswer?.more && (
                  <button type="button" onClick={tellMeMore}>
                    Tell me more
                  </button>
                )}
                <button type="button" onClick={() => handleQuestionPrompt("yes")}>
                  Yes
                </button>
                <button type="button" onClick={() => handleQuestionPrompt("no")}>
                  No
                </button>
              </div>
            </div>
          ) : currentSuggestions.length > 0 ? (
            <div className="chat-suggestions" aria-label="Suggested questions">
              {messages.length > 1 && (
                <p className="chat-suggestions-label">
                  Choose a question, or type your own
                </p>
              )}
              {currentSuggestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => answerQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          ) : (
            <p className="chat-followup-hint">
              Ask a follow-up, or use Topics to see questions.
            </p>
          )}

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={isThinking ? "Loki is thinking..." : "Ask Loki a question..."}
              aria-label="Ask Loki a question"
              disabled={isThinking}
            />
            <button
              type="submit"
              aria-label="Send question"
              title="Send"
              disabled={isThinking}
            >
              <FiSend />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`chat-bubble ${isOpen ? "chat-bubble-open" : ""}`}
        onClick={isOpen ? () => setIsOpen(false) : openChat}
        aria-label={isOpen ? "Minimize Loki" : "Open Loki"}
        aria-expanded={isOpen}
      >
        <span className="chat-bubble-icon">
          {isOpen ? <FiChevronDown /> : <FiMessageCircle />}
        </span>
        <span className="chat-bubble-text">
          <strong>{isOpen ? "Minimize" : "Chat with Loki"}</strong>
          <small>Portfolio bot</small>
        </span>
      </button>
    </>
  );
}
