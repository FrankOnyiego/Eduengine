import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Requests() {
  const [questions, setQuestions] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [withdrawMessage, setWithdrawMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    fetch("https://ischool.eduengine.co.ke/api/questions")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch questions");
        return response.json();
      })
      .then((data) => {
        setQuestions(data.questions || data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  const handleWithdraw = async () => {
    try {
      const response = await fetch(
        "https://ischool.eduengine.co.ke/api/earnings/withdraw",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalEarnings, userId: 1 }), // Replace with dynamic userId
        }
      );

      const result = await response.json();
      if (response.ok && result.success) {
        setWithdrawMessage(result.message || "Withdrawal requested.");
        setTotalEarnings(0);
      } else {
        setWithdrawMessage(result.message || "Withdrawal failed.");
      }
    } catch (err) {
      setWithdrawMessage("Server error during withdrawal.");
      console.error(err);
    }
  };

  const handlePlaceBid = async (questionId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const bidModal = new window.bootstrap.Modal(
      document.getElementById("bidModal")
    );

    if (!user || !user.user_id) {
      document.getElementById("bidModalLabel").textContent = "Login Required";
      document.getElementById("bidModalBody").textContent =
        "You must be logged in to place a bid.";
      bidModal.show();
      return;
    }

    try {
      const response = await fetch("https://ischool.eduengine.co.ke/api/bids", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId,
          userId: user.user_id,
        }),
      });

      const data = await response.json();
      document.getElementById("bidModalLabel").textContent = response.ok
        ? "Bid Successful"
        : "Sorry";
      document.getElementById("bidModalBody").textContent =
        data.message ||
        (response.ok
          ? `You have successfully placed a bid on request #${questionId}.`
          : "Unable to place your bid.");
      bidModal.show();
    } catch (error) {
      console.error("Bid error:", error);
      document.getElementById("bidModalLabel").textContent = "Server Error";
      document.getElementById("bidModalBody").textContent =
        "An error occurred while trying to place your bid.";
      bidModal.show();
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">📚 Requested Lessons</h1>
      <p className="text-muted">
        Explore all requests and place your bid to handle them for a reward.
      </p>

      {/* Earnings Summary */}
      <div className="card border-success mb-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">💼 My Earnings</h5>
          <p className="fs-3 fw-bold text-success">KES {totalEarnings}</p>
          <button className="btn btn-success" onClick={handleWithdraw}>
            Withdraw
          </button>
          {withdrawMessage && (
            <p className="mt-2 text-success">{withdrawMessage}</p>
          )}
        </div>
      </div>

      {/* Questions */}
      {loading ? (
        <div className="alert alert-info">Loading Requests...</div>
      ) : error ? (
        <div className="alert alert-danger">❌ {error}</div>
      ) : questions.length === 0 ? (
        <div className="alert alert-secondary">No requests have been asked yet.</div>
      ) : (
        questions.map((q) => (
          <div key={q.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💬 {q.text}</h5>
              <ul className="list-unstyled mb-3">
                <li>
                  <strong>Reward:</strong> KES {q.reward}
                </li>
                <li>
                  <strong>Request:</strong> {q.question}
                </li>
                <li>
                  <strong>Requested by:</strong> {q.user_id}
                </li>
                <li>
                  <strong>Date:</strong> {q.created_at}
                </li>
                <li>
                  <strong>Bids:</strong> {q.bids}
                </li>
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => handlePlaceBid(q.id)}
              >
                Place Bid
              </button>
            </div>
          </div>
        ))
      )}

      {/* Modal */}
      <div
        className="modal fade"
        id="bidModal"
        tabIndex="-1"
        aria-labelledby="bidModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bidModalLabel">
                ...
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="bidModalBody">
              ...
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requests;
