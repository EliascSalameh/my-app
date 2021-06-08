import classes from "./DistanceInput.module.css";
import Card from "../ui/Card.js";
import { useRef } from "react";

function DistanceInput() {
  //In Order to catch the input we user the built in function  in React
  const distanceInputRef = useRef();
  //To Prevent the browser from refreshing which is the default behaviour add =>event.preventDefault()
  function SubmitHandler(event) {
    event.preventDefault();
    var enteredDistanceInput = distanceInputRef.current.value;
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="distance">
            Enter Desired distance (km)
          </label>
          <input
            type="Number"
            min="0"
            max="1000"
            id="distance"
            required
            ref={distanceInputRef}
          ></input>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Fetch</button>
        </div>
      </form>
    </Card>
  );
}

export default DistanceInput;
