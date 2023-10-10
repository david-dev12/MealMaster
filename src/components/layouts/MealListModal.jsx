import React from "react";
import {
  Box,
  Button,
  List,
  ListItemText,
  IconButton,
  ListItemButton,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { setMeal } from "../../store/actions/mealActions";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function MealListModal({ handleOpen, handleClose, modalOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealList = useSelector((state) => state.meals.items);

  const handleDeleteItem = (id) => {
    let newList = mealList.filter((item) => item.idMeal !== id);
    dispatch(setMeal(newList));
  };

  const handleFindItem = (url) => {
    navigate(`/meal/${url}`);
  };

  const handleClearAll = () => {
    dispatch(setMeal([]));
  };

  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
    >
      <DialogTitle>Meal List</DialogTitle>
      <List sx={{ minWidth: "300px" }}>
        {mealList.map((meal) => (
          <ListItemButton
            key={meal.idMeal}
            onClick={() => handleFindItem(meal.url)}
            sx={{
              cursor: "pointer",
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <LazyLoadImage
              alt={meal.strMeal}
              height={100}
              src={meal.strMealThumb}
              width={100}
              effect="blur"
            />
            <ListItemText
              primary={meal.strMeal}
              primaryTypographyProps={{
                variant: "h6",
                color: "text.primary",
              }}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteItem(meal.idMeal);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>
      {mealList.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClearAll}
          sx={{ mt: 2, margin: "14px" }}
        >
          Delete All
        </Button>
      )}
      {mealList.length === 0 && (
        <Box
          textAlign="center"
          margin={2}
          marginBottom={6}
        >
          Empty
        </Box>
      )}
    </Dialog>
  );
}

export default MealListModal;
