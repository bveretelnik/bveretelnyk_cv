import React from 'react';
import SectionHeader from './SectionHeader';
import BaseLink from '@components/BaseLink';
import { contacts } from '../mock';
import { setFirstLetterUppercase } from '../helpers/setFirstLetterUppercase';
import CustomSpanBold from '@components/CustomSpanBold';

const Contacts = () => (
  <section>
    <SectionHeader text="Contacts" />
    {Object.keys(contacts).map(contact => (
      <p>
        <CustomSpanBold value={setFirstLetterUppercase(contact)} />:{' '}
        {contacts[contact]}
      </p>
    ))}
    {/*<p>Email: bveretelnik@gmail.com</p>*/}
    {/*<p>Phone: +49 160 95847273</p>*/}
    {/*<p>*/}
    {/*  LinkedIn:{' '}*/}
    {/*  <BaseLink*/}
    {/*    text="linkedin.com/in/bveretelnyk"*/}
    {/*    url="https://www.linkedin.com/in/bveretelnyk/"*/}
    {/*  />*/}
    {/*</p>*/}
  </section>
);

export default Contacts;
