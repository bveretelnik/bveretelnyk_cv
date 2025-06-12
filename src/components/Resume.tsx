import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import DownloadCv from './DownloadCv';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Languages from './Languages';
import Education from './Education';
import Contacts from './Contacts';
import ContentContainer from './ContentContainer';
import Header from './Header';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-900 dark:text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        {/*<ThemeToggle />*/}
        <DownloadCv />
        <ContentContainer>
          <Header />
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Languages />
          <Contacts />
        </ContentContainer>
      </div>
    </div>
  );
};

export default Resume;
