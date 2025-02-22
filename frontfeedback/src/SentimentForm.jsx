import { useState, useEffect } from "react";
import "./SentimentFormStyle.css"; // Import the CSS file

const SentimentForm = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [animateResult, setAnimateResult] = useState(false);

  useEffect(() => {
    if (sentiment) {
      setAnimateResult(true);
      const timer = setTimeout(() => setAnimateResult(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [sentiment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setSentiment(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Server error! Please check if Flask is running.");
      }

      const data = await response.json();
      setSentiment(data.sentiment);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>HACKTIC_<span>SENTIMENT</span></h1>
          <p className="subheader">NLP ANALYSIS ENGINE v2.5</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text for sentiment analysis..."
            className="textarea"
          />
          
          <button 
            type="submit"
            className={`button ${loading ? "loading" : ""}`}
            disabled={loading || !text.trim()}
          >
            {loading ? "ANALYZING..." : "ANALYZE"}
          </button>
        </form>

        {sentiment && (
          <div className={`result-box ${animateResult ? "pulse" : ""}`}>
            <p className="result-label">SENTIMENT:</p>
            <p className={`result-text ${sentiment === "Positive" ? "positive" : "negative"}`}>
              {sentiment.toUpperCase()}
            </p>
          </div>
        )}

        {error && (
          <div className="error-box">
            <div className="error-icon">!</div>
            <p className="error-text">{error}</p>
          </div>
        )}

        <div className="footer">
          <div className="line"></div>
          <p className="footer-text">NEURAL NETWORK POWERED</p>
        </div>
      </div>
    </div>
  );
};
export default SentimentForm;
