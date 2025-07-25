import React from 'react'
import html from '../../assets/tech_logo/html.png'
import c from '../../assets/tech_logo/c.png'
import css from '../../assets/tech_logo/css.png'
import javascript from '../../assets/tech_logo/javascript.png'
import cpp from '../../assets/tech_logo/cpp.png'
import reactjs from '../../assets/tech_logo/reactjs.png'
import tailwindcss from '../../assets/tech_logo/tailwindcss.png'
import { BiCategory } from 'react-icons/bi'

const skillsData = [{
  skills: [
    { name: "html", logo: html },
    { name: "css", logo: css },
    { name: "javascript", logo: javascript },
    { name: "c", logo: c },
    { name: "cpp", logo: cpp },
    { name: "reactjs", logo: reactjs },
    { name: "tailwindcss", logo: tailwindcss }
  ]
}]

const Skills = () => {
  return (
    <div>
      <section id='skills' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw]'>
        <div className="text-center mb-4">
          <div className="text-3xl sm:text-4xl font-bold text-white">Skills</div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            Hello , My name is Sumit Poudel. I am a frontend developer with 2 year experience in building scaleable web application.Skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Passionate about creating user-friendly interfaces and enhancing user experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between ">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-gray-900 backdrop-blur-md px-6 py-8 sm:py-6 mb-10 w-full rounded-2xl border border-white">
              <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-10 text-center underline underline-offset-8'>Tech
                <span className='text-yellow-300'>Stack</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-x-10 w-full">
                {category.skills.map((skill) => (
                  <div key={skill.name} className='flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-3xl py-2 px-2 text-center'>
                    <img src={skill.logo} alt={skill.name} className='w-6 h-6 sm:h-8 sm:w-8' />
                    <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
