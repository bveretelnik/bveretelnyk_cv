import React from 'react';
import SectionHeader from './SectionHeader';

const Contacts = () => (
  <section>
    <SectionHeader text={'Contacts'} />
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
