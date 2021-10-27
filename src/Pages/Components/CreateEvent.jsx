import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

export default function CreateEvent(props) {
  const { setHideCreateForm, hideCreateForm } = props;

  //Getting venue data
  const [venues, setVenues] = useState([]);
  console.log("Venues", venues);

  //FETCH API
  useEffect(() => {
    const url = `http://localhost:3030/venues`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setVenues(Data.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Create Event</h2>
      </div>
      <div>
        <label htmlFor="text">Name</label>
        <input type="text" id="text" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />
      </div>
      <div>
        <label>Select a venue: </label>

        <select htmlFor="select" name="select" id="select">
          {venues.map((venue, index) => {
            return (
              <option value={venue.id} id={index} key={index}>
                {venue.buildingName}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button type="button" name="button-send" id="button-send">
          Send
        </button>
      </div>
      <div>
        <button
          type="button-cancel"
          id="cancel"
          onClick={() => setHideCreateForm(!hideCreateForm)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
