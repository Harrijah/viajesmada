import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Itineraire = ({ mytour }) => {
  const itineraries = useSelector((state) => state.itineraryReducer);
  const [activeindex, setActiveindex] = useState(1);
  // const cities = useSelector((state) => state.cityReducer);
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
          const dbdaykey = `jour${i}`;
          const itineraryid = mytour[dbdaykey];
          const myitinerary =
            !isEmpty(itineraries) &&
            itineraries.find((itinerary) => itinerary.id === itineraryid);
          // const mycity = !isEmpty(cities) && myitinerary && cities.find((city) => city.id == myitinerary.city);

          if (mytour[dbdaykey] && mytour[dbdaykey] !== "0") {
            return (
              <div className="item" key={i}>
                <div
                  className={`title ${activeindex === i ? "underline" : ""}`}
                  onClick={() => handleClick(i)}
                >
                  <h3>
                    Día {i} : {(myitinerary && myitinerary.daytitle) || ""}
                    {/* {(mycity && mycity.title) || ""} */}
                  </h3>
                </div>
                <div className={activeindex === i ? "content open" : "content"}>
                  <p>
                    {(myitinerary && myitinerary.daydesc) || ""}
                  </p>
                  {/* <br /><h3>{(mycity && mycity.title) || ""}</h3>
                  <br /><p>{(mycity && mycity.description) || ""}</p> */}
                </div>
              </div>
            );
          }
          return null; // Added to handle the case where the condition is not met
        })}

        {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          // const titleKey = `jour${i}title`;
          // const descKey = `jour${i}`;

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
        })} */}
      </div>
    </div>
  );
};

export default Itineraire;
