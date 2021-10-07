<template>
  <div class="bg-yellow-200">
    <div v-editable="blok">
      Hi from my Grid
    </div>
    <div class="grid grid-cols-3 gap-5 mt-12">
      <slot name="columns" />
    </div>
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
