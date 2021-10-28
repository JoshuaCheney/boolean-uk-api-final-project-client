import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

export default function CreateEvent(props) {
  const { setHideCreateForm, hideCreateForm } = props;

  //User input
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  console.log("Name,date,venue", eventName, eventDate, eventVenue);

  //Getting venue data
  const [venues, setVenues] = useState([]);

  //Form Handlers
  const handleName = (e) => setEventName(e.target.value);
  const handleDate = (e) => setEventDate(e.target.value);
  const handleVenue = (e) => setEventVenue(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const newEvent = {
      name: "name",
    };
  }

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
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Create Event</h2>
        </div>
        <div>
          <label htmlFor="text">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleName}
            value={eventName}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleDate}
            value={eventDate}
          />
        </div>
        <div>
          <label>Select a venue: </label>

          <select htmlFor="select" name="select" id="select" value={"one"}>
            {venues.map((venue, index) => {
              return (
                <option
                  value={venue.id}
                  id={index}
                  key={index}
                  onChange={handleVenue}
                  value={venue.buildingName}
                >
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
    </form>
  );
}
