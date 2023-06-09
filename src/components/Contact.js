import React from "react";

export default function Contact() {
    const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// Configure nodemailer to use your email service
const transporter = nodemailer.createTransport({
  service: "lucasleung2593@gmail.com",
  auth: {
    user: "lucasleung2593@gmail.com",
    pass: process.env.pass
  }
});

// Handle the form submission
app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Compose the email
  const mailOptions = {
    from: email,
    to: "lucasleung2593@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Handle the error
      res.status(500).json({ error: "An error occurred while sending the email." });
    } else {
      // Email sent successfully
      res.json({ success: "Email sent successfully." });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});


    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
      
        // Collect form data
        const formData = new FormData(this);
      
        // Send form data to the server
        fetch("/send-email", {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Handle the server response (e.g., show success message, display errors)
        })
        .catch(error => {
          // Handle any errors that occurred during the request
        });
      });
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!4v1684178553769!6m8!1m7!1sWtWlxZTlsF7I2cnd0xh1iw!2m2!1d37.76927644049399!2d-121.9789336629543!3f282.93912!4f0!5f0.7820865974627469"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                3701 Anderhan Pl. <br />
                San Ramon, CA 94583
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                lucasleung2593@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">925-588-5055</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          id="contactForm">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}