import './App.css'; // optional if you want to include global styles

function App() {
  return (
    <div className="min-h-screen bg-[#191919] text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1950&q=80')",
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
        <main className="relative z-10 text-center px-6 py-12 md:py-24 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-4 inline-block px-4 py-2 rounded-md backdrop-blur-sm bg-black/30 hero-text"
              style={{ fontFamily: "'DM Serif Display', serif" }}>
            Innovative Tools<br />
            & Infrastructure for <span style={{ color: '#287db9' }}>Next-Gen Learning</span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            At Eduengine, we design intelligent systems and educational infrastructure to help schools evolve.
            From digital learning platforms to scalable planning models, our work empowers educators and institutions
            to deliver better outcomes.
          </p>

          <div className="text-center text-white text-lg sm:text-xl leading-relaxed mb-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 hero-text" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our projects include:
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-2">
                <a
                  href="https://sim-portal.eduengine.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#287db9] font-bold hover:underline"
                >
                  Highschool science concepts simulations.
                </a>
              </li>
            </ul>
          </div>

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
              Igniting learning and lasting change.
            </span>
          </blockquote>

          {/* Contact Section */}
          <section className="bg-gray-900 text-white py-12 px-6 mt-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Person 1 */}
                <div className="flex items-center gap-6">
                  <img src="/profile.png" alt="Frank Nyaboga" className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-blue-500" />
                  <div>
                    <h3 className="text-xl font-semibold">Frank Nyaboga</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Co-founder of Eduengine, Education, Self-taught programmer. <br />
                      +254 703 409780
                    </p>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="flex items-center gap-6">
                  <img src="/profile.png" alt="Elijah Bundi" className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-blue-500" />
                  <div>
                    <h3 className="text-xl font-semibold">Elijah Bundi</h3>
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
    </div>
  );
}

export default App;
