import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../context";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent:'space-between',
            width:'100%'
          }}
        >
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
          <IconButton color="inherit" onClick={toggleTheme}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
