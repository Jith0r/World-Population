import axios from "axios"; // On importe axios
import React, { useEffect, useState } from "react"; // On importe useEffect, useState
import Card from "./Card";

const Countries = () => {
  //Data, setData pour modifier en utilisant useState(hook) qui est vide pour l'instant
  const [data, setData] = useState([]);

  // La du range on le détermine à 36 pays de base on pourra ensuite le slice avant le map et utiliser onChange
  const [rangeValue, setRangeValue] = useState(36);

  // Les radios pour les continents qu'on va map et utiliser pour nos radios
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le continent/radio sélectionner on se stock ça dans la variable selectedRadio
  const [selectedRadio, setSelectedRadio] = useState("");

  // useEffect(hook) si le composant est monté
  // axios pour fetch les données de l'API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all") // On récupère les données
      .then((res) => setData(res.data)); // On passe ces données à notre state
  }, []);

  return (
    <div className="countries">
      {/* Container des radio */}
      <ul className="radio-container">
        <input
          type="range" /* Le type de l'input */
          min="1" /* Minimum 1 pays  */
          max="250" /* Maximum 250 pays */
          defaultValue={rangeValue} /* Valeur par défault c'est rangeValue */
          /* Au changement on récupère l'event et on change le state setRangeValue en attribuant la valeur */
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* On utilise map, pour mapper les continent pour crée plusieurs radio en utilisant "radios" */}
        {radios.map((continent) => (
          <li>
            <input
              type="radio" /* Le type de l'input */
              id={continent} /* ID unique */
              name="continentRadio" /* Nom pour sélectionner un par un */
              checked={continent === selectedRadio}
              /* Au changement on récupère l'évenement, on change le state setSelectedRadio en attribuant l'ID */
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            {/* On connecte le label */}
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      {/* Si il y a un continent sélectionner alors tu affiche le boutton  */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          /* On filtre les pays sélectionner via leur continent */
          .filter((country) => country.continents[0].includes(selectedRadio))
          /* On trie les populations du grand au plus petit */
          .sort((a, b) => b.population - a.population)
          /* On coupe les pays de 0 à la rangeValue */
          .slice(0, rangeValue)
          /* On affiche le résultat via map */
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
