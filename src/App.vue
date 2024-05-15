<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  methods: {
    createPage(page) {
      this.pages.push(page)
    }
  }
}
</script>
