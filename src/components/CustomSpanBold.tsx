import React, { FC } from 'react';

type CustomSpanBoldProps = {
  value: string;
};
const CustomSpanBold: FC<CustomSpanBoldProps> = ({ value }) => (
  <span className="font-bold">{value}:</span>
);

export default CustomSpanBold;
