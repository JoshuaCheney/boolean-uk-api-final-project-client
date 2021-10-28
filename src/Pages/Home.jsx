import { useEffect, useState } from "react";
import CreateEvent from "./Components/CreateEvent";

function Home(props) {
  const { setEventId } = props;

  //Saving events data
  const [events, setEvents] = useState([]);

  //Hide form
  const [hideCreateForm, setHideCreateForm] = useState(true);

  //FETCH API
  useEffect(() => {
    const url = `http://localhost:3030/events`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setEvents(Data.data);
      });
  }, []);

  return (
    <>
      <header>
        <nav>
          <p>Logo</p>
          <p>
            <a href="http://localhost:3030/customers">Create Customer</a>
          </p>
        </nav>
      </header>
      <main>
        <ul>
          <h1>Check the new events:</h1>
          {events.map((event, index) => {
            return (
              <li key={index}>
                <a href="https://www.google.com/" target="_parent">
                  <div onClick={() => setEventId(event.id)}>
                    <h2>{event.name}</h2>
                    <p>{event.date}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={() => setHideCreateForm(!hideCreateForm)}>
            Create Event
          </button>
        </div>
        {!hideCreateForm && (
          <CreateEvent
            setHideCreateForm={setHideCreateForm}
            hideCreateForm={hideCreateForm}
          />
        )}
      </main>
    </>
  );
}

export default Home;
