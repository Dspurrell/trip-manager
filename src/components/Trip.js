import TripValueBlock from "./TripValueBlock";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useState } from 'react'
export default function Trip({ trip, deleteTrip, updateTrip }) {

const [edit, setEdit] = useState(false)

  const onDeleteTrip = () => {
    deleteTrip(trip.id);
  };

  const onUpdateTrip = () => {
    setEdit(!edit)
    //updateTrip(trip.id)
  }
  return (
    <div className="trips-container-individual">
      <TripValueBlock edit={edit} title="Starting Location" value={trip.start} />
      <TripValueBlock edit={edit} title="Destination" value={trip.finish} />
      <TripValueBlock edit={edit} title="Start Time" value={trip.start_time} />
      <TripValueBlock edit={edit} title="Finish Time" value={trip.finish_time} />
      <div className="edit-item">
        <FaTrashAlt className="trash" onClick={onDeleteTrip} />
        <FaPen onClick={onUpdateTrip} className="edit"/>
      </div>
    </div>
  );
}
