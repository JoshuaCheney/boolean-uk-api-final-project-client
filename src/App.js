import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import "./index.css";
import Customers from './Pages/Customers';
import Venues from "./Pages/Venues";



function App() {
  //Saving Venues Data
  const [venues, setVenues] = useState([{}]);

     //Get All Venues
  useEffect(() => {
    const url = `http://localhost:3030/venues`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setVenues(Data.data);
      });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/customers">
        <Customers />
      </Route>
      <Route path="/venues/:id" exact>
        <Venues venues={venues} setVenues={setVenues}/>
      </Route>
    </Switch>
  );
}

export default App;
