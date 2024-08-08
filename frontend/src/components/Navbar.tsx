import { AppBar, Toolbar, Typography, Button,  Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KeanuImages
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Request Image
          </Button>
          <Button color="inherit" component={Link} to="/history">
            History
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
