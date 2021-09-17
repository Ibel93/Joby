import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import { useLocation } from "react-router-dom";

//Function to restore scroll prositon
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // fetch data in Json format
  const [data, setData] = useState([]);
  const [loading, setLoader] = useState(true);
  const getData = () => {
    fetch(
      "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
      }
    )
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(function (myJson) {
       // console.log(myJson);
       setData(myJson);
       setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };
  useEffect(() => {

    getData();
  }, []);

  //Initialize routes and render navbar
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}>
            <Home jobs={data} loading={loading}/>
          </Route>
          <Route path="/jobb">
            <Services text={"If I change it"} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
