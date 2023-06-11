import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mealsbyname from "../views/Mealsbyname.vue";
import Mealsbyletter from "../views/Mealsbyletter.vue";
import Mealsbyingredients from "../views/Mealsbyingredients.vue";
import Defaultlayout from "../components/Defaultlayout.vue";
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/ingredients.vue'

const routes = [
  {
    path: "/",
    component: Defaultlayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byname",
        component: Mealsbyname,
      },
      {
        path: "/by-letter/:letter?",
        name: "byletter",
        component: Mealsbyletter,
      },
      {
        path: "/by-ingredients/:ingredient",
        name: "byingredient",
        component: Mealsbyingredients,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
