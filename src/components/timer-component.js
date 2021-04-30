function Counter(props) {
  return (
    <div className="counter">
      <p id={props.id} className="counter">
        0
      </p>
    </div>
  );
}

export default Counter;
