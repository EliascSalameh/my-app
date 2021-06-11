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
        const newPartnerList = [];

        data.map((partner) => {
          partner.offices.map((office) => {
            var values = office.coordinates.split(",");

            const coords = {
              lat1: "51.5144636",
              lng1: "-0.142571",
              lat2: values[0],
              lng2: values[1],
            };

            var distanceInKilometers = greatCircleDistance(coords);
            console.log("Range --- " + distanceInputRef.current.value);
            if (distanceInKilometers <= distanceInputRef.current.value) {
              var newPartner = {
                id: partner.id + office.location,
                organization: partner.organization,
                address: office.address,
              };
              console.log(newPartner);
              newPartnerList.push(newPartner);
            }
            console.log("distance in KM--- " + distanceInKilometers);
          });
        });
        setLoadedPartners(newPartnerList);
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
      <hr className={classes.rounded} />
      <section>
        <PartnerList partners={loadedPartners} />
      </section>
    </section>
  );
}

export default DistanceInput;
