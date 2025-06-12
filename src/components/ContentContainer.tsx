import React, { FC, ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
};

const ContentContainer: FC<ContentContainerProps> = ({ children }) => (
  <div className="bg-gray-800 p-6 rounded shadow-md">{children}</div>
);

export default ContentContainer;
