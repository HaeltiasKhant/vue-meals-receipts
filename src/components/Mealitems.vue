<template>
  <div class="bg-red-200 rounded-xl hover:scale-105 transition-all">
			<RouterLink :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
				<img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full h-48 object-cover" />
			</RouterLink>
			<div class=" p-3 ">
				<h3 class="font-bold">{{ meal.strMeal }}</h3>
				<p class="mt-2 text-left">{{ $filters.truncateWords(meal.strInstructions, 20) }}...</p>
			</div>
			<div class="flex p-2">
				<YouTubeButton :href="meal.strYoutube">Watch tutorial</YouTubeButton>
			</div>
	</div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
		required: true,
		type: Object
	}
})

</script>