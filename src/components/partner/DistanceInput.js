import classes from "./DistanceInput.module.css";
import Card from "../ui/Card.js";
import { useRef } from "react";
import { useState } from "react";
import PartnerList from "../../components/partner/PartnerList";

function DistanceInput(props) {
  //In Order to catch the input we user the built in function  in React
  const distanceInputRef = useRef();
  const { greatCircleDistance } = require("great-circle-distance");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [loadedPartners, setLoadedPartners] = useState([]);

  function SubmitHandler(event) {
    //To Prevent the browser from refreshing which is the default behaviour add =>event.preventDefault()
    event.preventDefault();
    //Fetch Data
    setError(null);
    setIsLoading(true);
    fetch("http://localhost:3001/partners")
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data.");
        }
        return response.json();
      })
      .then((data) => {
        const newPartnerList = [];

        data.map((partner) => {
          partner.offices.map((office) => {
            var values = office.coordinates.split(",");
            //Starbucks Cafe Central London (51.5144636,-0.142571)
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
                distance: Math.round(distanceInKilometers),
              };
              console.log(newPartner);
              newPartnerList.push(newPartner);
            }
            console.log("distance in KM--- " + distanceInKilometers);
          });
        });

        //Sort List By company Ascending
        newPartnerList.sort((a, b) =>
          a.organization > b.organization ? 1 : -1
        );
        setLoadedPartners(newPartnerList);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }

  return (
    <section>
      <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label className={classes.label} htmlFor="distance">
              Enter desired distance (km)
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
      <section>
        {isError && (
          <div>
            <h3 className={classes.errormessage}>{isError}</h3>
          </div>
        )}
        {isLoading && (
          <div>
            <h3 className={classes.loadingmessage}>Loading....</h3>
          </div>
        )}
        <hr className={classes.rounded} />
      </section>
      <section>
        {!isLoading && !isError && <PartnerList partners={loadedPartners} />}
      </section>
    </section>
  );
}

export default DistanceInput;
