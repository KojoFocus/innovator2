import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const TechCompanyApp = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="bg-[#F1F2F6] text-[#2C3E50] font-sans">
      {/* Navbar */}
      <nav className="bg-[#34495E] w-full py-6 fixed top-0 z-50 shadow-2xl">
        <div className="flex justify-between items-center px-6 md:px-12">
          <a href="#" className="flex items-center space-x-2 text-[#00A8E8] text-3xl font-extrabold">
            <span>Tech Innovators</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {["Home", "Solutions", "Products", "About Us", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(" ", "")}`}
                className="text-white text-lg hover:text-[#FFB142] transition-all"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuVisible ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {isMenuVisible && (
          <div className="md:hidden bg-[#34495E] py-4">
            {["Home", "Solutions", "Products", "About Us", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(" ", "")}`}
                className="block px-4 py-3 text-white hover:bg-[#FFB142] transition-all"
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-[#00A8E8] text-white flex items-center justify-center text-center px-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Innovating the Future of Technology</h1>
          <p className="py-6 text-lg sm:text-xl">
            Discover cutting-edge solutions that transform industries and empower businesses.
          </p>
          <button className="px-8 py-4 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-[#1F8CFF] to-[#5A9BFF] rounded-lg shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-[#F9F9F9] px-8" id="solutions">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50]">Our Solutions</h2>
          <p className="py-4 text-lg sm:text-xl">
            Tailored tech solutions designed to optimize your business operations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {[ 
            { title: "Cloud Solutions", content: "Seamless cloud integration for faster, scalable, and secure operations." },
            { title: "AI & Automation", content: "Leveraging artificial intelligence to streamline processes and enhance productivity." },
            { title: "Cybersecurity", content: "Comprehensive security solutions to protect your data and digital assets." }
          ].map((solution, index) => (
            <div key={index} className="bg-[#FFFFFF] shadow-lg border border-[#00A8E8] rounded-xl p-8 w-80">
              <h3 className="text-2xl text-[#00A8E8] font-semibold">{solution.title}</h3>
              <p className="mt-4 text-lg">{solution.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-[#ECEFF1] px-8" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00A8E8]">Our Products</h2>
          <p className="py-4 text-lg sm:text-xl">Explore innovative products that drive digital transformation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((product) => (
            <div key={product} className="bg-[#FFFFFF] shadow-lg border border-[#00A8E8] rounded-xl hover:scale-105 transition-all">
              <img
                src={`https://via.placeholder.com/300?text=Product+${product}`}
                alt={`Product ${product}`}
                className="rounded-t-lg w-full h-56 sm:h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl text-[#00A8E8] font-semibold">Product {product}</h3>
                <p className="mt-4 text-lg">Advanced tech solutions for efficiency and growth.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-[#FFFFFF] px-8" id="aboutus">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50]">About Us</h2>
          <p className="py-4 text-lg sm:text-xl">We are pioneers in delivering tech-driven solutions for a sustainable future.</p>
        </div>
        <div className="flex justify-center gap-12">
          {[ 
            { title: "Our Vision", content: "To be the global leader in technology innovation and digital transformation." },
            { title: "Our Mission", content: "Empowering businesses with cutting-edge solutions for a smarter, more efficient future." },
          ].map((info, index) => (
            <div key={index} className="bg-[#FFFFFF] shadow-lg border border-[#00A8E8] rounded-xl p-8 w-80">
              <h3 className="text-2xl text-[#00A8E8] font-semibold">{info.title}</h3>
              <p className="mt-4 text-lg">{info.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F1F2F6] px-8" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F8CFF]">Get in Touch</h2>
          <p className="py-4 text-lg sm:text-xl text-[#2C3E50]">We’d love to hear from you. Reach out to us for all your tech needs.</p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50]">Full Name</label>
                <input type="text" id="name" name="name" className="mt-2 block w-full border border-[#D3D3D3] rounded-lg py-2 px-4 text-[#2C3E50] bg-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50]">Email Address</label>
                <input type="email" id="email" name="email" className="mt-2 block w-full border border-[#D3D3D3] rounded-lg py-2 px-4 text-[#2C3E50] bg-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50]">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-2 block w-full border border-[#D3D3D3] rounded-lg py-2 px-4 text-[#2C3E50] bg-white"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-[#1F8CFF] text-white text-lg font-bold rounded-lg shadow-md hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2C3E50] py-8 text-white">
        <div className="text-center">
          <p>&copy; 2024 Tech Innovators. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://facebook.com" className="text-white px-3 py-2 inline-block">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-white px-3 py-2 inline-block">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white px-3 py-2 inline-block">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:info@techinnovators.com" className="text-white px-3 py-2 inline-block">
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+1234567890" className="text-white px-3 py-2 inline-block">
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechCompanyApp;
