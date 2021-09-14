import React from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";

export default function Services({ text }) {
  const location = useLocation();
  const { ad } = location.state;
  const { adress } = location.state;
  // fixing issue with missing image
  const contact_image =
    ad.contact.photo ===
      "https://media-eu.jobylon.com/avatars/jacob4/3.%20Jobbbild.jpg" ||
    ad.contact.photo === null
      ? "https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png"
      : ad.contact.photo;
  const divStyle = {
    backgroundImage: "url(" + ad.company.cover + ")",
  };
  return (
    <div className="job_page">
      <div className="job_container">
        <div className="services" style={divStyle}>
          <div className="overlay"></div>
        </div>
      </div>

      <div className="job_title">
        <h1>{ad.title}</h1>
      </div>

      <div
        className="container job_page_content"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="row jobb_content">
          <div className="col-md-8">
            <h2>Job Description:</h2>
            <div dangerouslySetInnerHTML={{ __html: ad.descr }}></div>
            <h2>Skills & Requirments:</h2>
            <div dangerouslySetInnerHTML={{ __html: ad.skills }}></div>
            <div className="about-section">
              <h2>About the company:</h2>
              <div dangerouslySetInnerHTML={{ __html: ad.company.descr }}></div>
              <div className="link_to_company">
                <a
                  href={ad.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our website
                </a>
              </div>
            </div>

            <a href={ad.urls.apply}>
              <button
                type="button"
                className="btn btn-info apply_button"
                style={{ width: 230, fontSize: 25, marginTop: 45 }}
              >
                Apply
              </button>
            </a>
          </div>
          <div className="col-md-4 job_sidebar">
            <div className="sidebar_content">
              <div className="info_row">
                <i class="bi bi-geo-alt-fill"></i>
                <h4>Adress: </h4>

                <p>  {adress}</p>
              </div>
              <div className="info_row">
                <i class="bi bi-globe"></i>
                <h4>Industry: </h4>

                <p>  {ad.company.industry}</p>
              </div>
              <div className="info_row">
                <i class="bi bi-file-text"></i>
                <h4>Employment Type: </h4>

                <p>  {ad.employment_type}</p>
              </div>
              <div className="info_row">
                <i class="bi bi-shield-check"></i>
                <h4>Experience: </h4>

                <p>  {ad.experience}</p>
              </div>
              <h3>Contact Person</h3>
              <div className="card bg-white d-flex align-items-center justify-content-center ">
                <div className="w-100">
                  <img
                    src={contact_image}
                    alt=""
                    className="rounded-circle ansvar_img"
                  />
                </div>
                <div className="text-center kontakt">
                  <p className="name">{ad.contact.name}</p>
                  <a href={`mailto:${ad.contact.email}`}> {ad.contact.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
