<template>
  <div>
    <h1 class="p-4 md:p-8 text-4xl font-bold text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <div class="grid grid-cols-1 p-4 md:grid-cols-3 gap-8 md:p-8 ">
		<Mealitems v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItems>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'; 
import Mealitems from '../components/Mealitems.vue';
import store from '../store'

const route = useRoute()
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)

onMounted(()=> {
  store.dispatch('searchedMealsByIngredient', route.params.ingredient)
})

</script>