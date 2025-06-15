import React, { FC } from 'react';
import { title } from '../mock';

const Header: FC = () => (
  <section className="mb-6">
    <div>
      <h1 className="text-3xl font-bold mb-2">{title.name}</h1>
      <p className="text-lg mb-4">{title.position}</p>
    </div>
    {/*<img src={} />*/}
  </section>
);

export default Header;
