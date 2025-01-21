import React, { useState } from 'react';
import '../assets/styles/meme.css';

const MemeGenerator = () => {
  const [randomImage, setRandomImage] = useState(null); // Default state for meme image
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStarWarsMeme = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch memes from your API or curated API
      const response = await fetch(
        'https://api.imgflip.com/get_memes' // Example: Imgflip API
      );
      const data = await response.json();

      if (data.success) {
        // Filter for Star Wars memes
        const starWarsMemes = data.data.memes.filter((meme) =>
          meme.name.toLowerCase().includes('star wars')
        );

        if (starWarsMemes.length > 0) {
          const randomIndex = Math.floor(Math.random() * starWarsMemes.length);
          setRandomImage(starWarsMemes[randomIndex].url);
        } else {
          setError('No Star Wars memes found.');
        }
      } else {
        setError('Failed to fetch memes.');
      }
    } catch (error) {
      setError('Something went wrong while fetching memes.');
    }

    setIsLoading(false);
  };

  return (
    <div className="meme-generator">
      <h3>Generate Random Star Wars Memes</h3>
      <button onClick={fetchStarWarsMeme} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Meme'}
      </button>
      {error && <p className="error">{error}</p>}
      {randomImage && (
        <div className="meme">
          <img src={randomImage} alt="Star Wars Meme" />
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;

