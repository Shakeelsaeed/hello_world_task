import { Box, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridViewRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import Logo from "../assets/Logo.PNG";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <Box component="div" display="flex">
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="img"
          sx={{
            height: 44,
            mr: 6,
          }}
          alt="Your logo."
          src={Logo}
        />
      </NavLink>
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          display="flex"
          sx={{ px: 4 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          
        >
          <GridViewIcon />
          <Typography>Dashboard</Typography>
        </Box>
      </NavLink>

      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <VideocamRoundedIcon />
          <Typography>Appointments</Typography>
        </Box>
      </NavLink>
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <PersonRoundedIcon />
          <Typography>Clients</Typography>
        </Box>
      </NavLink>
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <DescriptionIcon />
          <Typography>Assessments</Typography>
        </Box>
      </NavLink>
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <AutoFixHighIcon />
          <Typography>Tools & Guides</Typography>
        </Box>
      </NavLink>
      <NavLink to="/" style={{ color: "#AFB1B0" }}>
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <InsertDriveFileRoundedIcon />
          <Typography>Notes</Typography>
        </Box>
      </NavLink>
      <NavLink to="/journel">
        <Box
          component="div"
          sx={{ px: 4 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <InsertDriveFileRoundedIcon />
          <Typography>Journels</Typography>
        </Box>
      </NavLink>
    </Box>
  );
}
