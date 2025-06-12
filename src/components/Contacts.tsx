import React from 'react';

const Contacts = () => (
  <section>
    <h2 className="text-xl font-semibold">Contacts</h2>
    <p>Email: bveretelnik@gmail.com</p>
    <p>Phone: +49 160 95847273</p>
    <p>
      LinkedIn:{' '}
      <a
        className="text-blue-400 underline"
        href="https://www.linkedin.com/in/bveretelnyk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        bveretelnyk
      </a>
    </p>
  </section>
);

export default Contacts;
