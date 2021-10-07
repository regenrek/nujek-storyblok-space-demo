<template>
  <div v-editable="blok" class="bg-yellow-300 py-12 flex justify-center items-center h-[350px]">
    {{ blok.name }}
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
