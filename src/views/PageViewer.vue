<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'],
  inject: ['$pages'],
  data() {
    return {
      page: null
    }
  },
  created() {
    this.page = this.$pages.getSinglePage(this.index)
  },
  methods: {
    loadPageData(pageIndex) {
      this.page = this.$pages.getSinglePage(pageIndex)
    }
  },
  watch: {
    index() {
      this.loadPageData(this.index)
    }
  }
}
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
