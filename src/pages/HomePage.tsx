import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

import soap from "../assets/sanitizer.avif";
import lotion from "../assets/lotion.jpg";
import showerGel from "../assets/showergel.avif";

const HomePage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="bg-[#F1F2F6] text-[#2C3E50] font-sans">
      {/* Navbar */}
      <nav className="bg-[#34495E] w-full py-6 fixed top-0 z-50 shadow-2xl">
        <div className="flex justify-between items-center px-6 md:px-12">
          <a
            href="#"
            className="flex items-center space-x-2 text-[#E67E22] text-3xl font-extrabold"
          >
            <span>Glow Cosmetics</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {["Home", "Solutions", "Products", "About Us", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase().replace(" ", "")} // Set to corresponding section id
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll animation
                offset={-70} // Offset to account for fixed navbar
                className="text-white text-lg hover:text-[#FFC312] transition-all"
              >
                {section}
              </Link>
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
              <Link
                key={section}
                to={section.toLowerCase().replace(" ", "")} // Set to corresponding section id
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll animation
                offset={-70} // Offset to account for fixed navbar
                className="block px-4 py-3 text-white hover:bg-[#FFC312] transition-all"
              >
                {section}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-[#E67E22] text-white flex items-center justify-center text-center px-8" id="home">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Embrace Your Natural Glow
          </h1>
          <p className="py-6 text-lg sm:text-xl">
            Premium skincare products crafted for radiant, healthy skin.
          </p>
          {/* Updated button */}
          <button
            onClick={() => {
              // Scroll to the About Us section when clicked
              const aboutUsSection = document.getElementById("aboutus");
              if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-[#FFA502] to-[#FF6348] rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-[#F9F9F9] px-8" id="solutions">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50]">
            Why Choose Us?
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            Skincare solutions that nourish and rejuvenate.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              title: "Natural Ingredients",
              content:
                "Our products are crafted with the finest natural ingredients for a gentle yet effective skincare experience.",
            },
            {
              title: "Dermatologist Approved",
              content:
                "Trusted by experts to provide the best care for your skin.",
            },
            {
              title: "Eco-Friendly Packaging",
              content:
                "Sustainability is at our core, with recyclable and eco-friendly materials.",
            },
          ].map((solution, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-lg border border-[#E67E22] rounded-xl p-8 w-80"
            >
              <h3 className="text-2xl text-[#E67E22] font-semibold">
                {solution.title}
              </h3>
              <p className="mt-4 text-lg">{solution.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-[#ECEFF1] px-8" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E67E22]">
            Our Products
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            Luxurious skincare essentials for your daily routine.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            { img: soap, name: "Sanitizer" },
            { img: lotion, name: "Lotion" },
            { img: showerGel, name: "Shower Gel" },
          ].map((product) => (
            <div
              key={product.name}
              className="bg-[#FFFFFF] shadow-lg border border-[#E67E22] rounded-xl hover:scale-105 transition-all"
            >
              <img
                src={product.img}
                alt={product.name}
                className="rounded-t-lg w-full h-56 sm:h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl text-[#E67E22] font-semibold">
                  {product.name}
                </h3>
                <p className="mt-4 text-lg">
                  Nourish your skin with {product.name}, made for all skin types.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-[#FFFFFF] px-8" id="aboutus">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3E50]">
            About Us
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            Glow Cosmetics is committed to delivering skincare excellence.
          </p>
        </div>
        <div className="flex justify-center gap-12">
          {[
            {
              title: "Our Vision",
              content:
                "To be a global leader in natural skincare innovation.",
            },
            {
              title: "Our Mission",
              content:
                "Creating products that celebrate the beauty of natural ingredients and sustainable living.",
            },
          ].map((info, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-lg border border-[#E67E22] rounded-xl p-8 w-80"
            >
              <h3 className="text-2xl text-[#E67E22] font-semibold">
                {info.title}
              </h3>
              <p className="mt-4 text-lg">{info.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F1F2F6] px-8" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FFA502]">
            Contact Us
          </h2>
          <p className="py-4 text-lg sm:text-xl text-[#2C3E50]">
            Let’s talk about your skincare needs.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              {/* Form Inputs */}
              <button
                type="button"
                onClick={() => {
                  const message = "Hello, I would like more information.";
                  const phoneNumber = "+233540484052";
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
                className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold w-full"
              >
                Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#34495E] text-white py-8">
        <div className="text-center">
          <p>&copy; 2024 Glow Cosmetics</p>
          <div className="flex justify-center space-x-8 pt-4">
            <a href="#" className="text-white hover:text-[#FFC312]">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#FFC312]">
              <FaTwitter size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#FFC312]">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
