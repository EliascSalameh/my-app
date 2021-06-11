import { Route, Switch } from "react-router-dom";
import NearMePage from "./pages/NearMe";
import AboutPage from "./pages/About";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  // Switch is Used to tell the browser that one of the Route should be displayed and not all as Nested Pages
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/NearMe">
          <NearMePage />
        </Route>
        <Route path="/" exact>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
