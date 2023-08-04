import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function Signin() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 125 }}
      >
        <Typography variant="h6" gutterBottom>
          Welocme to my website.Signin Below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 350, padding: 10 }}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth={true}
          />
          <br />
          <br />
          <Button variant="contained">Signin</Button>
        </Card>
      </div>
    </>
  );
}

export default Signin;
