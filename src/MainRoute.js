import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Dashboard from './pages/Dashboard';
import Meal from "./pages/Meal";
import MealDetail from "./pages/MealDetail";

function MainRoute() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/meal/:ingredient/:mealId" element={<MealDetail />} />
          <Route path="/meal/:ingredient" element={<Meal />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default MainRoute;