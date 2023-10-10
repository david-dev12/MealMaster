import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/ingredients/SearchBar";
import { addToFridge } from "../store/actions/fridgeActions";
import IngredientList from "../components/ingredients/IngredientList";
import IngredientModal from "../components/ingredients/IngredientModal";

function Dashboard() {
  const dispatch = useDispatch();
  const ingredientList = useSelector((state) => state.ingredients.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIngredient, setExpandedIngredient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState(false);

  const filtered =
    searchTerm === ""
      ? ingredientList
      : ingredientList.filter((ingredient) =>
          ingredient.strIngredient
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
  const handleAddToFridge = (ingredient) => {
    setExpandedIngredient(ingredient);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    if (parseFloat(quantity) > 0) {
      setIsModalOpen(false);
      dispatch(
        addToFridge({
          ingredient: expandedIngredient,
          quantity: quantity,
        })
      );
      setQuantityError(false);
      setQuantity(0);
    } else {
      setQuantityError(true);
    }
  };

  return (
    <div>
      <SearchBar
        query={searchTerm}
        setQuery={setSearchTerm}
      />
      <IngredientList
        ingredients={filtered}
        onAddToFridge={handleAddToFridge}
        expandedIngredient={expandedIngredient}
      />
      {expandedIngredient && (
        <IngredientModal
          ingredient={expandedIngredient}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          quantity={quantity}
          setQuantity={setQuantity}
          quantityError={quantityError}
          setQuantityError={setQuantityError}
        />
      )}
    </div>
  );
}

export default Dashboard;
