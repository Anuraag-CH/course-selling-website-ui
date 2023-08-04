import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Website</Typography>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button variant="contained" onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </div>
          <Button variant="contained" onClick={() => navigate("/signin")}>
            Signin
          </Button>
        </div>
      </div>
    </>
  );
}

export default Appbar;
