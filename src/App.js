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
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lpbAqh-N92ESy_61Y0-x6qRuXSK6-d7ZWg&s')",
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
        We are here to provide schools with the tools they need to deliver exceptional learning experiences, streamline operations, and stay ahead in an ever-evolving educational landscape.
        </p>

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
      JSS & Senior school science concepts simulations.
    </a>
    <a
      href="https://sim-portal.eduengine.co.ke/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm font-semibold"
    >
      Continue to our resources portal
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
