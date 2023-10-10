import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export function getIngredientList() {
  return axios.get(`${API_URL}/list.php?i=list`);
}

export function getMealData(meal) {
  return axios.get(`${API_URL}/filter.php?i=${meal}`);
}

export function getMealDetail(mealId) {
  return axios.get(`${API_URL}/lookup.php?i=${mealId}`);
}