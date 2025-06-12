import React from 'react';

const Experience = props => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold">Experience</h2>

    <div className="mt-2">
      <h3 className="text-lg font-bold">Frontend Developer – Hivex</h3>
      <p className="text-sm italic">Jun 2022 – Present | Germany</p>
      <ul className="list-disc list-inside mt-1">
        <li>Developed core UI features for a sportsbook platform (Next.js).</li>
        <li>
          Built reusable components like sidebar, navbar, tabs, bet builder.
        </li>
        <li>Improved scalability and introduced architecture enhancements.</li>
      </ul>
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-bold">Frontend Developer – Bananza.agency</h3>
      <p className="text-sm italic">Sep 2020 – Jun 2022 | Ukraine</p>
      <ul className="list-disc list-inside mt-1">
        <li>
          Developed investment section of a banking platform with 300+ devs.
        </li>
        <li>Replaced legacy logic, improving feature delivery speed.</li>
        <li>Advocated clean code and onboarding best practices.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
