import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";

const Enterobjects = () => {
  const activities = useSelector((state) => state.activityReducer);
  const cities = useSelector((state) => state.cityReducer);
  const itineraries = useSelector((state) => state.itineraryReducer);

  return (
    <div>
      <div className="entreeobj">
        <div className="form01">
          <h2>Entrée ville</h2>
          <form
            action="https://tours.viajes-madagascar.mg/addcity"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="city title"
            />
            <p>Region</p>
            <select name="region" id="region" style={{ width: "100%" }}>
              <option value="null">Entrer une région</option>
              <option value="Norte">Norte</option>
              <option value="Sur">Sur</option>
              <option value="Este">Este</option>
              <option value="Oeste">Oeste</option>
              <option value="Centro">Centro</option>
            </select>
            <br />
            <br />

            <textarea
              type="text"
              name="description"
              className="description"
              placeholder="city description"
            ></textarea>
            <br />
            <input type="file" name="image" id="image" />
            <br />
            <input type="submit" value="Enregistrer" />
            <br />
            <br />
          </form>
          <h2>Entrée photos</h2>
          <form
            action="https://tours.viajes-madagascar.mg/addpic"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="city title"
            />
            <br />
            <p>Region</p>
            <select name="region" id="region" style={{ width: "100%" }}>
              <option value="null">Entrer une région</option>
              <option value="Norte">Norte</option>
              <option value="Sur">Sur</option>
              <option value="Este">Este</option>
              <option value="Oeste">Oeste</option>
              <option value="Centro">Centro</option>
            </select>
            <br />
            <br />
            <p>Image</p>
            <input type="file" name="image" id="image" />
            <br />
            <input type="text" name="tag" id="tag" placeholder="city tag" />
            <br />
            <input type="submit" value="Enregistrer" />
            <br />
            <br />
          </form>
        </div>
        <div className="form02">
          <h2>Entrée activité</h2>
          <form
            action="https://tours.viajes-madagascar.mg/addactivity"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="activity title"
            />
            <p>Region</p>
            <select name="region" id="region" style={{ width: "100%" }}>
              <option value="null">Entrer une région</option>
              <option value="Norte">Norte</option>
              <option value="Sur">Sur</option>
              <option value="Este">Este</option>
              <option value="Oeste">Oeste</option>
              <option value="Centro">Centro</option>
            </select>
            <br />
            <br />

            <textarea
              type="text"
              name="description"
              className="description"
              placeholder="activity description"
            ></textarea>
            <br />
            <input type="file" name="image" id="image" />
            <br />
            <input type="submit" value="Enregistrer" />
            <br />
            <br />
          </form>
        </div>
        <div className="form03">
          <h2>Entrée itinéraire</h2>
          <form
            action="https://tours.viajes-madagascar.mg/additinerary"
            method="post"
          >
            <input
              type="text"
              name="daytitle"
              id="daytitle"
              placeholder="Départ & Destination"
            />
            <br />
            <textarea
              name="daydesc"
              id="daydesc"
              cols="30"
              rows="10"
              placeholder="Description de la journée"
              style={{ display: "block" }}
            ></textarea>
            <label htmlFor="km">Kilomètres à parcourir</label>
            <input type="number" name="km" id="km" />
            <br />
            <label htmlFor="carrent">Voiture </label>
            <input type="checkbox" name="carrent" id="carrent" />
            <label htmlFor="boat">Bateau </label>
            <input type="checkbox" name="boat" id="boat" />
            <label htmlFor="plane">Avion </label>
            <input type="checkbox" name="plane" id="plane" />
            <br />
            <label htmlFor="nbnuitee">Nombre de nuitées</label>
            <input type="number" name="nbnuitee" id="nbnuitee" />
            <br />
            <input
              type="text"
              name="hotel"
              id="hotel"
              className="hotel"
              placeholder="nom de l'hotel"
            />{" "}
            <br />
            <select name="city" id="city">
              <option value="0">Null</option>
              {!isEmpty(cities) &&
                cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.title}
                  </option>
                ))}
            </select>
            <br />
            <select name="activity01" id="activity01">
              <option value="0">Null</option>
              {!isEmpty(activities) &&
                activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.title}
                  </option>
                ))}
            </select>{" "}
            <br />
            <select name="activity02" id="activity02">
              <option value="0">Null</option>
              {!isEmpty(activities) &&
                activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.title}
                  </option>
                ))}
            </select>{" "}
            <br />
            <select name="activity03" id="activity03">
              <option value="0">Null</option>
              {!isEmpty(activities) &&
                activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.title}
                  </option>
                ))}
            </select>{" "}
            <br />
            <select name="activity04" id="activity04">
              <option value="0">Null</option>
              {!isEmpty(activities) &&
                activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.title}
                  </option>
                ))}
            </select>
            <br />
            <input type="submit" value="Enregistrer" />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enterobjects;
