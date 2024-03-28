import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import Madagascar from "./City/Madagascar";
import Cities from "./City/Cities";

const Regionmap = () => {
  const citydetails = useSelector((state) => state.citydetailsReducer);
  const [currentdetails, setCurrentdetails] = useState("");
  useEffect(() => {
    setCurrentdetails(
      !isEmpty(citydetails) && (
      <div className={`tourcontainer`}
        style={{ top: citydetails.position }}
        onMouseLeave={() => {
          setCurrentdetails("");
        }} >
        <div className="thumnimg">
          <div>
            <img
              className="imgthumb"
              src={`https://tours.viajes-madagascar.mg/uploads/${citydetails.image}`}
            />
          </div>
          <h4>{citydetails.title}</h4>
        </div>
        <div className="tourinfos">
          <p>{citydetails.description}</p>
        </div>
      </div>)
    );
  }, [citydetails]);

  return (
    <div className="svgmap">
      {currentdetails}

      <svg
        version="1.1"
        id="svg2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="409.814px"
        height="auto"
        viewBox="1 0.001 409.814 638.608"
        enableBackground="new 1 0.001 409.814 638.608"
        xml="preserve"
      >
        <Madagascar />
        <g className="mappin">
          {/* <Itinerary /> */}
          <Cities />
        </g>
      </svg>
    </div>
  );
};
export default Regionmap;