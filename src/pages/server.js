const express = require("express");
const app = express();
const port = 3000;

// Sample data
const memes = [
  {
    id: 1,
    imageUrl: "https://example.com/meme1.jpg",
    title: "When you realize it's a trap",
    tags: ["humor", "Admiral Ackbar"],
  },
  {
    id: 2,
    imageUrl: "https://example.com/meme2.jpg",
    title: "Darth Vader's Monday face",
    tags: ["humor", "Darth Vader"],
  },
];

// Endpoint to get all memes
app.get("/api/memes", (req, res) => {
  res.json(memes);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
