import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 125 }}
      >
        <Typography variant="h6" gutterBottom>
          Welocme to my website.Signup Below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 350, padding: 10 }}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="outlined"
            fullWidth={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then((res) => {
                res.json().then((data) => {
                  localStorage.setItem("token", data.token);
                });
              });
            }}
          >
            Signup
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Signup;
