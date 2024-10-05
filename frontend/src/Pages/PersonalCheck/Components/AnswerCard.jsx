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
export default function AnswerCard({ options,onCardClick  }) {
  const handleFocus = (event) => {
    event.currentTarget.classList.add('focused');
  };

  const handleBlur = (event) => {
    event.currentTarget.classList.remove('focused');
  };

  return (
      options.map((option, ind) => (
      <Card key={ind} sx={{ textAlign:"center", overflow: "visible", position: "relative" }} className="one-card"  tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}>
        <CardActions className="relative gradient-shadow hover:scale-100 duration-700 activity-choice"  onClick={() => onCardClick(option.value)}>
          <CardContent>
            <Typography variant="h5" component="div">
              {option.label}
            </Typography>
          </CardContent>
        </CardActions>
      </Card>
    ))
  );
}
