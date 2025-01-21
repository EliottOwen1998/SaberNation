import React from 'react';
import '../assets/styles/blog.css';
import Plans from '../assets/images/hothPlans.jpg';
import Hoth1 from '../assets/images/hoth1.webp';
import Hoth2 from '../assets/images/hoth2.jpeg';
import Hoth3 from '../assets/images/Hoth3.webp';
import Hoth4 from '../assets/images/Hoth4.jpg';

const BlogPage = () => {
  return (
      <main>
        <div className="content-container">
          {/* Blog Posts Section */}
          <section className="blog-posts">
            <article className="blog-post">
              <h2>Battle of Hoth</h2>
              <p className="post-meta">Published on January 1, 2025 by Author</p>
              <img src={Hoth3} alt="Battle of Hoth" className="planet" />
              <p>At the time of the Battle of Hoth, the galaxy was deep in the midst of the Galactic Civil War, with the Rebel Alliance trying to hold its ground against the Empire’s overwhelming might. The Rebels, having lost their base on Yavin IV after the destruction of the first Death Star, had set up a new stronghold on the remote ice planet of Hoth. While the Alliance sought to regroup and rebuild, the Empire, led by Emperor Palpatine and his enforcer, Darth Vader, was determined to crush the Rebellion. Upon learning of the Echo Base’s location through a probe droid, Darth Vader set in motion an invasion plan designed to destroy the Rebel forces once and for all. The Empire’s primary objectives were clear: eliminate Echo Base, capture the Rebel leadership, and crush the Alliance’s capacity for resistance. Additionally, a critical part of the mission was to capture Luke Skywalker, the legendary hero who had destroyed the first Death Star, in hopes of breaking the morale of the Rebellion. Darth Vader’s tactical approach involved sending a large-scale Imperial force, including the menacing AT-AT walkers, under the command of General Maximilian Veers, to neutralize the Rebel defenses. Meanwhile, the Empire aimed to seize control of the base's key systems and force the Rebels into a complete and humiliating retreat. For the Empire, this was a calculated strike to break the Rebels' spirit, eliminate their leadership, and bring an end to their campaign against Imperial rule.</p>
              <div className="blog-image-container">
              <img src={Plans} alt="Battle of Hoth" className="blog-image" />
              <img src={Hoth4} alt="Battle of Hoth" className="blog-image" />
              </div>
              <p>The battle began with an intense ground assault led by the Empire’s formidable AT-AT walkers, which quickly proved to be a daunting challenge for the Rebel forces. General Maximilian Veers, commanding the Imperial ground forces, focused on destroying the Rebel base’s power generator, which would pave the way for orbital bombardment and allow the Empire to systematically wipe out the Rebel defenses. The Rebels, though outgunned and outmatched, mounted a desperate defense under the leadership of their most famous commander, Luke Skywalker. Rogue Squadron, piloted by a skilled group of Rebel pilots, including Skywalker himself, used their T-47 airspeeders in an effort to hold back the advancing walkers. However, these snowspeeders, though nimble and agile, lacked the firepower to seriously damage the heavily armored AT-ATs. As the battle raged on, Luke Skywalker, realizing that conventional tactics would not suffice, devised a daring plan. Using the tow cables attached to the snowspeeders, Skywalker and his fellow pilots executed a bold maneuver, tripping the towering walkers and sending them crashing to the snow-covered ground. This innovative strategy, although untested, caught the Empire off guard and gave the Rebels a glimmer of hope amidst the overwhelming Imperial force. However, despite their valiant efforts, the Rebel defense began to falter as the Empire’s relentless assault continued.</p>
              <p>As the battle raged on, the Rebels, despite their best efforts, were unable to prevent the Empire from achieving its objective. The primary goal of the Imperial forces was to destroy Echo Base’s main power generator, which they succeeded in doing. Once the generator was destroyed, the Empire launched an orbital bombardment to further incapacitate the Rebels. General Maximilian Veers' AT-ATs then advanced on the ground, while Darth Vader led a ground assault to capture the base. Princess Leia, who was in charge of the Rebel forces on Hoth, oversaw the evacuation plan. With the Rebel forces on the brink of defeat, Leia managed to direct a hasty retreat. However, as the Empire’s forces, including Darth Vader, closed in, the Rebels were forced to flee just before Vader could reach them. The evacuation was chaotic, but the majority of the Rebel personnel, including Leia, Han Solo, and C-3PO, managed to escape the planet in time, though the base was lost. The Rebels scattered across the galaxy, but their resolve remained unshaken. Though the battle marked a decisive Imperial victory, the loss of Echo Base only fueled the Rebel Alliance's determination to fight on, culminating in their eventual triumph at the Battle of Endor.</p>
              <div className="blog-image-container">
              <img src={Hoth1} alt="Battle of Hoth" className="blog-image" />
              <img src={Hoth2} alt="Battle of Hoth" className="blog-image" />
              </div>
              <blockquote>
                <p>"My lord, the fleet has moved out of lightspeed. Com-scan has detected an energy field protecting an area of the sixth planet of the Hoth system. The field is strong enough to deflect any bombardment."</p>
                <p>"The Rebels are alerted to our presence. Admiral Ozzel came out of lightspeed too close to the system."</p>
                <p>"He...He felt surprise was wiser—"</p>
                <p>"He is as clumsy as he is stupid. General, prepare your troops for a surface attack."</p>
                <p>"Yes, my Lord."</p>
                <footer>- General Maximilian Veers and Darth Vader</footer>
              </blockquote>
             
            <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DctG_5-1wwM?t=7s"
              title="Battle of Hoth Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
            </article>
          </section>

         {/* Sidebar with User Forum */}
         <aside className="forum">
            <h3>User Forum</h3>
            <div className="forum-discussion">
              <h4>LukeSkywalker77</h4>
              <p><strong>Opinion:</strong> "The Battle of Hoth is one of the most iconic moments in Star Wars. The AT-ATs were terrifying, but the Rebel pilots' strategy to trip them was genius!"</p>
            </div>
            <div className="forum-discussion">
              <h4>LeiaOrganaFan</h4>
              <p><strong>Product Review:</strong> "I recently purchased the Hoth AT-AT model from Saber Nation, and it exceeded all expectations! The detail is amazing, and it looks perfect on my shelf."</p>
            </div>
            <div className="forum-discussion">
              <h4>DarthVaderFan99</h4>
              <p><strong>Opinion:</strong> "I’ve always felt that Darth Vader's presence in the Battle of Hoth is understated. He was the true mastermind behind the attack, even though the AT-ATs stole the spotlight."</p>
            </div>
            <div className="forum-discussion">
              <h4>RebelPilotX</h4>
              <p><strong>Question:</strong> "What would’ve happened if the Rebels didn’t come up with the snowspeeder trick? Would the Empire have won more decisively?"</p>
            </div>

            <h3>Recent Forum Posts</h3>
            <ul>
              <li><a href="#">How the Battle of Hoth Shaped the Rebellion's Future</a></li>
              <li><a href="#">Best Star Wars Battle Tactics: Comparing Endor and Hoth</a></li>
              <li><a href="#">Star Wars Toys and Collectibles Review</a></li>
            </ul>
          </aside>
        </div>
      </main>
  );
};

export default BlogPage;