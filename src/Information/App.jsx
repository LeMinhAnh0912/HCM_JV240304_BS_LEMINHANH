import React, { useState } from "react";
import Add from "./Add";
import Delete from "./Delete";
import "./Add.css";
// import { Edit } from "@mui/icons-material";
import Edit from "./Delete";

//... là dùng để sao chép lại giá trị cũ.

export default function App() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  //THÔNG BÁO LỖI:
  const [error, setError] = useState("");

  //THÊM CÔNG VIỆC:
  const addNewJob = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const jobName = event.target[0].value;
    if (jobName === "") {
      setError("Vui long nhap ten cong viec");
    } else {
      const newJob = {
        id: Math.floor(Math.random() * 1000),
        title: event.target[0].value,
        isChecked: false,
      };
      setJobs([...jobs, newJob]);
      setError("");
      console.log(newJob);
      setJobs([...jobs, newJob]);
      event.target.reset();
      // console.log(jobs);
      localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    }
  };

  //XÓA:
  const handleDelete = (id) => {
    console.log(id);
    console.log(job, "aaa");
    const job = jobs.find((job) => job.id == id);
    if (window.confirm(`Bạn có muốn xóa công việc ${job.title} này hay không?`))
      setJobs(jobs.filter((job) => job.id !== id));
    localStorage.setItem(
      "jobs",
      JSON.stringify(jobs.filter((job) => job.id !== id))
    );
  };
  //CHECKBOX:
  const handleChange = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    console.log(jobs);
    jobs[index].isChecked = !jobs[index].isChecked;
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  //SỐ LƯỢNG:
  let [count, setCount] = useState(0);
  for (let i in jobs) {
    if (jobs[i].isChecked === true) count++;
  }

  //EDIT:
  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    console.log(jobs[index].title);
    // console.log(id);
    const editJobname = prompt(
      "Nhập vào thông tin công việc cần chỉnh sửa",
      jobs[index].title
    );
    if (editJobname !== null) {
      if (editJobname !== "") {
        jobs[index].title = editJobname;
        console.log(editJobname);
        setJobs([...jobs]);
        localStorage.setItem("jobs", JSON.stringify(jobs));
      } else {
        alert("khong dc de trong");
      }
    }
  };
  return (
    <>
      <Add addNewJob={addNewJob} />
      <Delete
        handleChange={handleChange}
        listJob={jobs}
        handleDelete={handleDelete}
        count={count}
        handleEdit={handleEdit}
      />
    </>
  );
}
