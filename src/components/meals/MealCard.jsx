// MealCard.js
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function MealCard({ meal, ingredient }) {
  return (
    <Link
      to={`/meal/${ingredient}/${meal.idMeal}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          borderRadius: 2,
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0px 16px 120px rgba(34, 35, 58, 0.4)",
          },
        }}
      >
        <LazyLoadImage
          alt={meal.strMeal}
          height="250"
          width={"100%"}
          src={meal.strMealThumb}
          title={meal.strMeal}
          effect="blur"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "2px 2px 0 0",
          }}
        />
        <CardContent sx={{ padding: "16px", backgroundColor: "#FFFFFF" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {meal.strMeal}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
