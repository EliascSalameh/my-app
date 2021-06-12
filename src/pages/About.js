function AboutPage() {
  return (
    <section>
      <h1>About </h1>
      <br />
      <h3>About The Application</h3>
      <p>
        will allow the user to get the nearby contact based on a specific
        distance, that is calculated based on a fixed location (Starbucks Cafe
        Central London (51.5144636,-0.142571)).
      </p>
      <p>
        The user will enter the required distance Min: 0Km - Max: 10,000km, then
        Click on "Fetch" Button.
      </p>
      <p>
        An API Call is requested to read data from JSon file and loop through
        all partners and return the ones within the range.
      </p>
      <br />
      <h3>About Me</h3>
      <p>
        It was a challenge for me to learn
        ReactJs/Typescript/NodeJs/html/css/docker in a period of 10 days
        specially
      </p>
      <p>
        that I don't have any experience in these technologies. Also I am full
        time employee so i had to work on learning this after working hours and
        during the weekends.
      </p>
      <p> Hopefully I was able to cover what was requested from your side :)</p>
      <br />
      <p>Elias Salameh.</p>
      <br />
    </section>
  );
}
export default AboutPage;
