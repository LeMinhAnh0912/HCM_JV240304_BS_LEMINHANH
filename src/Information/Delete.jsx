import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Add.css";
// import PropTypes from "prop-types";
//châm hỏi chấm map là để tránh trường hợp giá trị bị undefined

export default function Delete({
  listJob,
  handleDelete,
  handleChange,
  count,
  handleEdit,
}) {
  return (
    <div className="edit-div">
      <ol id="list-delete">
        {listJob.length > 0 ? (
          listJob?.map((job) => (
            <li id="edit-job" key={job.id}>
              <div id="edit-icon">
                <input
                  id="job-delete"
                  type="checkbox"
                  // onChange={handleChange}
                  checked={job.isChecked}
                  onChange={() => handleChange(job.id)}
                />
                <span
                  style={{
                    textDecoration: job.isChecked ? "line-through" : "none",
                  }}
                  id="edit-span"
                >
                  {job.title}
                </span>
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => handleEdit(job.id)}
                  id="icon-pen"
                  className="edit"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(job.id)}
                  id="icon-delete"
                />
              </div>
            </li>
          ))
        ) : (
          <img
            src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg"
            style={{ width: "250px" }}
          ></img>
        )}
      </ol>
      <p className="edit-count">
        Công việc đã hoàn thành: {count}/{listJob.length}
      </p>
    </div>
  );
}

// listJobs.propTypes = {
//   listJob: PropTypes.arrayOf.isRequired,
//   handleDelete: PropTypes.func,
// };
