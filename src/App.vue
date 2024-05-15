<template>
  <NavBar :pages="pages" :active-page="activePage"></NavBar>

  <!-- <PageViewer v-if="pages.length > 0" :page="pages[activePage]"></PageViewer>

  <CreatePage :page-created="createPage"></CreatePage> -->

  <RouterView></RouterView>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  created() {
    this.getPages()

    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index
    })
  },
  data() {
    return {
      activePage: 0,
      pages: []
    }
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json')
      let data = await res.json()

      this.pages = data
    },
    createPage(page) {
      this.pages.push(page)
    }
  }
}
</script>
