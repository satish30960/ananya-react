import './App.css';
import { HomePage, WhatsWe, Careers, Contact, Services, CareersDetails, Feeds}  from './Components';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainComponent from './Components/MainComponent';
import NursingForm from './Components/Services/NursingForm';
import FAQLIST from './Components/Services/FAQLIST';
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
            path={"/services/:id"}
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
            path={"/nurse-registration"}
            component={NursingForm}
          />
          <Route
            path={"/nursing-faq"}
            component={FAQLIST}
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
