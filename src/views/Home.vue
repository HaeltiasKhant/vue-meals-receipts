<template>
	<h1 class="text-4xl font-bold p-2 text-orange-500">Random meals</h1>
	<div class="grid grid-cols-1 p-4 md:grid-cols-3 gap-8 md:p-8 ">
		<Mealitems v-for="meal in meals" :key="meal.idMeal" :meal="meal"></Mealitems>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import Mealitems from '../components/Mealitems.vue'

const meals = ref([])

onMounted(async() => {
	for (let i= 0; i< 10; i++) {
		axiosClient.get('random.php').then(({data}) => meals.value.push(data.meals[0]))
	}
})
</script>

