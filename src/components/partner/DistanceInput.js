import classes from "./DistanceInput.module.css";
import Card from "../ui/Card.js";
import { useRef } from "react";
import { useState } from "react";
import PartnerList from "../../components/partner/PartnerList";

//Starbucks Cafe Central London (51.5144636,-0.142571)

function DistanceInput(props) {
  //In Order to catch the input we user the built in function  in React
  const distanceInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPartners, setLoadedPartners] = useState([]);
  const { greatCircleDistance } = require("great-circle-distance");

  function SubmitHandler(event) {
    //To Prevent the browser from refreshing which is the default behaviour add =>event.preventDefault()
    event.preventDefault();
    //Fetch Data
    setIsLoading(true);
    fetch("http://localhost:3001/partners")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newPartners = [];
        data.map((part) => {
          part.offices.map((off) => {
            var values = off.coordinates.split(",");
            console.log("Latitute--- " + values[0]);
            console.log("Longitude--- " + values[1]);
            const coords = {
              lat1: "51.5144636",
              lng1: "-0.142571",
              lat2: values[0],
              lng2: values[1],
            };
            var distanceInKilometers = greatCircleDistance(coords);
            console.log("Range --- " + distanceInputRef.current.value);
            if (distanceInKilometers <= distanceInputRef.current.value) {
              newPartners.push(part);
            }
            console.log("distance in KM--- " + distanceInKilometers);
          });
        });
        setLoadedPartners(newPartners);
        setIsLoading(false);
      });

    if (isLoading) {
      return (
        <section>
          <p>Loading....</p>
        </section>
      );
    }
  }

  return (
    <section>
      <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label className={classes.label} htmlFor="distance">
              Enter Desired distance (km)
            </label>
            <input
              type="Number"
              min="0"
              max="10000"
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
      <PartnerList partners={loadedPartners} />
    </section>
  );
}

export default DistanceInput;
