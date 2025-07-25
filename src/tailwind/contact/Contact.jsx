import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const [result, setResult] = useState("");
    const sendEmail =async (e) => {
        e.preventDefacult();
        setResult("Sending...");
        const formData= new FormData(e.target);
        formData.append("access_key","310a9dd7-5c30-4e42-9e0c-7b57b6ce8a0d");
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message send Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Something went wrong, Please try again ");
    }
    } 
  return (
    <div>
      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      >
        <ToastContainer  position="top-center" autoClose={3000}/>
        <div className="text-center mb-6">
          <h2 className="text-4x1 font-bold text-white">Contact</h2>
          <p className="text-gray-400 mt-4 text-lg font semibold">
            I'd love to hear from you reachout for any opportunities for
            question!
          </p>
        </div>
        <div className="mt-8 w-full max-w-md bg-black p-6 rounded-lg shadow-large border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center">
            Contact with me
          </h3>
          <form
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          > 
          <input type="email" name="user_id" placeholder="Your Email" required className="w-full p-3 rounded-md text-black border border-gray-600" />
          <input type="text" name="user_name" placeholder="Full Name" required className="w-full p-3 rounded-md text-black border border-gray-600" />
          <input type="text" name="message_subject" placeholder="Subject" required className="w-full p-3 rounded-md text-black border-gray-600" />

          <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 rounded-md text-black border border-gray-600"></textarea>

          <button type='Submit' className="w-full bg-blue-400 py-3 text-white font-bold rounded-md hover:opacity-60 transition crusor-pointer" >Send</button>
          </form>
          {result && (<p className="mt-4 text-center text-green-400 font-medium">{result}</p>)}
        </div>
      </section>
    </div>
  );
};

export default Contact;
