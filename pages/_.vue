<template>
  <Blok :blok="story.content" />
</template>

<script>
export default {
  async asyncData ({ $storyapi, error }) {
    const currentPage = await $storyapi.getStory('home')

    if (!currentPage) {
      error({
        statusCode: 400,
        message: 'Story not found'
      })
    }

    return {
      story: currentPage.data.story
    }
  }
}
</script>
