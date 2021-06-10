function GetPartner() {
  fetch("http://localhost:3001/partners")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
  return "";
}

export default GetPartner;
