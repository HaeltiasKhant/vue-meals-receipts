<template>
  <div class=" max-w-[800px] mx-auto p-4 md:p-8 ">
    <h1 class="text-5xl font-bold my-4">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cols-1 md:grid-cols-3 my-5">
      <div>
        <strong>Category: </strong>{{ meal.strCategory }}
      </div>
      <div>
        <strong>Area: </strong>{{ meal.strArea }}
      </div>
      <div>
        <strong>Tags: </strong>{{ meal.strTags }}
      </div>
    </div>

    <div class="my-5">
      <p>{{ meal.strInstructions }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex justify-start items-center my-5">
      <YouTubeButton :href="meal.strYoutube">Watch tutorial</YouTubeButton>
      <a :href="meal.strSource" target="_blank"
        class="ml-2 text-green-500 rounded border-none px-3 py-2 hover:bg-green-400 hover:text-white">
        View original source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue'

const meal = ref({})
const route = useRoute()

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})

</script>