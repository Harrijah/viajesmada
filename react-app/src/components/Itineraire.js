import React, { useState } from "react";

const Itineraire = ({ mytour }) => {
  const [activeindex, setActiveindex] = useState(1);
  // const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setActiveindex(activeindex === index ? null : index);
    // setOpenIndex(openIndex === index ? null : index);
  };

  // console.log(activeindex);
  return (
    <div className="touritinerary">
      <div className="accordion">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          const titleKey = `jour${i}title`;
          const descKey = `jour${i}desc`;

          if (mytour[titleKey] && mytour[titleKey]) {
            return (
              <div className="item" key={i}>
                <div className={`title ${activeindex === i ? 'underline' : ''}`} onClick={() => handleClick(i)}>
                  <h3>
                    Día {i} : {mytour[titleKey]}
                  </h3>
                </div>
                <div className={activeindex === i ? "content open" : "content"}>
                  <p>{mytour[descKey]}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Itineraire;
