import { useState } from "react";
import "./App.css";

function App() {
  const [generatedquote, setQuote] = useState("");
  const url = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "your api key"; // Your API key

  function fetchdata() {
    fetch(url, {
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((data) => {
      const quote = data[0].quote; // Access the quote
      const author = data[0].author || "Unknown"; // Access the author
      const fullquote = `Quote: "${quote}" - Author: ${author}`;
      setQuote(fullquote);
    })
    .catch((error) => console.error("Error fetching the quote:", error));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 transition duration-500 ease-in-out">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold mb-4">Quote Generator</h1>
        <h2 className="text-lg text-gray-700 mb-4">{generatedquote}</h2>
        <button
          onClick={fetchdata}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Fetch New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
