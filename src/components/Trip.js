import TripValueBlock from "./TripValueBlock";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useState } from 'react'
export default function Trip({ trip, deleteTrip, updateTrip, editId, onSetEditId }) {

  const onDeleteTrip = () => {
    deleteTrip(trip.id);
  };

  const onUpdateTrip = () => {
    onSetEditId(trip.id)    //updateTrip(trip.id)
  }
  return (
    <div className="trips-container-individual">
      <TripValueBlock edit={editId===trip.id?false:true} title="Starting Location" value={trip.start} />
      <TripValueBlock edit={editId===trip.id?false:true} title="Destination" value={trip.finish} />
      <TripValueBlock edit={editId===trip.id?false:true} title="Start Time" value={trip.start_time} />
      <TripValueBlock edit={editId===trip.id?false:true} title="Finish Time" value={trip.finish_time} />
      <div className="edit-item">
        <FaTrashAlt className="trash" onClick={onDeleteTrip} />
        <FaPen onClick={onUpdateTrip} className="edit"/>
      </div>
    </div>
  );
}
