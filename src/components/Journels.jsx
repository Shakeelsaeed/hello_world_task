import React from "react";
import { Typography, Paper, Box, Button, Card } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyModal from "./Modal";
export default function Journels() {
  return (
    <>
      <Paper variant="outlined" square />
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          mt: "15px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#1A3A5F",
            fontSize: "20px",
            fontWeight: "500",
            mt: "12px",
            ml: "8px",
          }}
        >
          Journals
        </Typography>
        <Accordion
          component="div"
          sx={{
            mt: "10px",
            color: "#90A3A7",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              background: "#FAFAFA",
              color: "#425151",
              borderRadius: "50px",
              border: 0,
            }}
          >
            <Typography
              sx={{
                color: "#425151",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              All
            </Typography>
          </AccordionSummary>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="div"
                sx={{
                  mt: "10px",
                  color: "#90A3A7",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Daily Journel
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box component="div">
                <Typography
                  sx={{
                    color: "#1A3A5F",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "5px",
                  }}
                >
                  <h4>Online Consultation</h4>
                  <h5>6 July 2022 @ 3:00 PM</h5>
                </Typography>
                <Typography
                  sx={{
                    color: "#1A3A5F",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "5px",
                  }}
                >
                  <h4>Online Consultation</h4>
                  <h5>6 July 2022 @ 3:00 PM</h5>
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                component="div"
                sx={{
                  mt: "10px",
                  color: "#90A3A7",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Grif Journel
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  color: "#1A3A5F",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "5px",
                }}
              >
                <h4>Entry 1</h4>
                <h5>6 July 2022 @ 3:00 PM</h5>
                <h4>Entry 2</h4>
                <h5>6 July 2022 @ 3:00 PM</h5>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Accordion>
        {/* <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#1A3A5F",
            borderColor: "green",
            fontSize: "12px",
            px: "8px",
            py: "12px",
            borderRadius: "8px",
            mt: "10px",
          }}
        >
          Assign a Journal
        </Button> */}
        <MyModal />
      </Card>
    </>
  );
}
