/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((response) => response.json())
      .then((data) => setCourses(data.courses));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {courses.map((course) => {
        return <Course course={course}></Course>;
      })}
    </div>
  );
}

function Course(props) {
  return (
    <Card variant="outlined" style={{ width: 300, margin: 10, minHeight: 200 }}>
      <Typography textAlign={"center"} variant="h6">
        {props.course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {props.course.description}
      </Typography>
      <img src={props.course.imageLink} style={{ width: "fullWidth" }}></img>
    </Card>
  );
}

export default Courses;
