import React from "react";
import "./Add.css";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

// import Add from "./Add.css";
// import PropTypes from "prop-types";
export default function Add({ addNewJob }) {
  return (
    <form onSubmit={addNewJob}>
      <div id="list-job">
        <h1 className="font-job">List Jobs</h1>
        <div id="btn">
          <input
            id="input"
            type="text"
            placeholder="Enter your job"
            autoFocus
          />
          <button className="btn-add" type="submit">
            Add Jobs
          </button>
        </div>
      </div>
    </form>
  );
}
// InputSong.propTypes = {
//   addNewJob: PropTypes.func,
// };
