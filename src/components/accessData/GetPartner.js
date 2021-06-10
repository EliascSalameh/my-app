import { useState } from "react";

function GetPartner(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPartners, SetLoadedPartners] = useState([]);

  fetch("http://localhost:3001/partners")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      SetLoadedPartners(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return loadedPartners;
}

export default GetPartner;
