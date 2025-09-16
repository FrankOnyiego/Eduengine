// Subject.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Subject({ subjectName, forms }) {
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [reward, setReward] = useState("");
  const [bidMessage, setBidMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("info");
  const [modalAction, setModalAction] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const showModal = (message, type = "info", onConfirm = null) => {
    setModalContent(message);
    setModalType(type);
    setModalVisible(true);
    setModalAction(() => onConfirm);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalAction(null);
  };

  const postQuestion = async (orderId) => {
    try {
      const response = await fetch("https://ischool.eduengine.co.ke/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.user_id,
          question: questionText,
          reward: parseFloat(reward),
          paymentRef: orderId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showModal("Question submitted successfully!", "success");
        setQuestionText("");
        setReward("");
        setQuestions((prev) => [
          ...prev,
          {
            id: data.questionId,
            text: questionText,
            reward: parseFloat(reward),
            timestamp: new Date().toLocaleTimeString(),
            asker: "You",
          },
        ]);
      } else {
        showModal(data.message || "Failed to submit question", "danger");
      }
    } catch (error) {
      showModal("An error occurred while submitting your question.", "danger");
    }
  };

  const handleRaiseHand = async (e) => {
    e.preventDefault();

    if (!user) {
      return showModal("Please log in to request a lesson.", "danger");
    }

    if (!questionText || !reward) {
      return showModal("Please enter both question text and reward.", "danger");
    }

    setLoading(true);

    try {
      const paymentInitRes = await fetch("https://ischool.eduengine.co.ke/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(reward),
          description: questionText,
          userId: user.id,
        }),
      });

      const paymentData = await paymentInitRes.json();

      if (paymentInitRes.ok && paymentData.redirect_url) {
        window.open(paymentData.redirect_url, "_blank");

        showModal(
          "After completing payment in the new tab, click 'Confirm' below to post your question.",
          "info",
          () => postQuestion(paymentData.order_id)
        );
      } else {
        showModal("Failed to initiate payment.", "danger");
      }
    } catch (error) {
      console.error("Error:", error);
      showModal("Something went wrong during the payment process.", "danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container-fluid py-4 text-start">
      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75"
          style={{ zIndex: 1050 }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Processing...</span>
          </div>
        </div>
      )}

      {!selectedSimulation ? (
        <>
          <h1>{subjectName} Learning Resources</h1>

          {/* Consultation Form 
          <div className="border p-3 rounded mb-4">
            <h2>Consultation</h2>
            <form onSubmit={handleRaiseHand}>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder={`Ask your ${subjectName} question here...`}
                className="form-control mb-2"
                required
                disabled={loading}
              />
              <div className="d-flex gap-2">
                <input
                  type="number"
                  value={reward}
                  onChange={(e) => setReward(e.target.value)}
                  className="form-control"
                  placeholder="Enter amount willing to spend in KES"
                  required
                  min="50"
                  disabled={loading}
                />
                <button type="submit" className="btn btn-success" disabled={loading}>
                  Post (Not Free)
                </button>
              </div>
            </form>
          </div>
          */}

          {/* Subject Content */}
          {Object.entries(forms).map(([formName, topics]) => (
            <div key={formName} className="mb-4">
              <h2>{formName}</h2>
              {topics.map((topic, topicIdx) => (
                <div key={topicIdx} className="mb-3">
                  <h3>{topic.title}</h3>
                  {topic.subtopics.map((subtopic, subIdx) => (
                    <div key={subIdx} className="mb-2">
                      <strong>{subtopic.title}</strong>
                      <p>{subtopic.note}</p>
                      {subtopic.simulationUrl ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => setSelectedSimulation(subtopic)}
                        >
                          Launch Simulation
                        </button>
                      ) : (
                        <p className="text-muted fst-italic">Simulation not available</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <>
          <button
            className="btn btn-danger mb-3"
            onClick={() => setSelectedSimulation(null)}
          >
            ← Back to Topics
          </button>
          <h2>{selectedSimulation.title}</h2>
          <p>{selectedSimulation.note}</p>
          <iframe
            src={selectedSimulation.simulationUrl}
            title={selectedSimulation.title}
            width="100%"
            height="600px"
            allowFullScreen
            style={{ border: "1px solid #ccc", borderRadius: "10px" }}
          />
        </>
      )}

      {/* Modal */}
      {modalVisible && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content border-${modalType}`}>
              <div className={`modal-header bg-${modalType} text-white`}>
                <h5 className="modal-title">
                  {modalType === "danger"
                    ? "Error"
                    : modalType === "success"
                    ? "Success"
                    : "Notice"}
                </h5>
                <button type="button" className="btn-close" onClick={hideModal}></button>
              </div>
              <div className="modal-body">
                <p>{modalContent}</p>
              </div>
              <div className="modal-footer">
                {modalAction ? (
                  <>
                    <button className="btn btn-secondary" onClick={hideModal}>
                      Cancel
                    </button>
                    <button
                      className={`btn btn-${modalType}`}
                      onClick={() => {
                        modalAction();
                        hideModal();
                      }}
                    >
                      Confirm
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary" onClick={hideModal}>
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subject;
