import React, { FC } from 'react';

type SectionHeaderProps = {
  text: 'string';
};

const SectionHeader: FC<SectionHeaderProps> = ({ text }) => (
  <h2 className="text-2xl font-semibold mb-4">{text}</h2>
);

export default SectionHeader;
