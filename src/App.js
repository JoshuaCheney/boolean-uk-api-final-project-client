import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import "./index.css";


function App() {
  //Event ID
  const [eventId, setEventId]= useState(null);
  console.log("ID", eventId);

  return (
    <Switch>
      <Route exact path="/">
        <Home setEventId={setEventId} />
      </Route>
    </Switch>
  );
}

export default App;
