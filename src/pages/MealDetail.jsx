import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  Skeleton,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BackButton from "../components/meal-details/BackButton";
import Ingredients from "../components/meal-details/Ingredients";
import { getMealDetail } from "../api";
import { addToMeal } from "../store/actions/mealActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function MealDetail() {
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.meals.items);
  const { ingredient, mealId } = useParams();
  const navigate = useNavigate();
  const [mealData, setMealData] = useState(null);

  const isAdded = mealList.findIndex((m) => m.idMeal === mealId) >= 0;

  useEffect(() => {
    const fetchMealDetail = async () => {
      try {
        const detail = await getMealDetail(mealId);
        setMealData(detail.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal detail:", error);
      }
    };

    if (mealId) {
      fetchMealDetail();
    }
  }, [mealId]);

  const addToMealList = () => {
    dispatch(addToMeal({ ...mealData, url: `${ingredient}/${mealId}` }));
  };

  const goBack = () => {
    navigate(`/meal/${ingredient}`);
  };

  return (
    <Container maxWidth="md">
      <BackButton goBack={goBack} />
      {mealData ? (
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
            >
              {mealData.strMeal}
            </Typography>
            {isAdded ? (
              <Button
                variant="contained"
                color="success"
                startIcon={<CheckCircleIcon />}
                disabled
              >
                Added to Meal List
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={addToMealList}
              >
                Add to Meal List
              </Button>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card>
              <LazyLoadImage
                alt={mealData.strMeal}
                height="300"
                width="100%"
                src={mealData.strMealThumb}
                effect="blur"
                placeholder={
                  <Skeleton
                    variant="rectangular"
                    height={300}
                  />
                }
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "2px 2px 0 0",
                }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  {mealData.strInstructions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Ingredients mealData={mealData} />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Skeleton
              variant="text"
              height={40}
            />
            <Skeleton
              variant="text"
              width="30%"
              height={40}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Skeleton
              variant="rectangular"
              height={300}
            />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Skeleton
              variant="text"
              height={30}
            />
            <Skeleton
              variant="rectangular"
              height={40}
            />
            <Skeleton
              variant="rectangular"
              height={40}
            />
            <Skeleton
              variant="rectangular"
              height={40}
            />
            <Skeleton
              variant="rectangular"
              height={40}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default MealDetail;
