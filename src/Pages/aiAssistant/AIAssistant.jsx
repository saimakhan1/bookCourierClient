import { useState } from "react";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your BookCourier AI Assistant. Ask me to recommend books 📚",
    },
  ]);

  const generateAnswer = (q) => {
    const query = q.toLowerCase();

    if (query.includes("programming") || query.includes("coding")) {
      return "Recommended programming books: Clean Code, The Pragmatic Programmer, You Don't Know JS.";
    }

    if (query.includes("science")) {
      return "Great science books include: A Brief History of Time, Cosmos, The Selfish Gene.";
    }

    if (
      query.includes("business") ||
      query.includes("money") ||
      query.includes("finance")
    ) {
      return "Popular business books: Atomic Habits, Rich Dad Poor Dad, The Psychology of Money.";
    }

    if (query.includes("mystery") || query.includes("detective")) {
      return "Mystery books you may enjoy: Sherlock Holmes, The Da Vinci Code, Gone Girl.";
    }

    if (query.includes("novel") || query.includes("story")) {
      return "Some famous novels: To Kill a Mockingbird, 1984, The Great Gatsby.";
    }

    if (query.includes("self help") || query.includes("motivation")) {
      return "Popular self-help books: Atomic Habits, Deep Work, Think and Grow Rich.";
    }

    if (query.includes("history")) {
      return "Interesting history books: Sapiens, Guns Germs and Steel, The Silk Roads.";
    }

    if (query.includes("beginner")) {
      return "Beginner friendly books: Atomic Habits, Deep Work, The Alchemist.";
    }

    return "I couldn't fully understand. Try asking about programming, science, mystery, business, novels or motivation 📚";
  };

  const handleAsk = () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", text: question };
    const aiMessage = { role: "assistant", text: generateAnswer(question) };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          🤖 AI Book Assistant
        </h1>

        <div className="h-[400px] overflow-y-auto border rounded-lg p-4 bg-base-200 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask for book suggestions..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="input input-bordered w-full"
          />

          <button onClick={handleAsk} className="btn btn-primary">
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
