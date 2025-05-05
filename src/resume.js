import React from "react";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-100 via-white to-green-100 min-h-screen font-sans transition-all duration-300">
      <header className="text-center mb-10 transition-all duration-300 hover:scale-[1.02]">
        <img
          src="/photo.jpg"
          alt="Anthony Kingston"
          className="mx-auto w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg mt-4 transition-colors duration-300 hover:text-blue-900">
          Anthony Kingston
        </h1>
        <p className="text-lg mt-2 text-gray-700">Software Engineer & Technical Support</p>
        <p className="text-sm text-gray-500 mt-1">
          Passionate about solving problems and building beautiful software.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <h2 className="text-2xl font-bold text-blue-800">Contact</h2>
        <ul className="mt-2 text-gray-800 space-y-1">
          <li>
            Email:{" "}
            <a
              href="mailto:britdig2@gmail.com"
              className="text-blue-600 hover:underline transition-colors duration-300"
            >
              britdig2@gmail.com
            </a>
          </li>
          <li>Phone: 0431 489 712</li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/AnthonyKingstonDev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-300"
            >
              AnthonyKingstonDev
            </a>
          </li>
        </ul>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Right to Work",
            content: (
              <ul className="list-disc list-inside text-gray-700">
                <li>New Zealand citizen</li>
                <li>Right to work in Australia</li>
              </ul>
            ),
          },
          {
            title: "Education",
            content: <p>Bachelor of Science, Major in Computer Science - University of Waikato</p>,
          },
          {
            title: "Driving License",
            content: <p>Full Queensland Driving License</p>,
          },
          {
            title: "Technical Skills",
            content: (
              <ul className="list-disc list-inside text-gray-700">
                <li>Java, C#, .NET development</li>
                <li>React & frontend UI frameworks</li>
                <li>Microsoft Azure, Active Directory</li>
                <li>Excel VBA, SQL, API Management</li>
              </ul>
            ),
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-4 transform transition-transform duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-blue-200"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">{section.title}</h2>
            {section.content}
          </div>
        ))}
      </section>

      <div className="bg-white rounded-2xl shadow-xl p-6 mt-10 transition-all duration-300 hover:ring-2 hover:ring-purple-300 hover:scale-[1.01]">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Experience</h2>

        {[
          {
            role: "Level 2 Technical Support",
            company: "Glencore – Mount Isa, QLD",
            dates: "Nov 2024 – Present",
            tasks: [
              "Managed Azure infrastructure & APIs",
              "ServiceNow ticketing & DHCP server support",
              "Active Directory & 2FA integration",
            ],
          },
          {
            role: "Administration Officer",
            company: "Mount Isa City Council",
            dates: "Apr 2024 – Nov 2024",
            tasks: [
              "Smart meter data analysis & GIS mapping",
              "Excel automation using VBA",
              "Purchase orders and technical project support",
            ],
          },
          {
            role: "Software Engineer",
            company: "Enlightened Designs – Hamilton, NZ",
            dates: "Jul 2023 – Nov 2023",
            tasks: [
              "React & TypeScript UI development",
              "C# backend enhancements",
              "Client delivery & BPMN workflow updates",
            ],
          },
        ].map((job, idx) => (
          <div key={idx} className="mb-6 transition-all duration-300 hover:opacity-90">
            <h3 className="text-xl font-semibold text-purple-600">{job.role}</h3>
            <p className="text-sm text-gray-600">
              {job.company} | {job.dates}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mt-10 transition-all duration-300 hover:ring-2 hover:ring-yellow-300 hover:scale-[1.01]">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Projects</h2>

        <div className="mb-6 transition-all duration-300 hover:opacity-95">
          <h3 className="text-xl font-semibold text-yellow-600">Meme Generation App</h3>
          <p className="text-sm text-gray-600">React & Java | 2025</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Created a dynamic meme generator using React frontend and Java backend</li>
            <li>Users can choose templates and add custom text to generate memes</li>
            <li>Deployed on Vercel with responsive design and real-time editing</li>
          </ul>
          <a
            href="https://meme-app-gray.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-yellow-600 hover:underline transition-colors duration-300"
          >
            View Live App →
          </a>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10 opacity-80 transition-opacity duration-300 hover:opacity-100">
        © 2025 Anthony Kingston. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
