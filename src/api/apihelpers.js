import axios from "axios";
import { getRandomInt } from "../helpers/random";

// I didnt use https://swapi.dev/api/starships/:id because
// there is no continuity from 0 to lets say 34, some numbers are missing

export const getRandomStarship = () =>
  axios
    .get("https://swapi.dev/api/starships/", {
      params: { page: getRandomInt(1, 3) },
    })
    .then((res) => res.data.results[getRandomInt(0, 9)]);

export const getRandomHero = () =>
  axios
    .get("https://swapi.dev/api/people/", {
      params: { page: getRandomInt(1, 8) },
    })
    .then((res) => res.data.results[getRandomInt(0, 9)]);
