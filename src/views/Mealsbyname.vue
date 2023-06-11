<template>
	<div class="flex justify-center p-8">
		<input 
			v-model="keyword"
			@change="searchMeals"
			type="text" 
			class="rounded border-2 border-gray-200 w-full" 
			placeholder="Search for meals" />
	</div>
	
	<div class="grid grid-cols-1 p-4 md:grid-cols-3 gap-8 md:p-8 ">
		<Mealitems v-for="meal in meals" :key="meal.idMeal" :meal="meal"></Mealitems>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from '../store'
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import Mealitems from '../components/Mealitems.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
	if (keyword.value) {
		store.dispatch('searchedMeals', keyword.value)
	}
	else {
		store.commit('setSearchedMeals', [])
	}
}

onMounted(() => {
	keyword.value = route.params.name
	if (keyword.value) {
		searchMeals()
	}
})
</script>