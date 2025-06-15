import React, { FC } from 'react';
import { skills } from '../mock';
import SectionHeader from '@components/SectionHeader';
import { setFirstLetterUppercase } from '../helpers/setFirstLetterUppercase';
import CustomSpanBold from '@components/CustomSpanBold';

const Skills: FC = () => (
  <section className="mb-6">
    <SectionHeader text="Skills" />
    <ul className="list-inside">
      {Object.keys(skills).map(skill => (
        <li>
          <CustomSpanBold value={setFirstLetterUppercase(skill)} />{' '}
          {skills[skill]?.join(', ')}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
