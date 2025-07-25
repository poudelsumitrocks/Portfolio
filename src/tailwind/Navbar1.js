import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
// Ensure you have a CSS file for additional styles
const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); 

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
     { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-red-300">Sumit</span>
          <span className="text-red-300">Poudel</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-green-300 ${
                activeSection === item.id ? "text-green-400" : ""
              }`}
            >
              <button onClick={() => handleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.facebook.com/sumit.poudel.794"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/sumitpoudel9876/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50
          backdrop-blur-lg backdrop-filter z-50 rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-4 py-4 text-gray-300 font-semibold items-center">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-green-300 ${
                  activeSection === item.id ? "text-green-400" : ""
                }`}
              >
                <button onClick={() => handleMenuClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 justify-center pb-4">
            <a
              href="https://www.facebook.com/sumit.poudel.794"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/sumitpoudel9876/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
