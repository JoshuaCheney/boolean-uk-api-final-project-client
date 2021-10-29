import { useEffect, useState } from "react";

export default function CreateEvent(props) {
  const { setHideCreateForm, hideCreateForm, setEvents, events } = props;

  //User input
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venueCity, setVenueCity] = useState("");
  const [venueBuilding, setBuidingVenue] = useState("");
  const [venueStreet, setVenueStreet] = useState("");
  const [venuePost, setVenuePost] = useState("");

  //Getting venue data
  const [venues, setVenues] = useState([]);

  //Form Handlers
  const handleName = (e) => setEventName(e.target.value);
  const handleDate = (e) => setEventDate(e.target.value);
  const handleVenue = (e) => setVenueCity(e.target.value);
  const handleBuilding = (e) => setBuidingVenue(e.target.value);
  const handleStreet = (e) => setVenueStreet(e.target.value);
  const handlePost = (e) => setVenuePost(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      date: "2022-06-25T00:00:00.000Z",
      band: {
        name: "Test",
        genre: "Test",
      },
      venue: {
        buildingName: venueBuilding,
        city: venueCity,
        street: venueStreet,
        postCode: venuePost,
      },
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    };

    fetch("http://localhost:3030/events", fetchOptions)
      .then((res) => res.json())
      .then((newEvent) => {
        console.log(newEvent);
        setEvents([...events, newEvent.data]);
      });
  }

  //FETCH API Venues
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
          <label htmlFor="text">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleName}
            value={eventName}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
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
          <select
            htmlFor="select"
            name="select"
            id="select"
            onChange={handleVenue}
          >
            {venues.map((venue, index) => {
              return (
                <option id={index} key={index} value={venue.city}>
                  {venue.city}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="text">Building:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleBuilding}
            value={venueBuilding}
          />
        </div>
        <div>
          <label htmlFor="text">Street:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleStreet}
            value={venueStreet}
          />
        </div>
        <div>
          <label htmlFor="text">Postcode:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handlePost}
            value={venuePost}
          />
        </div>

        <div>
          <button type="submit" name="button-send" id="button-send">
            Send
          </button>
        </div>
        <div>
          <button
            type="button-cancel"
            id="cancel"
            onClick={() => {
              setHideCreateForm(!hideCreateForm);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
