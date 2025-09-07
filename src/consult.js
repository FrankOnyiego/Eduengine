import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Consult() {
  const [threads, setThreads] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddThread = () => {
    if (!newQuestion.trim()) return;
    const thread = {
      id: Date.now(),
      question: newQuestion,
      answers: [],
    };
    setThreads([thread, ...threads]);
    setNewQuestion("");
    toast.success("✅ Question posted!");
  };

  const handleAddAnswer = (threadId, answer, file) => {
    const newAnswer = { id: Date.now(), text: answer };

    if (file) {
      newAnswer.file = {
        name: file.name,
        url: URL.createObjectURL(file), // 👈 creates local preview link
      };
    }

    setThreads(
      threads.map((t) =>
        t.id === threadId ? { ...t, answers: [...t.answers, newAnswer] } : t
      )
    );

    toast.success("✅ New answer posted!");
  };

  return (
    <div className="min-h-screen bg-[#191919] text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔎 Consult – Ask & Answer
      </h1>

      {/* Ask a Question */}
      <div className="bg-[#262626] p-4 rounded-xl shadow mb-8">
        <textarea
          className="w-full bg-[#1c1c1c] p-3 rounded-lg border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF914D] mb-3"
          rows="3"
          placeholder="Ask your question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button
          onClick={handleAddThread}
          className="bg-[#FF914D] hover:bg-[#ff7a26] text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Post Question
        </button>
      </div>

      {/* Threads List */}
      <div className="space-y-6">
        {threads.map((thread) => (
          <Thread
            key={thread.id}
            thread={thread}
            onAddAnswer={handleAddAnswer}
          />
        ))}
        {threads.length === 0 && (
          <p className="text-center text-gray-500">
            No questions yet. Be the first to ask!
          </p>
        )}
      </div>
    </div>
  );
}

function Thread({ thread, onAddAnswer }) {
  const [answer, setAnswer] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (!answer.trim() && !file) return;
    onAddAnswer(thread.id, answer, file);
    setAnswer("");
    setFile(null);
  };

  return (
    <div className="bg-[#262626] p-5 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">{thread.question}</h2>

      {/* Answers */}
      <div className="space-y-2 mb-3">
        {thread.answers.map((a) => (
          <div
            key={a.id}
            className="bg-[#1c1c1c] p-3 rounded-lg text-sm text-gray-300"
          >
            <p>{a.text}</p>
            {a.file && (
              <a
                href={a.file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-[#FF914D] underline"
              >
                📎 {a.file.name}
              </a>
            )}
          </div>
        ))}
        {thread.answers.length === 0 && (
          <p className="text-gray-500 text-sm">No answers yet.</p>
        )}
      </div>

      {/* Answer form */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Write an answer..."
          className="flex-1 bg-[#1c1c1c] p-2 rounded-lg border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF914D]"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="text-sm text-gray-400"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#FF914D] hover:bg-[#ff7a26] text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Reply
        </button>
      </div>
    </div>
  );
}
