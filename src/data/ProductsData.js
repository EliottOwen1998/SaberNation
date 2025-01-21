import Cal from '../assets/images/Cal.webp';
import Malgus from '../assets/images/malgus5_500x.webp';
import StarKiller from '../assets/images/Starkiller.webp';
import Obi from '../assets/images/Obi.webp';
import Luke from '../assets/images/luke.webp';
import Maul from '../assets/images/Maul.webp';
import Anakin from '../assets/images/Anakin.webp';
import Windu from '../assets/images/Windu.webp';
import Dooku from '../assets/images/Dooku.webp';
import Qui from '../assets/images/Qui.webp';
import Vader from '../assets/images/Vader.webp';
import Obi2 from '../assets/images/Obi-two.webp';
import Leia from '../assets/images/Leia.webp';
import Kylo from '../assets/images/Kylo.webp';
import Mando from '../assets/images/Mando.webp';
import Tano from '../assets/images/Tano.webp';
import Guard from '../assets/images/Guard.webp';
import Ani from '../assets/images/Ani.webp';
import Ben from '../assets/images/Ben.webp';
import Ronin1 from '../assets/images/Ronin1.webp';
import Figure1 from '../assets/images/figureVader.jpg';
import Figure2 from '../assets/images/figureObi.jpg';
import JediRobes from '../assets/images/jediRobes.jpg';
import Smuggler from '../assets/images/smuggler.jpg';
import Leia2 from '../assets/images/LeiaHot.jpg';
import Figure3 from '../assets/images/stormtrooper.avif';
import Figure4 from '../assets/images/Katan.avif';

const productsData = [
  {
    id: 1,
    name: "The Fallen",
    description: "The weapon of choice against the evil empire for Cal Kestis, a young Jedi survivor after Order 66. Forged in the aftermath of the Clone Wars, the blue-bladed saber represents Cal's strength and perseverance in the face of the Empire's relentless pursuit.",
    price: 1100,
    image: Cal,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Durasteel",
      weight: "2.5 lbs",
      length: "11 inches",
    },
    rating: 3.8,
  },
  {
    id: 2,
    name: "The Malgus Saber",
    description: "The infamous red saber of the legendary Sith Lord Darth Malgus. Known for his destructive rage and command over the Sith Empire, Malgus wielded this powerful saber during the Great Galactic War, where he became a feared figure among the Sith and Jedi alike.",
    price: 1500,
    image: Malgus,
    specifications: {
      color: "Red",
      bladeType: "Single",
      hiltMaterial: "Electrum",
      weight: "3 lbs",
      length: "12 inches",
    },
    rating: 4,
  },
  {
    id: 3,
    name: "Starkiller",
    description: "No life form in the entire galaxy was more powerful than Starkiller, Darth Vader's secret apprentice. His saber, a dual-bladed weapon, reflects his unmatched strength in the Force and devastating combat skills, making him a near-mythical figure in the Star Wars lore.",
    price: 1350,
    image: StarKiller,
    specifications: {
      color: "Red",
      bladeType: "Dual",
      hiltMaterial: "Alloy Steel",
      weight: "4 lbs",
      length: "14 inches",
    },
    rating: 4.2,
  },
  {
    id: 4,
    name: "The Obi-Wan Kenobi",
    description: "Iconic Jedi Master Obi-Wan Kenobi's first lightsaber, constructed during his early years as a Jedi Knight. The light blue blade represents his status as a Jedi Padawan under Qui-Gon Jinn. This saber was wielded in pivotal battles, including the Clone Wars and his final confrontation with Darth Vader.",
    price: 1300,
    image: Obi,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Titanium",
      weight: "2 lbs",
      length: "10 inches",
    },
    rating: 4.8,
  },
  {
    id: 5,
    name: "The Jedi",
    description: "Luke Skywalker's saber, forged in his journey to becoming a Jedi Knight. A representation of his growth from a naïve farm boy to a wise Jedi, this green-bladed weapon was pivotal in the defeat of the Empire and the restoration of balance to the Force.",
    price: 900,
    image: Luke,
    specifications: {
      color: "Green",
      bladeType: "Single",
      hiltMaterial: "Carbon Fiber",
      weight: "2.5 lbs",
      length: "11.5 inches",
    },
    rating: 4,
  },
  {
    id: 6,
    name: "The Mauler",
    description: "The dual-bladed saber of Darth Maul, a deadly and agile Sith Lord. Known for his relentless combat style and exceptional agility, Maul's saber was a symbol of his fierce loyalty to the Sith and his thirst for vengeance against the Jedi.",
    price: 1800,
    image: Maul,
    specifications: {
      color: "Red",
      bladeType: "Dual",
      hiltMaterial: "Steel Alloy",
      weight: "4 lbs",
      length: "15 inches",
    },
    rating: 4.9,
  },
  {
    id: 7,
    name: "The Chosen One",
    description: "Anakin Skywalker's lightsaber, the weapon of the Chosen One. Wielded by Anakin during the Clone Wars and later as Darth Vader, this saber is synonymous with Anakin's rise, fall, and redemption, playing a central role in the fate of the galaxy.",
    price: 1555,
    image: Anakin,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Metal Composite",
      weight: "2.8 lbs",
      length: "11 inches",
    },
    rating: 4.7,
  },
  {
    id: 8,
    name: "The Windu",
    description: "The iconic purple lightsaber of Jedi Master Mace Windu, one of the most skilled and powerful Jedi in history. The purple blade represents his mastery of both the light and dark sides of the Force, as well as his distinctive fighting style, Vaapad.",
    price: 2000,
    image: Windu,
    specifications: {
      color: "Purple",
      bladeType: "Single",
      hiltMaterial: "Electrum-Plated Steel",
      weight: "3.2 lbs",
      length: "12 inches",
    },
    rating: 4.6,
  },
  {
    id: 9,
    name: "Qui's Gone",
    description: "Qui-Gon Jinn’s saber, wielded by the wise and insightful Jedi Master who discovered Anakin Skywalker. This green-bladed saber represents Qui-Gon's unique connection to the Force and his belief in the will of the Force, even in the face of opposition.",
    price: 1120,
    image: Qui,
    specifications: {
      color: "Green",
      bladeType: "Single",
      hiltMaterial: "Titanium Alloy",
      weight: "2.7 lbs",
      length: "11 inches",
    },
    rating: 3.8,
  },
  {
    id: 10,
    name: "Master Duelist",
    description: "The saber of Count Dooku, a former Jedi Master who turned to the dark side. Known for his graceful dueling style and his mastery of Form II, this curved-hilt lightsaber reflects his precision, elegance, and the twisted path that led him to the Sith.",
    price: 2300,
    image: Dooku,
    specifications: {
      color: "Red",
      bladeType: "Curved",
      hiltMaterial: "Electrum Alloy",
      weight: "3.5 lbs",
      length: "13 inches",
    },
    rating: 4.5,
  },
  {
    id: 11,
    name: "Vader's Legacy",
    description: "The iconic red lightsaber of Darth Vader, wielded by one of the galaxy’s most feared Sith Lords. A symbol of tyranny and dark power, this saber was pivotal in shaping the fate of the galaxy, from the rise of the Empire to the ultimate redemption of its wielder.",
    price: 1500,
    image: Vader,
    specifications: {
      color: "Red",
      bladeType: "Single",
      hiltMaterial: "Durasteel",
      weight: "3 lbs",
      length: "12 inches",
    },
    rating: 4.9,
  },
  {
    id: 12,
    name: "General Kenobi",
    description: "The final saber of Obi-Wan Kenobi, wielded during his final confrontation with Darth Vader on Mustafar. This blue saber is a testament to Obi-Wan's steadfast loyalty to the Jedi and his role in guiding and mentoring Anakin Skywalker.",
    price: 1700,
    image: Obi2,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Titanium",
      weight: "2.9 lbs",
      length: "11 inches",
    },
    rating: 4.8,
  },
  {
    id: 13,
    name: "The Princess",
    description: "A beautiful saber for a beautiful woman, this is the weapon of Princess Leia Organa. Known for her leadership in the Rebellion, Leia’s saber reflects her resilience, strength, and dedication to the cause of freedom in the galaxy.",
    price: 2100,
    image: Leia,
    specifications: {
      color: "Green",
      bladeType: "Single",
      hiltMaterial: "Electrum-Plated Steel",
      weight: "2.5 lbs",
      length: "10.5 inches",
    },
    rating: 3.9,
  },
  {
    id: 14,
    name: "Kylo Skywalker",
    description: "Kylo Ren’s unique crossguard lightsaber, a weapon forged in the fires of rage and pain. This saber represents Kylo’s conflict, symbolizing his intense connection to the dark side as well as his struggle for identity within the legacy of his grandfather, Darth Vader.",
    price: 3100,
    image: Kylo,
    specifications: {
      color: "Red",
      bladeType: "Crossguard",
      hiltMaterial: "Carbon Steel",
      weight: "4.2 lbs",
      length: "15 inches",
    },
    rating: 5,
  },
  {
    id: 15,
    name: "The Dark Saber",
    description: "The dark saber, an ancient and powerful weapon, is a symbol of leadership among the Mandalorians. It was forged by Tarre Vizsla, the first Mandalorian to become a Jedi, and has since passed through many hands, becoming a symbol of power and sovereignty in Mandalore.",
    price: 3000,
    image: Mando,
    specifications: {
      color: "Black",
      bladeType: "Single",
      hiltMaterial: "Beskar Steel",
      weight: "3.8 lbs",
      length: "13 inches",
    },
    rating: 5,
  },
  {
    id: 16,
    name: "Tano",
    description: "Dual-wield into mastery with the lightsabers of Jedi Master Ahsoka Tano. Ahsoka's unique fighting style and her use of two sabers during her journey from Padawan to one of the galaxy's most skilled duelists set her apart in the Star Wars universe.",
    price: 2300,
    image: Tano,
    specifications: {
      color: "White",
      bladeType: "Dual",
      hiltMaterial: "Aluminum Alloy",
      weight: "3 lbs",
      length: "12 inches (each)",
    },
    rating: 4.7,
  },
  {
    id: 17,
    name: "Temple Guard",
    description: "Wield the weapon used by the great protector of the ancient Jedi temple of Coruscant.",
    price: 1200,
    image: Guard,
    specifications: {
      color: "Yellow",
      bladeType: "Dual",
      hiltMaterial: "Electrum-Plated Alloy",
      weight: "3.5 lbs",
      length: "13 inches",
    },
    rating: 3.5,
  },
  {
    id: 18,
    name: "Padawan Skywalker",
    description: "The first saber of the legendary Anakin Skywalker. A perfect saber for a Padawan apprentice.",
    price: 920,
    image: Ani,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Steel Composite",
      weight: "2.6 lbs",
      length: "10.5 inches",
    },
    rating: 3.7,
  },
  {
    id: 19,
    name: "Solo Saber",
    description: "Before Kylo Ren, there was Ben Solo. Master the abilities and prowess it takes to become a Jedi.",
    price: 1050,
    image: Ben,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Titanium",
      weight: "2.7 lbs",
      length: "11 inches",
    },
    rating: 3,
  },
  {
    id: 20,
    name: "Samaria Saber",
    description: "The Ronin Lightsaber, a limited edition masterpiece, symbolizes unmatched craftsmanship and prestige within the lightsaber community. With its unique design and powerful legacy, the Ronin Saber is the perfect choice for both collectors and Star Wars enthusiasts.",
    price: 2600,
    image: Ronin1,
    specifications: {
      color: "Blue",
      bladeType: "Single",
      hiltMaterial: "Titanium",
      weight: "2.9 lbs",
      length: "13 inches",
    },
    rating: 4.6,
  },
  // Clothing
  {
    id: 21,
    name: "Jedi Master Robes",
    description: "Show your allegiance to the light, with these elegant Jedi robes. Made of 100% cotton for ultimate comfort.",
    price: 41,                     
    image: JediRobes,
    category: "Clothing",
    size: ["S", "M", "L", "XL"],
    rating: 4.0,
  },
  {
    id: 22,
    name: "Smugglers Suit",
    description: "Cause infinite mayhem and blast into oblivion, with this cool looking outfit.",
    price: 38,             
    image: Smuggler,
    category: "Clothing",
    size: ["S", "M", "L", "XL"],
    rating: 4.7,
  },
  {
    id: 23,
    name: "Leia's Bikini",
    description: "Sexy and sleek, the ultimate present for couples.",
    price: 50,             
    image: Leia2,
    category: "Clothing",
    size: ["S", "M", "L", "XL"],
    rating: 4.7,
  },
  // Action Figures
  {
    id: 24,
    name: "Darth Vader Episode V",
    description: "The big bad Darth Vader, crush your enemies for the good of the empire!",
    price: 15,
    image: Figure1,
    category: "Action Figures",
    height: "8 inches",                       
    rating: 4.6,                        
  },
  {
    id: 25,
    name: "Obi-Wan Kenobi Episode II",
    description: "The legendary Jedi master, Obi-Wan. Avenge the jedi order and bring back peace to the galaxy with this magnificent figure.",
    price: 13,
    image: Figure2,
    category: "Action Figures",
    height: "7 inches",
    rating: 4.2,
  },
  {
    id: 26,
    name: "Stormtrooper Episode IV",
    description: "A must-have for collectors, this Stormtrooper figure is ready to defend the Empire.",
    price: 11,
    image: Figure3,
    category: "Action Figures",
    height: "7 inches",
    rating: 4.3,
  },
  {
    id: 27,
    name: "Bo-Katan",
    description: "A rare collectors item of the great mandolorian warrior Bo Katan.",
    price: 20,
    image: Figure4,
    category: "Action Figures",
    height: "6 inches",
    rating: 4.9,
  },
];

export default productsData;
