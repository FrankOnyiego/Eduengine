import './App.css';
import { Link } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";

function App() {
  
  return (
    <div className="min-h-screen bg-[#191919] text-gray-200 font-sans">
      <Toaster position="top-right" />
      {/* Hero Section */}
      <div
        className="relative h-[500px] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('your-hero-image.jpg')", // replace with real image or keep your base64
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-wide">
            Welcome to <span className="text-[#FF914D]">EduEngine</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Empowering Teachers, Students, and Stakeholders through Science and Technology
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="https://chat.whatsapp.com/BCnURfiw7irEGnLIoYHH47?mode=ems_copy_t"
              className="px-6 py-3 bg-[#FF914D] hover:bg-[#ff7a26] rounded-2xl shadow-lg text-white font-medium transition"
            >
              Join Our Vibrant Community
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-[#FF914D]">EduEngine</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#262626] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Teacher Collaboration</h3>
            <p className="text-gray-400">
              A platform where teachers can share with each other and share best practices.
            </p>
          </div>
          <div className="bg-[#262626] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Learner Support</h3>
            <p className="text-gray-400">
              Students can get help in their learning areas with guidance from educators and stakeholders.
            </p>
          </div>
          <div className="bg-[#262626] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">CBC Consultancy</h3>
            <p className="text-gray-400">
              Helping schools adapt and excel in the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} EduEngine</p>
      </footer>
    </div>
  );
}

export default App;
