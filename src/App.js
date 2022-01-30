import { useState, useEffect } from "react";

import { Form } from './components/Form'
import { Header } from "./components/Header";
import { Trips } from "./components/Trips";
function App() {
  
  const [trips, setTrips] = useState('');
  const [isLoaded, setIsLoaded] = useState(false)

//UseEffect calls when the app launches
  useEffect(() => {
    fetchTrips()
  }, []);
//Fetch Trips From DB.JSON
  const fetchTrips = async () => {
    const response = await fetch(
      `/trips?_sort=id&_order=desc`)
    const data = await response.json()
    setTrips(data)
    setIsLoaded(true)
  }

  const updateTrip = () => {
    console.log("Hello")
  }

  const addTrips = (newTrip) => {
    const newArray = [...trips,newTrip]
    setTrips(newArray)
  }

  const deleteTrip = (id) => {
    const newArray = trips.filter((trip, index) => {
      return id !== trip.id
    })
    setTrips(newArray)
  }



  return (
  <div>
  <Header />
  <Form addTrips={addTrips} length={trips.length}/>
  <Trips isLoaded={isLoaded} trips={trips} deleteTrip={deleteTrip} updateTrip={updateTrip}/>
  </div>
  )
}

export default App;
