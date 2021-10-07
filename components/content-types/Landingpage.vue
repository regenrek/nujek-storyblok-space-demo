<template>
  <div>
    <div v-editable="blok">
      <div class="bg-yellow-200 flex justify-center items-center h-[350px]">
        <h1 class="text-2xl text-yellow-800">
          {{ blok.title }}
        </h1>
      </div>
    </div>
    <!-- render dynamic bloks from `Landingpage` content type -->
    <slot name="bloks" />
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
