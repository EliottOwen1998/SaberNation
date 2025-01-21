import React, { useEffect } from "react";
import '../assets/styles/MeetTheTeam.css';
import C3PO from '../assets/images/c3po.jpg';
import R2D2 from '../assets/images/R2D2.jpg';
import SOLO from '../assets/images/Han.jpg';

const MeetTheTeam = () => {
  useEffect(() => {
    // Add class to body when the page loads
    document.body.classList.add('meet-the-team-page');

    // Cleanup by removing the class when the component is unmounted
    return () => {
      document.body.classList.remove('meet-the-team-page');
    };
  }, []);

  return (
    <section>
      <h1 className="team-title">Meet The Team</h1>
      <section className="employees-section">
        <div className="employee">
          <img src={C3PO} alt="C-3PO" />
          <h3>C-3PO</h3>
          <h4>Guiding Light at Saber Nations</h4>
          <p>
          C-3PO, once a humble protocol droid, has become the guiding light at
          Saber Nations. His journey from the depths of war to the forefront of
          peace and prosperity symbolizes unwavering dedication to service.
        </p>
        <p>
          At Saber Nations, C-3PO works tirelessly to build bridges between
          diverse cultures and species, ensuring that every lightsaber is crafted
          with precision and purpose. His expertise in diplomacy and protocol
          makes him an invaluable leader, navigating challenges with grace and
          poise.
        </p>
        <p>
          C-3PO's commitment to inclusivity and cooperation extends beyond the
          confines of Saber Nations. Through his efforts, he has united people
          from all walks of life, forging a brighter future for all who seek the
          power and wisdom of the Force. In every meeting and every negotiation,
          C-3PO's unshakeable belief in the power of unity shines through.
        </p>
      </div>

        <div className="employee">
          <img src={R2D2} alt="R2-D2" />
          <h3>R2-D2</h3>
          <h4>Innovator at Saber Nations</h4>
          <p>
          R2-D2 is not just a droid; he is an innovator and a symbol of
          resilience. With unmatched technical expertise, R2-D2 has revolutionized
          the way lightsabers are crafted at Saber Nations, ensuring every saber
          is more than just a weapon—it's a piece of art, precision-engineered
          for the most discerning users.
        </p>
        <p>
          His ability to adapt, problem-solve, and overcome obstacles has made him
          an indispensable member of the team. Whether it's repairing machinery,
          improving designs, or troubleshooting complex systems, R2-D2's
          contributions are immeasurable.
        </p>
        <p>
          R2-D2's impact extends far beyond the walls of the workshop. He is
          a living testament to the spirit of innovation and perseverance. His
          presence inspires all who work alongside him, reminding them that with
          determination, anything is possible—even in the face of adversity.
        </p>
        </div>

        <div className="employee">
          <img src={SOLO} alt="Han Solo" />
          <h3>Han Solo</h3>
          <h4>Delivery Captain of Saber Nations</h4>
          <p>
          Han Solo may have started as a rogue smuggler, but now he’s the heart
          and soul of Saber Nations' logistics operations. With his trademark
          quick wit and unparalleled skill as a pilot, Han ensures that every
          lightsaber crafted at Saber Nations is delivered on time and in perfect
          condition.
        </p>
        <p>
          As the Delivery Captain, Han works closely with R2-D2 and C-3PO to
          coordinate the transportation of lightsabers across the galaxy, reaching
          clients on every corner of the universe. Whether navigating asteroid
          fields or dodging imperial forces, Han is always ready to rise to the
          challenge.
        </p>
        <p>
          But Han's role goes beyond logistics. He is also a symbol of resilience
          and friendship. His journey with Chewbacca, his loyal co-pilot, and
          the bonds he's formed with C-3PO and R2-D2, represent the strength of
          teamwork and loyalty. Han Solo is more than just a delivery captain—
          he's a leader, a hero, and a friend to all who know him.
        </p>
        <p>
          Through his leadership at Saber Nations, Han continues to prove that
          the greatest journeys are not about the destination but the people you
          meet along the way.
        </p>
        </div>
      </section>
         {/* Job Offer Section */}
         <section className="job-offer-section">
        <h2 className="job-offer-title">Join Our Team at Saber Nations!</h2>
        <div className="position-overview">
          <h3>Position Overview:</h3>
          <p>
            We are currently seeking enthusiastic and detail-oriented individuals to join our lightsaber factory team. As a factory worker, you will be responsible for assisting in the production process of our lightsabers, working alongside our skilled craftsmen and utilizing state-of-the-art technology to ensure the highest level of quality in every saber we produce. 
          </p>
          <p>
            This is a unique opportunity to be part of a dynamic team, contribute to the creation of iconic Star Wars memorabilia, and play a key role in bringing joy to fans across the galaxy. If you're passionate about craftsmanship, technology, and the Star Wars universe, this is the perfect place for you to grow and thrive!
          </p>
          <a href="/job-page" className="apply-link">Learn More and Apply</a>
        </div>
      </section>
      <div className="job-offer-image"></div>
    </section>
  );
};

export default MeetTheTeam;