import { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditVenue(props) {
  const { venues, setVenues, hideEditForm, setHideEditForm } = props;

  const { id } = useParams();
  console.log("ID use params", id);

  //User input
  const [building, setBuilding] = useState([]);
  const [city, setCity] = useState([]);
  const [street, setStreet] = useState([]);
  const [postCode, setPostCode] = useState([]);

  //Form Handlers
  const handleBuilding = (e) => setBuilding(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleStreet = (e) => setStreet(e.target.value);
  const handlePost = (e) => setPostCode(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedVenue = {
      buildingName: building,
      city: city,
      street: street,
      postCode: postCode,
    };

    const fetchOptions = {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedVenue),
    };

    fetch(`http://localhost:3030/venues/${id}`, fetchOptions)
      .then((res) => res.json())
      .then((updatedVenue) => {
        console.log(updatedVenue);

        const updatedVenues = venues.map((venue) => {
          if (venue.id === updatedVenue.id) {
            return {
              ...updatedVenue
            }
          } else {
            return venue
          }
        })
        console.log("updated venues", updatedVenues)
        setVenues(updatedVenues)
      });
  }

  //   const updatedFilms = films.map((film) => {
  //     if (film.id === updatedTicket.filmId) {
  //       const updatedTickets = film.tickets.map((ticket) => {
  //         if (ticket.id === updatedTicket.id) {
  //           return {
  //             ...updatedTicket
  //           };
  //         } else {
  //           return ticket;
  //         }
  //       });
  //       console.log(updatedTickets);
  //       return {
  //         ...film,
  //         tickets: updatedTickets
  //       };
  //     } else {
  //       return film;
  //     }
  //   });
  //   setFilms(updatedFilms);
  // });
  //FETCH API Venues
  useEffect(() => {
    const url = `http://localhost:3030/venues`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        console.log("DATA", Data);
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
          <label htmlFor="text">Building name:</label>
          <input
            id="building"
            name="building"
            type="text"
            onChange={handleBuilding}
            value={building}
          />{" "}
        </div>{" "}
        <div>
          <label htmlFor="date">City:</label>{" "}
          <input
            type="text"
            name="date"
            id="date"
            onChange={handleCity}
            value={city}
          />
        </div>
        <div>
          <label htmlFor="text">Street:</label>
          <input
            id="street"
            name="street"
            type="text"
            onChange={handleStreet}
            value={street}
          />
        </div>
        <div>
          <label htmlFor="text">PostCode:</label>
          <input
            id="post"
            name="post"
            type="text"
            onChange={handlePost}
            value={postCode}
          />
        </div>
        <div>
          <button type="submit" name="button-send" id="button-send">
            Send
          </button>
        </div>{" "}
        <div>
          {" "}
          <button
            type="button-cancel"
            id="cancel"
            onClick={() => {
              setHideEditForm(!hideEditForm);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
