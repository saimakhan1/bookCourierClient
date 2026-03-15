import { useState } from "react";

// Example moods and recommended books
const moodBooks = {
  Motivated: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      link: "https://openlibrary.org/works/OL82563W",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      link: "https://openlibrary.org/works/OL15645216W",
    },
  ],
  Relaxed: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      link: "https://openlibrary.org/works/OL45804W",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      link: "https://openlibrary.org/works/OL14904374W",
    },
  ],
  Mystery: [
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      link: "https://openlibrary.org/works/OL45821W",
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      link: "https://openlibrary.org/works/OL24537657W",
    },
  ],
  Adventure: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      link: "https://openlibrary.org/works/OL262758W",
    },
    {
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      link: "https://openlibrary.org/works/OL15213655W",
    },
  ],
  Science: [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      link: "https://openlibrary.org/works/OL2627587W",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      link: "https://openlibrary.org/works/OL27745W",
    },
  ],
};

const MoodExplorer = () => {
  const [selectedMood, setSelectedMood] = useState("Motivated");

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌈 Explore Books by Mood
        </h1>

        {/* Mood Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(moodBooks).map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`btn ${
                selectedMood === mood ? "btn-primary" : "btn-outline"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moodBooks[selectedMood].map((book, idx) => (
            <div
              key={idx}
              className="bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <h3 className="font-semibold mt-3">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline mt-3 w-full"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodExplorer;
