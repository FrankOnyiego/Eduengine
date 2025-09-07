import React from "react";
import "./STEMKitsPage.css"; // Keep your custom CSS for extra tweaks

const kits = [
  {
    name: "Chemistry STEM Kit",
    image: "https://images.unsplash.com/photo-1581091226825-c6a89e8b3c1f",
    description: "Dive into the exciting world of chemistry with safe experiments designed for learners.",
    price: "KES 11,500",
    contents: [
      "Test tubes (x5)",
      "Plastic beaker & measuring cylinder",
      "Droppers & funnels",
      "Safe chemicals for 10+ experiments",
      "Safety goggles & gloves",
    ],
  },
  {
    name: "Physics STEM Kit",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    description: "Explore motion, forces, and energy through hands-on experiments.",
    price: "KES 11,800",
    contents: [
      "Pulleys and string set",
      "Magnets (bar & ring types)",
      "Wires and battery holders",
      "Simple machines models",
      "Light bulbs & small switches",
    ],
  },
  {
    name: "Robotics Kit (Arduino)",
    image: "https://images.unsplash.com/photo-1581090700227-4c4a1c2b7a3b",
    description: "Build real robotic and electronic projects using Arduino.",
    price: "KES 12,200",
    contents: [
      "Arduino Uno board",
      "Breadboard & jumper wires",
      "LEDs, resistors, buzzers",
      "IR sensor, ultrasonic sensor",
      "Servo motor & DC motors",
    ],
  },
  {
    name: "Ark of the Covenant Replica Kit",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ark_of_the_Covenant.jpg/640px-Ark_of_the_Covenant.jpg",
    description: "Build a scale replica of the Ark of the Covenant, exploring ancient history.",
    price: "KES 15,000",
    contents: [
      "Wooden frame pieces",
      "Gold-colored paint",
      "Mini stone tablets",
      "Instruction manual with biblical history",
    ],
  },
  {
    name: "Acting & Drama Kit",
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791",
    description: "Perfect for drama lovers—props, scripts, and costumes to practice acting.",
    price: "KES 8,900",
    contents: [
      "Theater masks",
      "Sample short play scripts",
      "Basic costume props",
      "Acting exercise guide",
    ],
  },
  {
    name: "Astronomy Stargazing Kit",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Learn about constellations with a beginner’s telescope and star maps.",
    price: "KES 14,500",
    contents: [
      "Portable telescope",
      "Star map booklet",
      "Glow-in-the-dark constellations chart",
    ],
  },
  {
    name: "Electronics Beginner Kit",
    image: "https://images.unsplash.com/photo-1581090700227-4c4a1c2b7a3b",
    description: "Hands-on kit to learn about circuits and electronic components.",
    price: "KES 9,200",
    contents: [
      "Breadboard",
      "Jumper wires",
      "LEDs & resistors",
      "Small DC motor",
      "Battery holder",
    ],
  },
  {
    name: "Biology Dissection Kit",
    image: "https://images.unsplash.com/photo-1611171716018-3e46c46aeb65",
    description: "Study anatomy with safe, guided dissection specimens and tools.",
    price: "KES 13,000",
    contents: [
      "Scalpel and tweezers",
      "Prepared specimens",
      "Protective gloves",
      "Dissection manual",
    ],
  },
  {
    name: "Music Band Starter Kit",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    description: "For aspiring musicians—explore rhythm, melody, and instruments.",
    price: "KES 10,500",
    contents: [
      "Acoustic guitar",
      "Basic drum pad",
      "Flute",
      "Beginner music guide",
    ],
  },
  {
    name: "Art & Painting Kit",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    description: "Unleash creativity with brushes, paints, and sketchbooks.",
    price: "KES 7,800",
    contents: [
      "Acrylic paint set",
      "Brushes",
      "Canvas & sketchbook",
      "Palette & easel",
    ],
  },
];


const STEMKitsPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5 shadow-sm">
        <div className="container">
          <h1 className="fw-bold display-5">STEM Kits for Curious Young Minds</h1>
          <p className="lead mt-3">
            Discover, experiment, and build with kits designed for CBE learners in Kenya.
          </p>
        </div>
      </header>

      {/* Kits Section */}
      <main className="container py-5">
        <div className="row g-4">
          {kits.map((kit, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img src={kit.image} alt={kit.name} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold">{kit.name}</h5>
                  <p className="card-text">{kit.description}</p>
                  <ul className="list-unstyled mb-3">
                    {kit.contents.map((item, i) => (
                      <li key={i}>✅ {item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">{kit.price}</span>
                    <a
                      href={`https://wa.me/254703409780?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                        kit.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary fw-semibold"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default STEMKitsPage;
