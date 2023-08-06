/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";

function Course() {
  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((response) => response.json())
      .then((data) => setCourses(data.courses));
  }, []);

  let course = null;

  for (let i = 0; i < courses.length; i++) {
    if (courseId === courses[i]._id) {
      course = courses[i];
      break; // Once we found the course, we can break the loop
    }
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CourseCard course={course} />
      <UpdateCard course={course} />
    </div>
  );
}

function CourseCard(props) {
  console.log(props.title);
  return (
    <Card variant="outlined" style={{ width: 300, margin: 10, height: 300 }}>
      <Typography textAlign={"center"} variant="h6">
        {props.course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {props.course.description}
      </Typography>
      <img
        src={props.course.imageLink}
        style={{ width: "100%" }}
        alt="Course"
      />
    </Card>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const courseId = props.course._id;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 300, padding: 10 }}>
        <TextField
          id="filled-basic"
          label="Title"
          variant="outlined"
          fullWidth={true}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-password-input"
          label="Description"
          fullWidth={true}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          label="Image link"
          fullWidth={true}
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses/" + courseId, {
              method: "PUT",
              body: JSON.stringify({
                title,
                description,
                published: true,
                imageLink: imageLink,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"), // Replace "token" with the actual key used for the token in localStorage
              },
            });
          }}
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
}

export default Course;
