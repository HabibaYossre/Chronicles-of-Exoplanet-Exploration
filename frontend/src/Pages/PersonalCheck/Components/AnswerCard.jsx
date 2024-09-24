import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/AnswerCard.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function AnswerCard({ props }) {
  return (
    <Card className="py-6" sx={{ minWidth: 275, overflow: "visible", position: "relative" }}>
      <CardActions className="relative gradient-shadow hover:scale-100 duration-700 py-10">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {props.number}
          </Typography>
          <Typography variant="h5" component="div">
            {props.answer}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
}
