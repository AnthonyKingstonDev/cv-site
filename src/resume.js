import React from "react";

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Anthony Kingston</h1>
      <p className="mb-2">Email: <a href="mailto:britdig2@gmail.com" className="text-blue-600 underline">britdig2@gmail.com</a></p>
      <p className="mb-2">Phone: 0431 489 712</p>
      <p className="mb-4">GitHub: <a href="https://github.com/AnthonyKingstonDev?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AnthonyKingstonDev</a></p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Right to Work</h2>
      <ul className="list-disc ml-6">
        <li>New Zealand citizen</li>
        <li>Right to work in Australia</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
      <p>Bachelor of Science, Major in Computer Science - University of Waikato</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Driving License</h2>
      <p>Full Queensland Driving License</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Technical Skills</h2>
      <ul className="list-disc ml-6">
        <li>Programming: Java, C#, Python</li>
        <li>Cloud Platforms: Microsoft Azure</li>
        <li>Tools: MS Windows, Word, Access, Excel (with VBA), Outlook</li>
        <li>Database & Scripting: SQL, VBA</li>
        <li>Troubleshooting: Software and hardware issue resolution</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Skills and Attributes</h2>
      <ul className="list-disc ml-6">
        <li>Strong communication skills</li>
        <li>Excellent organizational skills</li>
        <li>Proven conflict resolution abilities</li>
        <li>Attention to detail</li>
        <li>Ability to maintain confidentiality</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Professional Experience</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Level 2 Technical Support</h3>
        <p>Glencore – Mount Isa, Queensland | Nov 2024 – Present</p>
        <ul className="list-disc ml-6">
          <li>Managed Microsoft Azure infrastructure</li>
          <li>Maintained internal APIs</li>
          <li>Used ServiceNow for IT ticket management</li>
          <li>Oversaw DHCP server configurations</li>
          <li>Administered Active Directory and two-factor authentication</li>
          <li>Collaborated on IT security compliance (CISO/ICE)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Administration Officer - Technical Services</h3>
        <p>Mount Isa City Council | Apr 2024 – Nov 2024</p>
        <ul className="list-disc ml-6">
          <li>Customer service and council inquiries</li>
          <li>GIS mapping and smart meter analysis</li>
          <li>VBA automation in Excel</li>
          <li>Procurement and project support</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p>Enlightened Designs – Hamilton, NZ | Jul 2023 – Nov 2023</p>
        <ul className="list-disc ml-6">
          <li>BPMN system updates and UI development with React/TypeScript</li>
          <li>Backend improvements in C#</li>
          <li>Client communication and project delivery</li>
        </ul>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-2">References</h2>
      <p>Available upon request</p>
    </div>
  );
}
