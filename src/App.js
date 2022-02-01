import { useState, useEffect } from "react";

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Trips } from "./components/Trips";
function App() {
  const [trips, setTrips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editId, setEditId] = useState('')

  //UseEffect calls when the app launches
  useEffect(() => {
    fetchTrips();
  }, []);
  //Fetch Trips From DB.JSON
  const fetchTrips = async () => {
    const response = await fetch(`/trips?_sort=id&_order=desc`);
    const data = await response.json();
    setTrips(data);
    setIsLoaded(true);
  };

  //Update item in database
  const updateTrip = () => {
    console.log("Hello");
  };

  //Add trip to database
  const addTrips = async (newTrip) => {
    const response = await fetch('/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrip),
    });
    const data = await response.json();
    const newArray = [ data, ...trips];
    setTrips(newArray);
  };
//Delete trip from database
  const deleteTrip = async (id) => {
    const response = await fetch(`/trips/${id}`, {
      method: 'DELETE',})
    
    const newArray = trips.filter((trip, index) => {
      return id !== trip.id;
    });
    setTrips(newArray);
  };

  const onSetEditId = (id) => {
    setEditId(id)
    console.log(id)
  }

  return (
    <div>
      <Header />
      <Form addTrips={addTrips} length={trips.length} />
      <Trips
      editId={editId}
      onSetEditId={onSetEditId}
        isLoaded={isLoaded}
        trips={trips}
        deleteTrip={deleteTrip}
        updateTrip={updateTrip}
      />
    </div>
  );
}

export default App;
