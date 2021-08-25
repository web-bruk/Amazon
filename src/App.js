import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useStateValue } from "./Stateprovider";
import React,{useEffect} from 'react';
import { auth } from "./firebase";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe(
  'pk_test_51JL0vLBto8j86WLhmr57CgijlUwHYZjaGJ6KZh18ueL5NgeczNdGQ2wzWd8xyBMUvoeIU8QDtnTiJ6pl688Elm5T00e4ikJIRs'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Header />
            < Orders/>
        </Route>
        <Route path="/login">
            <Header />
            <Login />
        </Route>
        <Route path="/payment">
        <Elements stripe={promise}>
              <Payment />
            </Elements>
        </Route>
        <Route path="/Checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/">
            <Header />
            <Home />
            
            </Route>
            </Switch>
      </div>
      </Router>
  );
}

export default App;
