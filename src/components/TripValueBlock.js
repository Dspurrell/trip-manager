function TripValueBlock({ title, value, edit }) {

  const onChangeHandle = () => {
    console.log("hey  ")
  }
  const valueElement =
    edit == false ? (
      <p className="value">{value}</p>
    ) : (
      <input
        id="start"
        type="text"
        value={value}
        onChange={onChangeHandle}
      />
    );

  return (
    <div className="trip-value-block">
      <h3 className="header">{title}</h3>
      {valueElement}
    </div>
  );
}

export default TripValueBlock;
