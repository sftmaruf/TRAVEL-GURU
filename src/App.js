import React, { createContext, useState } from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FrontPage from './components/frontpage/FrontPage';
import Booking from './components/booking/Booking';
import { typeBooking } from './components/fakedata/FakeData';
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';
import Search from './components/search/Search';
import PrivateRoute from './components/privateroute/PrivateRoute';
import { extractLocalStorage } from './components/localStorageMechanism/localStorageMechanism';
import { extractSessionStorage } from './components/sessionStorageMechanism/SessionStorageMechanism';

export const context = createContext();
export const signedUserContext = createContext();

function App() {

  const [isWhite, setIsWhite] = useState(false);
  const [signedUser, setSignedUser] = useState(extractLocalStorage('signeduser') || extractSessionStorage('signeduser') || {});
  const [selectedPlace, setSelectedPlace] = useState(extractLocalStorage('selected') || {});

  return (
    <Router>
      <signedUserContext.Provider value={[signedUser, setSignedUser]}>
        <context.Provider value={[selectedPlace, setSelectedPlace, setIsWhite, isWhite]}>
          <div className={isWhite ? 'isWhite' : 'container'}>
            <Navbar isWhite={isWhite}></Navbar>
            <Switch>
              <Route exact path='/'>
                <FrontPage type={!typeBooking.bind}></FrontPage>
              </Route>

              <Route path="/booking/:id">
                <Booking type={typeBooking}></Booking>
              </Route>

              <Route path="/login">
                <LogIn></LogIn>
              </Route>

              <Route path="/signup">
                <SignUp></SignUp>
              </Route>

              <PrivateRoute>
                <Search></Search>
              </PrivateRoute>
            </Switch>
          </div >
        </context.Provider>
      </signedUserContext.Provider>
    </Router>
  );
}

export default App;
