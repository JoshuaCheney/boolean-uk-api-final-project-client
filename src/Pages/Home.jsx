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
          <h2>Events:</h2>
          {events.map((event, index) => {
            return (
              <li key={index}>
                <a href="/customers" target="_parent">
                  <div onClick={() => setEventId(event.id)}>
                    <p>{event.name}</p>
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
            setEvents={setEvents}
            events={events}
          />
        )}
      </main>
    </>
  );
}

export default Home;
