import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  var desc =
    props.ad.company.descr.length > 220
      ? props.ad.company.descr.substring(0, 220)
      : props.ad.company.descr;
  //re-trim if we are in the middle of a word
  desc = desc.substr(0, Math.min(desc.length, desc.lastIndexOf(" "))) + " ...";
  var location = props.ad.locations[0].location.city
    ? props.ad.locations[0].location.city
    : props.ad.locations[0].location.text;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="cards-card-4">
          <div
            className="header-image"
            style={{ backgroundImage: `url(${props.ad.company.cover})` }}
          ></div>
          <div className="cards-content">
            <div className="cards-name">
              <h3>{props.ad.title}</h3>
              <p>{location}</p>
            </div>
            <div
              className="cards-description"
              dangerouslySetInnerHTML={{ __html: desc }}
            ></div>
            <div className="row" className="btn_row">
              <Link
                className="cards__item__link"
                to={{
                  pathname: props.path,
                  state: { ad: props.ad, adress: location},
                }}
                style={{ maxWidth: 140 }}
              >
                <button type="button" className="btn btn-info">
                  Läs mer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
