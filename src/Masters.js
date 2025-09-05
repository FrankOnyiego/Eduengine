import React from "react";

const ConsultLanding = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">🔬 Physics & Chemistry Thesis Consultation</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Specialized support for Master’s & undergraduate students working on research, data analysis, and thesis writing in Chemistry & Physics.
        </p>
        <a
          href="https://wa.me/254712345678?text=Hello,%20I'm%20interested%20in%20Chem/Physics%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100"
        >
          📞 Book Free Consultation
        </a>
      </header>

      {/* What We Offer */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">✅ Our Specialties</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Research topic refinement in Physics or Chemistry",
            "Lab-based experimental design guidance",
            "Data analysis (SPSS, Python, Excel, OriginLab)",
            "Simulation projects using PhET or custom tools",
            "Scientific writing, citation, & plagiarism reduction",
            "Presentation & defense coaching",
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-l-4 border-blue-600 shadow p-4 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">💡 Why Choose Our Experts?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          With a background in Chemistry, Physics, and research supervision, we provide academic-level insights with practical, KCSE-to-graduate-level clarity.
        </p>
        <ul className="space-y-2 max-w-xl mx-auto text-left list-disc list-inside text-gray-800">
          <li>Experienced in physical sciences research methodologies</li>
          <li>Affordable pricing with installment plans</li>
          <li>100% personalized consultation sessions</li>
          <li>Quick response via WhatsApp & email</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">🚀 Ready to Get Started?</h2>
        <p className="mb-4">Book a free session or share your project topic with us today.</p>
        <a
          href="https://wa.me/254712345678?text=Hi%20I%20need%20help%20with%20my%20Physics/Chemistry%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded shadow hover:bg-blue-100"
        >
          📲 Chat on WhatsApp Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Educational Consulting • Powered by EduEngine
      </footer>
    </div>
  );
};

export default ConsultLanding;
