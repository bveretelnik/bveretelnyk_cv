import React, { FC } from 'react';
import SectionHeader from '@components/SectionHeader';
import { education } from '../mock';

const Education: FC = () => (
  <section className="mb-6">
    <SectionHeader text="Education" />
    <p>{education}</p>
  </section>
);

export default Education;
