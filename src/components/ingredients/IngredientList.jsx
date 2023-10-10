import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { INGREDIENT_IMAGE_URL } from "../../constants";

function IngredientList({ ingredients, onAddToFridge, expandedIngredient }) {
  return (
    <List>
      {ingredients.map((ingredient) => (
        <div key={ingredient.idIngredient}>
          <ListItem
            button
            onClick={() => onAddToFridge(ingredient)}
            sx={{
              backgroundColor:
                expandedIngredient === ingredient ? "#f0f0f0" : "inherit",
            }}
          >
            <ListItemIcon>
              <LazyLoadImage
                src={`${INGREDIENT_IMAGE_URL}${ingredient.strIngredient}-Small.png`}
                alt={ingredient.strIngredient}
                width={40}
                height={40}
                effect="blur"
              />
            </ListItemIcon>
            <ListItemText
              primary={ingredient.strIngredient}
              secondary={ingredient.strDescription}
            />
          </ListItem>
        </div>
      ))}
    </List>
  );
}

export default IngredientList;
