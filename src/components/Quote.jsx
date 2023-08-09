import React, { useState } from "react";

function Quote() {
  const [jobType, setJobType] = useState("");
  return (
    <div className="quote-container">
      <div className="quote-form">
        <form>
          <p className="quote-title">REQUEST A QUOTE</p>
          <input placeholder="Name" type="text" className="input-field"></input>
          <input
            placeholder="Email"
            type="text"
            className="input-field"
          ></input>
          <input
            placeholder="Address"
            type="text"
            className="input-field"
          ></input>
          <select
            onChange={(event) => {
              setJobType(event.target.value);
            }}
            placeholder="Job Type"
            className="input-field"
          >
            <option value="">Please select a Job Type</option>
            <option value="wt">Window Treatments</option>
            <option value="up">Upholstery</option>
            <option value="sc">Slip Covers</option>
            <option value="cp">Cushions and Pillows</option>
            <option value="bed">Bedding</option>
          </select>
          <select
            className={jobType === "wt" ? "input-field" : "hide-selection"}
          >
            <option>Type of Window Treatment</option>
            <option>Drapery</option>
            <option>Roman Shades</option>
            <option>Valances and Cornices</option>
            <option>Cell shades, wood blinds, shutters</option>
            <option>Other</option>
          </select>
          <select
            className={jobType === "up" ? "input-field" : "hide-selection"}
          >
            <option>Type of Upholstery</option>
            <option>Sofas</option>
            <option>Chairs</option>
            <option>Ottomans</option>
          </select>
          <select
            className={jobType === "sc" ? "input-field" : "hide-selection"}
          >
            <option>Type of Slip Covers</option>
            <option>Sofas</option>
            <option>Chairs</option>
            <option>Ottomans</option>
          </select>
          <select
            className={jobType === "cp" ? "input-field" : "hide-selection"}
          >
            <option>Type of Cushions and Pillows</option>
            <option>Windows and Bench Seats</option>
            <option>Outdoor Furniture</option>
          </select>
          <select
            className={jobType === "bed" ? "input-field" : "hide-selection"}
          >
            <option>Type of Bedding</option>
            <option>Coverlets</option>
            <option>Spreads</option>
            <option>Duveys</option>
            <option>Shams</option>
            <option>Bed Skirts</option>
          </select>
          <input placeholder="Number of rooms" className="input-field"></input>
          <input
            placeholder="Number of windows, if applicable"
            className="input-field"
          ></input>
          <input
            placeholder="Desired start date"
            className="input-field"
          ></input>
          <input
            placeholder="How did you hear about me"
            className="input-field"
          ></input>
          <textarea
            placeholder="Additional information"
            type="text"
            className="input-field text-box"
          ></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Quote;
