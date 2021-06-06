import './App.css';
import { HomePage, WhatsWe, Careers, Contact, Services, CareersDetails, Feeds}  from './Components';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainComponent from './Components/MainComponent';
function App() {
  return (
    <BrowserRouter>
      <MainComponent>
        <Switch>
          <Route
            path={"/feeds"}
            component={Feeds}
          />
          <Route
            path={"/what-we-do"}
            component={WhatsWe}
          />
          <Route
            path={"/services"}
            component={Services}
          />
          <Route
            path={"/contact"}
            component={Contact}
          />
          <Route
            path={"/careers/:id"}
            component={CareersDetails}
          />
          <Route
            path={"/careers"}
            component={Careers}
          />
          <Route
            path={"/"}
            component={HomePage}
          />
        </Switch>
      </MainComponent>
    </BrowserRouter>
  );
}

export default App;
