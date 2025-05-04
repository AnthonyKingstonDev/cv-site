import React from "react";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-100 via-white to-green-100 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg">Anthony Kingston</h1>
        <p className="text-lg mt-2 text-gray-700">Software Engineer & Technical Support</p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-800">Contact</h2>
        <ul className="list-none mt-2 text-gray-800">
          <li>Email: <a href="mailto:britdig2@gmail.com" className="text-blue-600 hover:underline">britdig2@gmail.com</a></li>
          <li>Phone: 0431 489 712</li>
          <li>GitHub: <a href="https://github.com/AnthonyKingstonDev?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AnthonyKingstonDev</a></li>
        </ul>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-green-800">Right to Work</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>New Zealand citizen</li>
            <li>Right to work in Australia</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-green-800">Education</h2>
          <p>Bachelor of Science, Major in Computer Science - University of Waikato</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-green-800">Driving License</h2>
          <p>Full Queensland Driving License</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-green-800">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Java, C#, Python</li>
            <li>Microsoft Azure, Active Directory</li>
            <li>Excel VBA, SQL, API Management</li>
          </ul>
        </div>
      </section>

      <div className="bg-white rounded-2xl shadow-xl p-6 mt-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-600">Level 2 Technical Support</h3>
          <p className="text-sm text-gray-600">Glencore – Mount Isa, QLD | Nov 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Managed Azure infrastructure & APIs</li>
            <li>ServiceNow ticketing & DHCP server support</li>
            <li>Active Directory & 2FA integration</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-600">Administration Officer</h3>
          <p className="text-sm text-gray-600">Mount Isa City Council | Apr 2024 – Nov 2024</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Smart meter data analysis & GIS mapping</li>
            <li>Excel automation using VBA</li>
            <li>Purchase orders and technical project support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-600">Software Engineer</h3>
          <p className="text-sm text-gray-600">Enlightened Designs – Hamilton, NZ | Jul 2023 – Nov 2023</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>React & TypeScript UI development</li>
            <li>C# backend enhancements</li>
            <li>Client delivery & BPMN workflow updates</li>
          </ul>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Anthony Kingston. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
