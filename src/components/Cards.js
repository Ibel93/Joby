import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards(props) {
  var ads = null;
  if (props.jobs.length > 0 ) {
    ads = props.jobs.map((el) => {
      return (
        <CardItem
          src="images/img-3.jpg"
          text="Sailing in the Atlantic Ocean"
          label={el.title}
          ad={el}
          path="/jobb"
        />
      );
    });
  } else if (!props.loading){
    ads = (
      <div
        style={{
          marginBottom: 30,
          mariginTop: 50,
          textAlign: "center",
          width: "100%",
        }}
      >
        <h2>No jobs available!</h2>
        <a href="https://www.jobylon.com/">Visit our website </a>
      </div>
    );
  }
  return (
    <div className="cards" id="jobs">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="container-fluid">
        <div id="wrraper" className="row">
          {ads}
          {props.loading && (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
