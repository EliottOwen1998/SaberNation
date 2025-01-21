import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HNY from '../assets/images/happy1.jpg';  
import Ronin1 from '../assets/images/Ronin1.webp'; 
import Ronin2 from '../assets/images/Ronin2.webp'; 
import Ronin3 from '../assets/images/Ronin3.avif'; 
import Ronin4 from '../assets/images/Ronin4.webp';
import Ronin5 from '../assets/images/Ronin5.avif';
import Figure1 from '../assets/images/figureVader.jpg';
import Figure2 from '../assets/images/figureObi.jpg';
import Figure3 from '../assets/images/stormtrooper.avif';
import Figure4 from '../assets/images/Katan.avif';
import JediRobes from '../assets/images/jediRobes.jpg';
import Smuggler from '../assets/images/smuggler.jpg';
import Leia2 from '../assets/images/LeiaHot.jpg';
import '../assets/styles/homepage.css';
import MemeGenerator from '../components/memeGenerator';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();  

  const actionFigures = [
    {image: Figure1, productId: 24, name: "Darth Vader Episode V", price: 15},
    {image: Figure2, productId: 25, name: "Obi-Wan Kenobi Episode Episode II", price: 13},
    {image: Figure3, productId: 26, name: "Stormtrooper Episode IV", price: 11},
    {image: Figure4, productId: 27, name: "Bo Katan", price: 20},
  ]
  
  // Define action figures and clothing items array
  const clothingItems = [
    { image: JediRobes, productId: 21, name: "Jedi Master Robes", price: 41 },
    { image: Smuggler, productId: 22, name: "Smuggler's Suit", price: 38 },
    { image: Leia2, productId: 23, name: "Leia's Bikini", price: 50 },
  ]

  const slides = [
    { image: Ronin1, productId: 20 },
    { image: Ronin2, productId: 20 },
    { image: Ronin3, productId: 20 },
    { image: Ronin4, productId: 20 },
    { image: Ronin5, productId: 20 },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) =>
      direction === "next"
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <main>
      <div className="happy-new-year">
        <img src={HNY} />
      </div>
      <div className="content-wrapper">
        {/* Ronin Saber Slider (1/3rd) */}
        <div className="ronin-slider">
          <div className="slider-info">
            <div className="promo-banner">
              <p>🔥 Limited Time: 20% off all Samurai Lightsabers! 🔥</p>
            </div>
            <h3>The Ronin Saber</h3>
            <p>
              The Ronin Lightsaber, a limited edition masterpiece, symbolizes unmatched craftsmanship and prestige within the lightsaber community.
            </p>
            <p className="price">ᖬ33</p>
          </div>
          <div className="slider-image-container">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              onClick={() => navigateToProductDetail(slides[currentSlide].productId)}
            />
            <div className="slider-controls">
              <button onClick={() => changeSlide("prev")}>{"<<"}</button>
              <button onClick={() => changeSlide("next")}>{">>"}</button>
            </div>
          </div>
        </div>
  
        {/* Hero Section (2/3rd) */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>The Legendary Battle of Hoth</h1>
            <button className="catalog-button" onClick={() => navigate('/Blog')}>
              Read Blog
            </button>
          </div>
        </div>
  
 {/* Action Figures Section */}
<section className="action-figures">
  <div className="line" />
  <h2>Action Figures</h2>
  <p>Explore collectible action figures...</p>
  <div className="grid">
    {actionFigures.map(({ image, productId, name, price }) => (
      <div 
        key={productId} 
        className="card" 
        onClick={() => navigateToProductDetail(productId)} 
        style={{ cursor: "pointer" }}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3> {/* Display product name */}
        <p>Price: ᖬ{price}</p> {/* Display product price */}
      </div>
    ))}
  </div>
</section>

  
        {/* Video Block */}
        <div className="reviewVideo-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-IQU_q5Hs18"
            title="Battle of Hoth Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Additional Information Section */}
        <div className="additional-content">
          <h2>Did You Know?</h2>
          <ul>
            <li>Lightsabers are powered by Kyber crystals, which are attuned to the Force.</li>
            <li>The first lightsaber prototype was known as a "protosaber."</li>
            <li>The iconic lightsaber sound was created by Ben Burtt, combining a hum from an old projector and the buzz of a TV picture tube.</li>
          </ul>
        </div>
        <MemeGenerator />
        </div>
      </div>
  
      {/* Clothing Section */}
<section className="clothing-section">
  <h2>Featured Clothing</h2>
  <div className="grid">
    {clothingItems.map(({ image, productId, name, price }, index) => (
      <div 
        key={productId} 
        className="card" 
        onClick={() => navigateToProductDetail(productId)} // Use a unique ID or index
        style={{ cursor: "pointer" }} // Add pointer cursor for better UX
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Price: ᖬ{price}</p> {/* Display product price */}
      </div>
    ))}
  </div>
</section>
  
      <div className="line"></div>

      <div className="fanfilm-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JMbBjKnUoC4"
            title="Battle of Hoth Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
  
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated with Our Latest News!</h2>
          <p>Subscribe to our newsletter for exclusive offers, new products, and more.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="line"></div>

    </main>
  );
};

export default Home;
