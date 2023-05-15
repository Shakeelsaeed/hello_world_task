import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
export default function JournelEntry() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      sx={{
        width: "50%",
        color: "#1A3A5F",
        mt: "15px",
        mr: "20px",
        borderLeft: "2px solid #F6F6F6",
      }}
    >
      <Paper variant="outlined" square />
      <Box component="div" display="flex" justifyContent="space-between">
        <Box
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#1A3A5F",
            ml: "40px",
            mt: "18px",
          }}
        >
          <h4>Morning Journel Entry</h4>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              background: "#F3F8F4",
              color: "#1E5542",
              fontWeight: 700,
              fontSize: "11px",
              border: "none",
              width: "100px",
              height: "45px",
              borderRadius: "12px",
              px: "8px",
              py: "12px",
              mt: "25px",
            }}
          >
            Message
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#1A3A5F",
              borderColor: "green",
              fontSize: "10px",
              px: "10px",
              py: "12px",
              borderRadius: "8px",
              mt: "22px",
              ml: "15px",
            }}
          >
            Schedule a Session
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          color: "#1A3A5F",
          ml: "10px",
          alignItems: "center",
        }}
      >
        <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
        <h4>Brande Fedal IV</h4>
      </Box>
      {/* <Box component="div">
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#1A3A5F",
            fontSize: "14px",
            fontWeight: 600,
            ml: "10px",
          }}
        >
          <h4>Daily Journel</h4>
          <h5>Assigned on - 6 July 2022 @ 3:00 PM</h5>
        </Typography>
      </Box> */}
      <Box>
        <Typography
          sx={{
            alignItems: "center",

            color: "#425151",
            fontSize: "13px",
            fontWeight: 400,
            ml: "10px",
          }}
        >
          <p>
            Gastropub chillwave lumbersexual umami lyft. Poke austin direct
            trade, marfa raclette letterpress actually. Chartreuse sriracha
            pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism
            organic hot chicken literally heirloom occupy af semiotics food
            truck. Aesthetic asymmetrical gluten-free, health goth shaman meh
            lumbersexual bespoke kinfolk helvetica vaporware fashion axe
            freegan. Pour-over hammock succulents disrupt chartreuse raw denim.
            Brunch aesthetic fanny pack subway tile everyday carry green juice
            neutra beard cray small batch poke yuccie plaid pork belly. Blue
            bottle 8-bit flexitarian hashtag. Scenester marfa yuccie snackwave
            edison bulb. VHS blog pickled scenester venmo hashtag lo-fi.
          </p>
        </Typography>
      </Box>
    </Box>
  );
}
