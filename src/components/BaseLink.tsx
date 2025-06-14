import React, { FC } from 'react';

type BaseLinkProps = {
  text: string;
  url: string;
};

const BaseLink: FC<BaseLinkProps> = ({ text, url }) => (
  <a
    className="text-blue-400 underline"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

export default BaseLink;
