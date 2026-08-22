// import { useState } from "react";

// const AIAssistant = () => {
//   const [question, setQuestion] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       text: "Hi! I'm your BookCourier AI Assistant. Ask me to recommend books 📚",
//     },
//   ]);

//   const generateAnswer = (q) => {
//     const query = q.toLowerCase();

//     if (query.includes("programming") || query.includes("coding")) {
//       return "Recommended programming books: Clean Code, The Pragmatic Programmer, You Don't Know JS.";
//     }

//     if (query.includes("science")) {
//       return "Great science books include: A Brief History of Time, Cosmos, The Selfish Gene.";
//     }

//     if (
//       query.includes("business") ||
//       query.includes("money") ||
//       query.includes("finance")
//     ) {
//       return "Popular business books: Atomic Habits, Rich Dad Poor Dad, The Psychology of Money.";
//     }

//     if (query.includes("mystery") || query.includes("detective")) {
//       return "Mystery books you may enjoy: Sherlock Holmes, The Da Vinci Code, Gone Girl.";
//     }

//     if (query.includes("novel") || query.includes("story")) {
//       return "Some famous novels: To Kill a Mockingbird, 1984, The Great Gatsby.";
//     }

//     if (query.includes("self help") || query.includes("motivation")) {
//       return "Popular self-help books: Atomic Habits, Deep Work, Think and Grow Rich.";
//     }

//     if (query.includes("history")) {
//       return "Interesting history books: Sapiens, Guns Germs and Steel, The Silk Roads.";
//     }

//     if (query.includes("beginner")) {
//       return "Beginner friendly books: Atomic Habits, Deep Work, The Alchemist.";
//     }

//     return "I couldn't fully understand. Try asking about programming, science, mystery, business, novels or motivation 📚";
//   };

//   const handleAsk = () => {
//     if (!question.trim()) return;

//     const userMessage = { role: "user", text: question };
//     const aiMessage = { role: "assistant", text: generateAnswer(question) };

//     setMessages((prev) => [...prev, userMessage, aiMessage]);
//     setQuestion("");
//   };

//   return (
//     <div className="min-h-screen bg-base-200 py-12 px-4">
//       <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-xl p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           🤖 AI Book Assistant
//         </h1>

//         <div className="h-[400px] overflow-y-auto border rounded-lg p-4 bg-base-200 mb-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-3 ${
//                 msg.role === "user" ? "text-right" : "text-left"
//               }`}
//             >
//               <span
//                 className={`inline-block px-4 py-2 rounded-lg ${
//                   msg.role === "user"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-300 text-black"
//                 }`}
//               >
//                 {msg.text}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Ask for book suggestions..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="input input-bordered w-full"
//           />

//           <button onClick={handleAsk} className="btn btn-primary">
//             Ask
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAssistant;

import { useEffect, useRef, useState } from "react";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your BookCourier AI Assistant. 📚 Tell me what kind of book you're looking for, and I'll suggest some options.",
    },
  ]);

  const messagesEndRef = useRef(null);

  // =========================================================
  // BOOK RECOMMENDATION LOGIC
  // =========================================================

  const generateAnswer = (q) => {
    const query = q.toLowerCase().trim();

    if (query.includes("programming") || query.includes("coding")) {
      return "💻 For programming and coding, you can start with:\n\n• Clean Code\n• The Pragmatic Programmer\n• You Don't Know JS\n\nThese are useful choices for improving programming practices and software development skills.";
    }

    if (query.includes("science")) {
      return "🔬 If you're interested in science, you might enjoy:\n\n• A Brief History of Time\n• Cosmos\n• The Selfish Gene\n\nThese books explore fascinating ideas about science, space, evolution, and our understanding of the world.";
    }

    if (
      query.includes("business") ||
      query.includes("money") ||
      query.includes("finance")
    ) {
      return "💼 For business, money, and personal finance, consider:\n\n• The Psychology of Money\n• Rich Dad Poor Dad\n• Atomic Habits\n\nThese books cover financial thinking, habits, decision-making, and personal growth.";
    }

    if (query.includes("mystery") || query.includes("detective")) {
      return "🔎 If you enjoy mystery and detective stories, try:\n\n• Sherlock Holmes\n• The Da Vinci Code\n• Gone Girl\n\nThese are great choices if you enjoy puzzles, investigations, suspense, and unexpected twists.";
    }

    if (query.includes("novel") || query.includes("story")) {
      return "📖 If you're looking for famous novels and engaging stories:\n\n• To Kill a Mockingbird\n• 1984\n• The Great Gatsby\n\nEach offers a different style of storytelling and explores memorable characters and themes.";
    }

    if (
      query.includes("self help") ||
      query.includes("self-help") ||
      query.includes("motivation") ||
      query.includes("motivational")
    ) {
      return "🌱 For personal growth and motivation, you may enjoy:\n\n• Atomic Habits\n• Deep Work\n• Think and Grow Rich\n\nThese books focus on habits, productivity, mindset, and personal development.";
    }

    if (query.includes("history")) {
      return "🏛️ If history interests you, consider:\n\n• Sapiens\n• Guns, Germs and Steel\n• The Silk Roads\n\nThese books explore human civilization, societies, cultures, and historical development.";
    }

    if (
      query.includes("beginner") ||
      query.includes("easy") ||
      query.includes("start")
    ) {
      return "🌟 If you're just getting started with reading, try:\n\n• Atomic Habits\n• Deep Work\n• The Alchemist\n\nThese are approachable choices across personal development, productivity, and fiction.";
    }

    if (
      query.includes("recommend") ||
      query.includes("suggestion") ||
      query.includes("suggest")
    ) {
      return "📚 I'd be happy to recommend something! Try telling me what you're interested in, such as:\n\n• Programming\n• Science\n• Mystery\n• Business\n• Novels\n• Motivation\n• History\n• Beginner-friendly books";
    }

    return "🤔 I couldn't fully understand your request yet.\n\nTry asking something like:\n\n• Recommend a programming book\n• I want a mystery novel\n• Suggest a science book\n• Books for beginners\n• Recommend a motivational book 📚";
  };

  // =========================================================
  // AUTO SCROLL TO LATEST MESSAGE
  // =========================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // =========================================================
  // ASK QUESTION
  // =========================================================

  const handleAsk = () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) return;

    const userMessage = {
      role: "user",
      text: trimmedQuestion,
    };

    const aiMessage = {
      role: "assistant",
      text: generateAnswer(trimmedQuestion),
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setQuestion("");
  };

  // =========================================================
  // ENTER KEY SUPPORT
  // =========================================================

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAsk();
    }
  };

  // =========================================================
  // QUICK QUESTIONS
  // =========================================================

  const quickQuestions = [
    {
      icon: "💻",
      text: "Programming books",
    },
    {
      icon: "🔬",
      text: "Science books",
    },
    {
      icon: "🔎",
      text: "Mystery books",
    },
    {
      icon: "🌱",
      text: "Self-help books",
    },
  ];

  const handleQuickQuestion = (text) => {
    setQuestion(text);

    const userMessage = {
      role: "user",
      text,
    };

    const aiMessage = {
      role: "assistant",
      text: generateAnswer(text),
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  // =========================================================
  // CLEAR CHAT
  // =========================================================

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Hi! I'm your BookCourier AI Assistant. 📚 Tell me what kind of book you're looking for, and I'll suggest some options.",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ===================================================== */}
      {/* ===================== HERO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-b border-primary/10 dark:border-gray-600 py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Hero Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-600 text-primary dark:text-blue-300 px-4 py-2 rounded-full shadow-sm font-medium mb-5">
                <span>🤖</span>
                <span>BookCourier AI Assistant</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Find Your Next{" "}
                <span className="text-primary dark:text-blue-300">
                  Great Read
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-200 leading-8 max-w-2xl">
                Not sure what to read? Tell our AI Assistant what you're
                interested in and get quick book recommendations based on your
                preferences.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                <div className="bg-white dark:bg-gray-600 rounded-full px-4 py-2 shadow-sm text-sm">
                  📚 Book Suggestions
                </div>

                <div className="bg-white dark:bg-gray-600 rounded-full px-4 py-2 shadow-sm text-sm">
                  ⚡ Quick Responses
                </div>

                <div className="bg-white dark:bg-gray-600 rounded-full px-4 py-2 shadow-sm text-sm">
                  🎯 Interest Based
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-4 rounded-full bg-blue-400/20 dark:bg-blue-400/10 blur-2xl" />

                <div className="absolute inset-8 bg-white dark:bg-gray-600 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-500 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-gray-500 flex items-center justify-center mb-4">
                    <span className="text-5xl">🤖</span>
                  </div>

                  <h3 className="font-bold text-lg">Ask Me Anything</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    About books 📚
                  </p>
                </div>

                {/* Floating Icons */}

                <div className="absolute top-2 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  📖
                </div>

                <div className="absolute top-6 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  💡
                </div>

                <div className="absolute bottom-5 left-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  ⭐
                </div>

                <div className="absolute bottom-1 right-0 w-12 h-12 bg-white dark:bg-gray-500 rounded-xl shadow-lg flex items-center justify-center text-xl">
                  🔎
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ====================== CHAT AREA ==================== */}
      {/* ===================================================== */}

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl shadow-lg overflow-hidden">
          {/* Chat Header */}

          <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-5 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-gray-600 flex items-center justify-center text-2xl">
                🤖
              </div>

              <div>
                <h2 className="font-bold text-lg">AI Book Assistant</h2>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Ready to help</span>
                </div>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="btn btn-sm btn-ghost"
              title="Clear conversation"
            >
              🗑️ Clear
            </button>
          </div>

          {/* Chat Messages */}

          <div className="h-[430px] overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-3 max-w-[85%] md:max-w-[75%] ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}

                  <div
                    className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-white"
                        : "bg-primary/10 dark:bg-gray-600"
                    }`}
                  >
                    {msg.role === "user" ? "👤" : "🤖"}
                  </div>

                  {/* Message Bubble */}

                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-sm"
                        : "bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-tl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line leading-6 text-sm md:text-base">
                      {msg.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* ================================================= */}
          {/* ================= QUICK QUESTIONS =============== */}
          {/* ================================================= */}

          <div className="px-4 md:px-6 pt-5">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-3">
              Try asking about:
            </p>

            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(item.text)}
                  className="px-3 py-2 rounded-full border border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-gray-600 hover:bg-primary/10 dark:hover:bg-gray-500 transition-colors text-sm"
                >
                  {item.icon} {item.text}
                </button>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= INPUT AREA ==================== */}
          {/* ================================================= */}

          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Ask for book suggestions..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                className="input input-bordered w-full bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-500 focus:border-primary focus:outline-none"
              />

              <button
                onClick={handleAsk}
                disabled={!question.trim()}
                className="btn btn-primary px-7"
              >
                Ask 🤖
              </button>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-400 mt-3">
              Press Enter to send your question.
            </p>
          </div>
        </div>
      </main>

      {/* ===================================================== */}
      {/* ===================== INFO SECTION ================== */}
      {/* ===================================================== */}

      <section className="bg-primary/10 dark:bg-gray-700 border-y border-primary/10 dark:border-gray-600 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-9">
            <span className="text-primary dark:text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Explore Your Reading Interests
            </span>

            <h2 className="text-3xl font-bold mt-3">What Can You Ask?</h2>

            <p className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-gray-200">
              The assistant can currently provide recommendations across several
              popular reading categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5 border border-gray-200 dark:border-gray-500">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold mb-2">Programming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Discover books about coding and software development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5 border border-gray-200 dark:border-gray-500">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold mb-2">Science</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Explore fascinating books about science and discovery.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5 border border-gray-200 dark:border-gray-500">
              <div className="text-3xl mb-3">🔎</div>
              <h3 className="font-bold mb-2">Mystery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Find detective stories, mysteries, and suspenseful reads.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-600 rounded-2xl p-5 border border-gray-200 dark:border-gray-500">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold mb-2">Personal Growth</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Discover books about habits, productivity, and motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ===================== BOTTOM CTA ==================== */}
      {/* ===================================================== */}

      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center text-3xl mb-5">
            📚
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Still Not Sure What to Read?
          </h2>

          <p className="text-gray-600 dark:text-gray-200 leading-7 mb-6">
            Browse the BookCourier collection and discover books that match your
            interests.
          </p>

          <a href="/books" className="btn btn-primary px-7">
            Explore Books 📚
          </a>
        </div>
      </section>
    </div>
  );
};

export default AIAssistant;
