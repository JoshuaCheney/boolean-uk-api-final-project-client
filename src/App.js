import logo from './logo.svg';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import "./index.css";
import Customers from './Pages/Customers';


function App() {
  //Data
  const [events, setEvents] = useState([]);

  //FETCH API
  useEffect(() => {
    const url = `http://localhost:3030/events`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setEvents(Data);
      });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home events={events} />
      </Route>
      <Route exact path="/customers">
        <Customers />
      </Route>
    </Switch>
  );
}

export default App;
