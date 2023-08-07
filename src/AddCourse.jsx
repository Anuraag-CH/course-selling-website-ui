import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagelink, setImageLink] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 350, padding: 10 }}>
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
          onClick={async () => {
            await axios.post(
              "http://localhost:3000/admin/courses",
              {
                title,
                description,
                imagelink,
                published: true,
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            alert("Added course!");
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
