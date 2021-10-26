import { useEffect, useState } from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HomeFilms from "./Pages/HomeFilms";

export default function App() {
    //APIs

    const [events, setEvents] = useState([]);
}