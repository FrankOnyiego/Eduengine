import React from "react";
import "./SoftwaresPage.css"; // optional custom CSS

// ✅ Import local images from assets folder
import sickbayImg from "./sickbay.jpg";
import payrollImg from "./payroll.jpg";

const softwares = [
  {
    name: "E-Sickbay System",
    image: sickbayImg,
    description:
      "A comprehensive digital health management system for schools, ensuring timely medical record keeping, student health monitoring, and emergency readiness.",
    price: "KES 200,000",
  },
  {
    name: "E-Payroll System",
    image: payrollImg,
    description:
      "A modern payroll solution that automates staff payments, deductions, and statutory compliance with accuracy and efficiency.",
    price: "KES 200,000",
  },
];

const SoftwaresPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5 shadow-sm">
        <div className="container">
          <h1 className="fw-bold display-5">School Management Softwares</h1>
          <p className="lead mt-3">
            Empowering schools with digital tools for efficiency and
            accountability.
          </p>
        </div>
      </header>

      {/* Softwares Section */}
      <main className="container py-5">
        <div className="row g-4 justify-content-center">
          {softwares.map((software, index) => (
            <div className="col-md-5" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={software.image}
                  alt={software.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold">
                    {software.name}
                  </h5>
                  <p className="card-text">{software.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">
                      {software.price}
                    </span>
                    <a
                      href={`https://wa.me/254703409780?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                        software.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary fw-semibold"
                    >
                      Inquire Now
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

export default SoftwaresPage;
