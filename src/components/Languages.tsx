import React, { FC } from 'react';
import SectionHeader from '@components/SectionHeader';
import { languages } from '../mock';
import { setFirstLetterUppercase } from '../helpers/setFirstLetterUppercase';
import CustomSpanBold from '@components/CustomSpanBold';

const Languages: FC = () => (
  <section className="mb-6">
    <SectionHeader text="Languages" />
    <ul className="list-inside list-none">
      {Object.keys(languages).map(language => (
        <li>
          <CustomSpanBold value={setFirstLetterUppercase(language)} />{' '}
          {languages[language]}
        </li>
      ))}
    </ul>
  </section>
);

export default Languages;
