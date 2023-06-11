<template>
  <div class="flex justify-center flex-wrap gap-2 text-red-400 mt-10" >
		<RouterLink :to="{name: 'byletter', params: {letter}}" v-for="letter in letters" :key="letter" >
			{{ letter }}
		</RouterLink>
	</div>

	<div class="grid grid-cols-1 p-4 md:grid-cols-3 gap-8 md:p-8 ">
		<MealItems v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItems>
	</div>

	<div class="flex justify-center" v-if="!meals.length">
		<h1 class="text-xl text-red-600">There are no meals.</h1>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import MealItems from '../components/MealItems.vue';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
	store.dispatch('searchedMealsByLetter', route.params.letter)
})

onMounted(() => {
	store.dispatch('searchedMealsByLetter', route.params.letter)
})

</script>