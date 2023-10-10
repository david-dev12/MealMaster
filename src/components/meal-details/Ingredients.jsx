import { Typography, Grid, Paper } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Ingredients = ({ mealData }) => (
  <>
    <Typography
      variant="h6"
      component="h2"
      gutterBottom
    >
      Ingredients
    </Typography>
    <Grid
      container
      spacing={2}
    >
      {Array.from({ length: 20 }, (_, i) => i + 1)
        .map((i) => `strIngredient${i}`)
        .filter((ingredient) => mealData[ingredient])
        .map((ingredient, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={index}
          >
            <Paper
              elevation={1}
              sx={{ p: 1, textAlign: "center", height: "100%" }}
            >
              <LazyLoadImage
                src={`https://www.themealdb.com/images/ingredients/${mealData[ingredient]}-Small.png`}
                alt={mealData[ingredient]}
                height="40"
                width="40"
                effect="blur"
              />
              <Typography variant="body2">{mealData[ingredient]}</Typography>
              <Typography variant="body2">
                {mealData[`strMeasure${index + 1}`]}
              </Typography>
            </Paper>
          </Grid>
        ))}
    </Grid>
  </>
);

export default Ingredients;
