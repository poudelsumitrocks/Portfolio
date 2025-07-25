// import React from 'react'
// import Navbar from './Projects/Navbar'
// import TextForm from './Projects/TextForm'
// import About from './Projects/About'
// import { useState } from 'react'

// const App = () => {
//   const [mode,setMode]=useState("light");
  
//   const toggleMode=()=>{
//     if(mode==="light"){
//       setMode("dark");
//       document.body.style.backgroundColor="#042743";
//     }else{
//       setMode("light");
//       document.body.style.backgroundColor="white"      
//     }
//   }
//   return (
//     <div>
//       <>
//     {/* <Navbar title="TitleUtilas" about="About Us " /> */}
//     <Navbar title="TextUtis" mode={mode} toggleMode={toggleMode} />
//      <div class="container my-3">
//         <TextForm heading="Enter the text to analyse below "  mode={mode}/>
//      </div>
     
//      {/* <About/> */}
//      </>
//      </div>
//   )
// }
// export default App



import React from 'react'
import Navbar1 from './tailwind/Navbar1'
import About from './tailwind/About';
import Skills from './tailwind/skills/Skills';
import Projects from './tailwind/projects/Projects';
import Contact from './tailwind/contact/Contact';
import Footer from './tailwind/contact/footer/Footer';
const App = () => {
  return (
    <div>
      <div className='div bg-[#050414] text-white'>
        <div className="div relative pt-20">
          <Navbar1 />
          <About />
          <Skills />
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}
export default App
