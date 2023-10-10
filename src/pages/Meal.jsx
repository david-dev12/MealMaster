import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Box, Container } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getMealData } from "../api";
import MealCard from "../components/meals/MealCard";
import LoadingCard from "../components/meals/LoadingCard";

function MealPage() {
  const { ingredient } = useParams();
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const mealData = await getMealData(ingredient);
        setMealData(mealData.data);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    if (ingredient) {
      fetchMealData();
    }
  }, [ingredient]);

  return (
    <Container>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        mt={4}
      >
        <Typography
          variant="h2"
          component="div"
          mb={2}
        >
          {ingredient}
        </Typography>
        <LazyLoadImage
          src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
          alt={ingredient}
          effect="blur"
        />
      </Box>
      <Grid
        container
        spacing={4}
        mt={4}
      >
        {mealData
          ? mealData.meals.map((meal) => (
              <Grid
                item
                key={meal.idMeal}
                xs={12}
                sm={6}
                md={4}
              >
                <MealCard
                  meal={meal}
                  ingredient={ingredient}
                />
              </Grid>
            ))
          : [1, 2, 3].map((index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
              >
                <LoadingCard />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default MealPage;
