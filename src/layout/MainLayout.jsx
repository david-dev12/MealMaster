import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientList } from "../api";
import { setIngredients } from "../store/actions/ingredientActions";
import Splash from "../pages/Splash";
import { CssBaseline, Box } from "@mui/material";
import AppBar from "../components/layouts/AppBar";
import Main from "../components/layouts/Main";
import Drawer from "../components/layouts/Drawer";

function MainLayout({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getIngredientList();
        dispatch(setIngredients(list.data.meals));
      } catch (error) {
        console.error("Error fetching ingredient data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalOpen={modalOpen}
      />
      <Main open={open}>{children}</Main>
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}

export default MainLayout;
