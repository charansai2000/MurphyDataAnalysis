import React from 'react';
import reportLinks from '../../src/Data/reportLinks';

const PowerBIReport = () => {
  return (
    <div className="reports-container"> 
      {reportLinks.map((link, index) => (
        <iframe 
          key={index}
          title={`Power BI Report ${index + 1}`}
          src={link}
          width="100%" 
          height="800"  
          allowFullScreen 
        />
      ))}
    </div>
  );
};

export default PowerBIReport;