import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

const Layout = ({ children }) => {
  const [header, setHeader] = useState('');
  const [footer, setFooter] = useState('');

  const asyncGetHeader = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/header', {});
    setHeader(res.data.header);
  };

  const asyncGetFooter = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/footer', {});
    setFooter(res.data.footer);
  };

  useEffect(() => {
    asyncGetHeader();
    asyncGetFooter();
  }, []);

  return (
    <>
      {
        header
          ? parse(header)
          : null
      }
      <div className="main-content">
        {children}
      </div>
      {
        footer
          ? parse(footer)
          : null
      }
    </>
  );
};

export default Layout;
