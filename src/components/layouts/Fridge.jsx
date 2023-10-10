import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit as EditIcon } from "@mui/icons-material";
import FindIcon from "@mui/icons-material/FindInPage";
import { setFridge } from "../../store/actions/fridgeActions";

const FridgeItem = ({ image, title, quantity, onDelete, onFind }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          src={image}
          alt={title}
        />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={quantity}
      />
      <IconButton
        onClick={onDelete}
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={onFind}
        color="primary"
      >
        <FindIcon />
      </IconButton>
    </ListItem>
  );
};

function Fridge() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.fridge.items);
  const handleDeleteItem = (id) => {
    let newList = list.filter((item) => item.ingredient.idIngredient !== id);
    dispatch(setFridge(newList));
  };

  const handleFindItem = (title) => {
    navigate(`/meal/${title}`);
  };

  const handleClearAll = () => {
    dispatch(setFridge([]));
  };

  return (
    <Box overflow={"auto"}>
      <List>
        {list.map((item) => (
          <FridgeItem
            key={item.ingredient.idIngredient}
            image={`https://www.themealdb.com/images/ingredients/${item.ingredient.strIngredient}-Small.png`}
            title={item.ingredient.strIngredient}
            quantity={item.quantity}
            onDelete={() => handleDeleteItem(item.ingredient.idIngredient)}
            onFind={() => handleFindItem(item.ingredient.strIngredient)}
          />
        ))}
      </List>
      {list.length > 0 && (
        <Grid
          container
          spacing={2}
          padding={2}
        >
          <Grid
            item
            xs={6}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
              fullWidth
            >
              <EditIcon />
              Edit
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleClearAll}
              fullWidth
            >
              <DeleteIcon />
              Clear
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Fridge;
