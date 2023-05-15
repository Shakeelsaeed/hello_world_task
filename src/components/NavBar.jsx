import { AppBar, Container, Box, Toolbar } from "@mui/material";
import NavLinks from "./navlinks";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const NavBar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "#FCFCFC", padding: "10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <NavLinks />
            <Box>
              <Box
                component="div"
                sx={{ color: "#AFB1B0" }}
                display="flex"
                flexDirection="row"
                // justifyContent="space-between"
                alignItems="center"
              >
                <NotificationsRoundedIcon sx={{ mr: 5 }} />
                <MailRoundedIcon sx={{ mr: 5 }} />
                <AccountCircleRoundedIcon sx={{ fontSize: "45px" }} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
