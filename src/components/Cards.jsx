import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import p1 from "../assets/p1.PNG";
import p2 from "../assets/p2.PNG";
import p3 from "../assets/p3.PNG";
import p4 from "../assets/p4.PNG";
const CardGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#EEEEEE",
            ml: "15px",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Reflective
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Find meaning and purpose daily
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p1}
                alt="person1"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "170px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#FBE5A7",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Goals
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Identify your goals and objectives
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p2}
                alt="person2"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "170px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#DCF5C4",
            ml: "15px",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Goals
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Identify your goals and objectives
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p3}
                alt="person1"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "335px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#FBE5A7",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Goals
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Find meaning and purpose daily
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p3}
                alt="person1"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "500px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#EEEEEE",
            ml: "15px",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Reflective
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Find meaning and purpose daily
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p1}
                alt="person1"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "500px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Card
          sx={{
            borderRadius: "16px",
            mt: "10px",
            width: "296px",
            height: "140px",
            background: "#DCF5C4",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#1E5542", fontSize: "14px", fontWeight: 700 }}
              >
                Goals
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#1E5542",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "30px",
                }}
              >
                Identify your goals and objectives
              </Typography>
            </Box>
            <Box component="div">
              <img
                src={p4}
                alt="person1"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "335px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardGrid;
