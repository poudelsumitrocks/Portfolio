import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div>
      <section id="about" className="py-13 px-[7vw] lg:px-[15vw]">
        <div className="div flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="div md:w-1/2 text-center md:text-left  mt-8 md:md-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Sumit Poudel
            </h1>
            <h3 className="text-8xl sm:text-2xl md:text-3xl font-semibold mb-4 leading tight ">
              <span className="text-white">I am a </span>
              <span className="text-green-300">
                <Typewriter
                  words={[
                    "Student",
                    "Frontend Developer",
                    "UI/UX Enthusiast",
                    "Data Scientist",
                  ]}
                  loop={0}
                  crusor
                  crusorStyle=" "
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </span>
            </h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              I am a frontend developer with 2 year experience in bulding
              scaleable web application.Skilled in HTML, CSS, JavaScript,
              React.js, and Tailwind CSS. Passionate about creating
              user-friendly interfaces and enhancing user experiences.
            </p>
            <a
              href="/Personal_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold transition duration-300 transform hover:bg-blue-400 bg-green-600 px-6 py-3 text-white rounded-md"
            >
              Download CV
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end"></div>
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full rounded-4xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;





 