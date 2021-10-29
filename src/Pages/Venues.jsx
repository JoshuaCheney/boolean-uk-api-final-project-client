import { useEffect, useState } from "react";
import EditVenue from "./Components/EditVenue";
import { useParams } from "react-router-dom";

function Venues(props) {
    const { eventId, venues, setVenues } = props;

    const { id } = useParams();
    console.log("ID use params", id);

    //Save Event
    const [eventDetails, setEventDetails] = useState([]);

    //Hide form
    const [hideEditForm, setHideEditForm] = useState(true);

    //Get Event by Id
    useEffect(() => {
        const url = `http://localhost:3030/events/${id}`;
        //should be ${eventId} but it isn't working

        fetch(url)
            .then((res) => res.json())
            .then((Data) => {
                setEventDetails(Data.data);
            });
    }, []);

    return (
        <>
            <header>
                <nav>
                    <p>Logo</p>
                    <p>
                        <a href="/customers">Create Customer</a>
                    </p>
                </nav>
            </header>
            <main>
                <div>
                    <h3>Event Details</h3>
                    <p>{eventDetails.name}</p>
                    <p>{eventDetails.date}</p>
                    <p>{venues[0].buildingName}</p>
                    <p>{venues[0].city}</p>
                    <p>{venues[0].street}</p>
                    <p>{venues[0].postCode}</p>
                    <button onClick={() => setHideEditForm(!hideEditForm)}>
                        Update Venue
                    </button>
                </div>
                <div>
                    {!hideEditForm && (
                        <EditVenue
                            venues={venues}
                            setVenues={setVenues}
                            hideEditForm={hideEditForm}
                            setHideEditForm={setHideEditForm}
                        />
                    )}
                </div>
            </main>
        </>
    );
}

export default Venues;
