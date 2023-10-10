import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { INGREDIENT_IMAGE_URL } from "../../constants";

function IngredientModal({
  ingredient,
  isOpen,
  onClose,
  onSubmit,
  quantity,
  setQuantity,
  quantityError,
  setQuantityError,
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>{ingredient.strIngredient}</DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={4}
          >
            <LazyLoadImage
              src={`${INGREDIENT_IMAGE_URL}${ingredient.strIngredient}-Small.png`}
              alt="Ingredient"
              width="100%"
              effect="blur"
            />
          </Grid>
          <Grid
            item
            xs={8}
          >
            <TextField
              type="number"
              label="Quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              error={quantityError}
              helperText={
                quantityError ? "Quantity must be greater than 0" : ""
              }
              sx={{
                marginTop: 1,
                marginBottom: 2,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          color="primary"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default IngredientModal;
