import './App.css';
import { Link } from 'react-router-dom';
import ConsultLanding from './Masters';

function App() {
  return (
    <div className="min-h-screen bg-[#191919] text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col justify-between"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
        }}
      > 
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center space-x-4">
            <img src="./MYLOGO.png" alt="Eduengine Logo" className="h-auto w-auto max-h-16 md:max-h-24" />
          </div>
          <div className="text-white text-lg font-semibold text-right leading-tight">
            <h1 className="text-lg md:text-xl font-semibold">Powering<br />Future Schools</h1>
          </div>
        </header>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-4 inline-block px-4 py-2 rounded-md backdrop-blur-sm bg-black/30 hero-text"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
            Tools<br />
            & Resources for <span style={{ color: '#287db9' }}>Next-Gen Learning</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <main className="text-center px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
Eduengine is a collaborative platform where teachers, learners, and education stakeholders connect, share expertise, and support one another. We provide a space for teachers to consult with peers and professionals, and for learners to access guidance in their academic journey—building a stronger, more connected educational community.        </p>

        <div className="text-white text-lg sm:text-xl leading-relaxed mb-6 max-w-xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4 hero-text" style={{ fontFamily: "'DM Serif Display', serif" }}>
    We are leaders in the following:
  </h2>
<ul className="list-disc list-inside space-y-4 sm:space-y-5">
  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <a
      href="https://sim-portal.eduengine.co.ke"
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 hover:underline text-blue-700 font-bold"
    >
      JSS & Senior school forum.
    </a>
    <a
      href="https://sim-portal.eduengine.co.ke/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm font-semibold"
    >
      Continue to our portal
    </a>
  </li>


  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <a
      href="https://sim-portal.eduengine.co.ke/consult"
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 hover:underline text-blue-700 font-bold"
    >
      Collaboration on scientific projects.
    </a>
    <a
      href="https://sim-portal.eduengine.co.ke/consult"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm font-semibold"
    >
      Continue to find a project partner.
    </a>
  </li>
</ul>

</div>



        {/* Quote Section */}
        <blockquote
          className="relative text-2xl sm:text-3xl font-medium text-white px-6 py-6 mt-12 max-w-3xl mx-auto text-center"
          style={{
            fontFamily: "'DM Serif Display', serif",
            lineHeight: '1.4',
          }}
        >
          <span
            className="absolute block text-[14em] leading-none text-white/15 top-[-6rem] left-1/2 transform -translate-x-1/2 select-none font-sans"
            aria-hidden="true"
          >
            “
          </span>
          <span className="relative z-10 block">
            Free Delivery & Installation within 30 days in Kenya.
          </span>
        </blockquote>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white py-12 px-6 mt-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Person 1 */}
              <div className="flex items-center gap-6">
                <img src="/frank.png" alt="Frank Nyaboga" className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">Frank Nyaboga</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Co-founder of Eduengine, Education (profession), Software Developer. <br />
                    +254 703 409780
                  </p>
                </div>
              </div>
 
              {/* Person 2 */}
              <div className="flex items-center gap-6">
                <img src="/elijah.jpg" alt="Elijah Bundi" className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">Bundi Okeri</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Co-founder of Eduengine, Business processes & Economist. <br />
                    +254 795 035537
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#191919] text-center py-6 text-sm text-white">
        &copy; 2025 Eduengine. Powering future schools.
      </footer>
    </div>
  );
}

export default App;
