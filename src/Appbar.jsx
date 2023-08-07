import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Define the URL for the API endpoint
    const url = "http://localhost:3000/admin/me";

    // Make the Axios request within the useEffect hook
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => response.data)
      .then((data) => {
        setUsername(data.username);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
        setLoggedIn(false);
      });
  }, []);

  const handlesignin = () => {
    navigate("/signin");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handlesignout = () => {
    // Perform signout logic here
    localStorage.setItem("token", null);
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
            Coursera{" "}
          </Typography>
          {loggedIn ? (
            <>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ marginRight: "1rem" }}
              >
                {" "}
                {username}{" "}
              </Typography>
              <Button color="inherit" onClick={handlesignout}>
                {" "}
                signout{" "}
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handlesignin}>
                {" "}
                signin{" "}
              </Button>
              <Button color="inherit" onClick={handleSignup}>
                {" "}
                Signup{" "}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
