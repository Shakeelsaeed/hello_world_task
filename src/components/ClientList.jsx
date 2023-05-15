import React, { useState } from "react";
import {
  Card,
  Paper,
  Button,
  Container,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Modal,
  IconButton,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CardsGrid from "./Cards";

import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
export default function ClientList() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          ml: "60px",
          borderRadius: "10px",
          border: 0,
        }}
      >
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          sx={{ mt: "18px", ml: "8px" }}
        >
          <Typography
            component="h2"
            sx={{
              color: "#1A3A5F",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Client List
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#1A3A5F",
              borderColor: "green",
              fontSize: "10px",
              px: "10px",
              py: "12px",
              mr: "12px",
              borderRadius: "8px",
            }}
            onClick={handleOpen}
          >
            Assign a Journal
          </Button>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "648px",
              height: "100%",
              bgcolor: "white",
              outline: "none",
              boxShadow: 24,
              borderRadius: "15px",
              p: "4",
              background: "#FFFFFF",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                mt: "18px",
                right: "18px",
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              align="left"
              color="#1A3A5F"
              sx={{ fontSize: "16px", fontWeight: 500, mt: "22px", ml: "16px" }}
            >
              Assign Journel
            </Typography>
            <Container>
              <TextField
                InputProps={{
                  endAdornment: <SearchRoundedIcon sx={{ mr: "570px" }} />,

                  disableUnderline: true,
                }}
                id="search"
                variant="standard"
                sx={{
                  width: "100%",
                  alignItems: "center",
                  alignContent: "center",
                  mt: "30px",
                  background: "#FAFAFA",
                  borderRadius: "10px",
                  p: "7px",
                }}
              />
            </Container>
            {/*           
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <Card key={card} sx={{ maxWidth: "200px", flexGrow: 1 }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Card {card}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                </CardActions>
              </Card>
            ))}
          </div> */}
            <CardsGrid />
          </div>
        </Modal>
        <Container>
          <TextField
            id="search"
            label="Search by client name"
            variant="standard"
            sx={{
              "& label": {
                color: "#425151",
                fontSize: "13px",
                fontWeight: 400,
                ml: "10px",
              },
              width: "100%",
              alignItems: "center",
              alignContent: "center",
              mt: "10px",
              background: "#FAFAFA",
              borderRadius: "10px",
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment>
                  <SearchRoundedIcon sx={{ mb: "10px" }} />
                </InputAdornment>
              ),
            }}
          />
        </Container>
        <Accordion
          component="div"
          sx={{
            mt: "10px",
            color: "#90A3A7",
            fontSize: "16px",
            fontWeight: 600,
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                color: "#90A3A7",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Assigned by you
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box component="div">
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#1A3A5F",
                }}
              >
                <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
                <h4>Maurice Hilpert</h4>
                {/* <h5>Yet to view</h5> */}
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#1A3A5F",
                }}
              >
                <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
                <h4>Valarie Hickle</h4>
                {/* <h5>viewed</h5> */}
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#1A3A5F",
                }}
              >
                <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
                <h4>Brande Fedal IV</h4>
                {/* <h5>Shared</h5> */}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          component="div"
          sx={{
            mt: "10px",
            color: "#90A3A7",
            fontSize: "16px",
            fontWeight: 600,
            border: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                color: "#90A3A7",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Shared With you
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#1A3A5F",
                  }}
                >
                  <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
                  <h4>Maurice Hilpert</h4>
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "#1A3A5F",
                }}
              >
                <PersonRoundedIcon sx={{ width: "40px", height: "40px" }} />
                <h4>Brande Fedal IV</h4>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Card>
      ;
    </>
  );
}
