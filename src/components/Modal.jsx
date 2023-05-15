import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CardsGrid from "./Cards";
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Container, TextField, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          color: "white",
          width: "300px",
          backgroundColor: "#1A3A5F",
          borderColor: "green",
          fontSize: "12px",
          px: "8px",
          py: "12px",
          borderRadius: "8px",
          mt: "10px",
          ml: "8px",
        }}
        onClick={handleOpen}
      >
        Assign a journal
      </Button>
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
    </div>
  );
};

export default MyModal;
