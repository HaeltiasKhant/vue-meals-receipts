<template>
  <div class="bg-gray-100 h-full w-full ">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <RouterLink :to="{ name: 'home' }" class="inline-flex px-5 h-full items-center hover:bg-sky-400 hover:text-white text-orange-500 font-bold">
        <h3>Home</h3>
      </RouterLink>

      <div class="flex items-center gap-1">
        <RouterLink :to="{ name: 'byname' }" class="inline-flex items-center px-2 h-full transition-color hover:bg-orange-500 hover:text-white">
          <h3>Search by name</h3>
        </RouterLink>
        <RouterLink :to="{ name: 'byletter' }" class="inline flex items-center px-2 h-full transition-color hover:bg-orange-500 hover:text-white">
          <h3>Search by letter</h3>
        </RouterLink>
        <RouterLink :to="{ name: 'ingredients' }" class="inline flex items-center px-2 h-full transition-color hover:bg-orange-500 hover:text-white">
          <h3>Search by ingredients</h3>
        </RouterLink>
      </div>
    </header>

  </div>
</template>

<script setup>

</script>