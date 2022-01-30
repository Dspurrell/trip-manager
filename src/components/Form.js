import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

export const Form = ({ addTrips, length }) => {
  const [currentStart, setCurrentStart] = useState("");
  const [currentFinish, setCurrentFinish] = useState("");
  const [currentStartTime, setCurrentStartTime] = useState("");
  const [currentFinishTime, setCurrentFinishTime] = useState("");
  const [disabled, setDisabled] = useState(true)


  const clearState = () => {
    setCurrentStart('')
    setCurrentStartTime('')
    setCurrentFinish('')
    setCurrentFinishTime('')
  }
  const onSetCurrent = (e) => {
    if (e.target.id === "start") {
      setCurrentStart(e.target.value);
    } else if (e.target.id === "finish") {
      setCurrentFinish(e.target.value);
    } else if (e.target.id === "s-time") {
      setCurrentStartTime(e.target.value);
    } else if (e.target.id === "f-time") {
      setCurrentFinishTime(e.target.value);
    }
  };

useEffect(() => {
  if(currentStart && currentFinish && currentStartTime && currentFinishTime) {
    
    setDisabled(false) 
  } else setDisabled(true)
})

  const onChangeTime = (time) => {
    console.log(time)
    time = time.replace(":", "");
    time = parseInt(time);
    let ampm = time >= 1200 ? "PM" : "AM";
    if (time > 1259) {
      time -= 1200;
    } else if (time === 0) {
      time = 1200;
    } else if (time<100) {
      time = '' + 12 + time
    }
    let colonSpace = time > 959 ? 2 : 1;
    time = time.toString() + ampm;
    return (time = time.slice(0, colonSpace) + ":" + time.slice(colonSpace));
  };

  const onSubmit = (e) => {
    e.preventDefault();
     
     addTrips({
      id: length,
      start: currentStart,
      finish: currentFinish,
      start_time: onChangeTime(currentStartTime),
      finish_time: onChangeTime(currentFinishTime),
    });
    clearState()
    
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <div className="form-container">
        <label>Start location:</label>
        <input
          id="start"
          type="text"
          onChange={onSetCurrent}
          value={currentStart}
        />
      </div>
      <div className="form-container">
        <label>End location:</label>
        <input
          id="finish"
          type="text"
          onChange={onSetCurrent}
          value={currentFinish}
        />
      </div>
      <div className="form-container">
        <label>Start Time:</label>
        <input
          id="s-time"
          type="time"
          onChange={onSetCurrent}
          value={currentStartTime}
        />
      </div>
      <div className="form-container">
        <label>Finish Time:</label>
        <input
          id="f-time"
          type="time"
          onChange={onSetCurrent}
          value={currentFinishTime}
        />
        
      </div>
      <input disabled={disabled} id="submit" type="submit" />
    </form>
  );
};
