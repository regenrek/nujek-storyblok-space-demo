<template>
  <div v-editable="blok" class="bg-yellow-200 border-t border-yellow-400 flex justify-center items-center h-[350px]">
    <h2 class="text-xl text-yellow-800">
      {{ blok.headline }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
