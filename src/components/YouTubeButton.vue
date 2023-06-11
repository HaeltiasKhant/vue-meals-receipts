<template>
    <a 
      :href="href" 
      target="_blank"
      class="bg-red-500 rounded border-2 border-none px-3 py-2 text-white hover:bg-red-400 select-none cursor-pointer">
      <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>