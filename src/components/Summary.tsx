import React, { FC } from 'react';
import SectionHeader from '@components/SectionHeader';
import { summary } from '../mock';

const Summary: FC = () => (
  <section className="mb-6">
    <SectionHeader text="Summary" />
    <p>{summary}</p>
  </section>
);

export default Summary;
