import React from 'react';
import { skills } from '../mock';
import SectionHeader from '@components/SectionHeader';
import { setFirstLetterUppercase } from '../helpers/setFirstLetterUppercase';
import CustomSpanBold from '@components/CustomSpanBold';

const Skills = () => (
  <section className="mb-6">
    <SectionHeader text="Skills" />
    <ul className="list-inside">
      {Object.keys(skills).map(item => (
        <li>
          <CustomSpanBold value={setFirstLetterUppercase(item)} />{' '}
          {skills[item]?.join(', ')}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
