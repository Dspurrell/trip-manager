function TripValueBlock({ title, value, edit }) {

  const onChangeHandle = (e) => {
    console.log(e.target.readOnly)
  }
 
  return (
    <div className="trip-value-block">
      <h3 className="header">{title}</h3>
      <input
        className={edit===false ? 'editable' : 'uneditable'}
        id="start"
        type="text"
        value={value}
        onChange={onChangeHandle} 
        readOnly={edit===false ? false : true}
      />
    </div>
  );
}

export default TripValueBlock;
