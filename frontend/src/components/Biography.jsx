import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Our hospital management system is designed to revolutionize healthcare administration by integrating comprehensive features tailored to meet the diverse needs of modern medical facilities. From efficient patient management and seamless appointment scheduling to robust billing and EMR capabilities, our system enhances operational efficiency and patient care. Built with scalability and customization in mind, it adapts effortlessly to varying hospital sizes and specialties, ensuring tailored solutions that optimize workflow and resource utilization. Compliant with stringent healthcare regulations, our system prioritizes data security and patient privacy, providing a secure environment for sensitive medical information. User-friendly interfaces and intuitive navigation empower healthcare professionals to deliver exceptional care while maintaining productivity. Backed by responsive support and comprehensive training, we empower hospitals to streamline operations, improve decision-making with actionable insights, and ultimately, enhance overall healthcare delivery
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
