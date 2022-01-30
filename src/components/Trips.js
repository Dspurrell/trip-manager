import Trip from "./Trip";
import { useState, useEffect } from 'react'

export const Trips = ({ isLoaded, trips, deleteTrip, updateTrip }) => {

  const [text, setText] = useState('')

  useEffect(()=> {
    return (!isLoaded ? setText('Loading..') : setText('No Trips'))
  })

  if (!isLoaded || trips.length === 0) {
    return (
      <div id="loading" className="trips-container-individual">
        <h1 className="loading-trips">{text}</h1>
      </div>
    );
  } else {
    return (
      <div className="trips-container">
        {trips.slice(0).reverse().map((trip, index) => {
          return <Trip key={index} deleteTrip={deleteTrip} trip={trip} updateTrip={updateTrip}/>;
        })}
      </div>
    );
  }
};
