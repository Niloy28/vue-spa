<template>
  <NavBar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  ></NavBar>

  <PageViewer v-if="pages.length > 0" :page="pages[activePage]"></PageViewer>
</template>

<script>
import PageViewer from './components/PageViewer.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
    PageViewer
  },
  created() {
    this.getPages()
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
    }
  }
}
</script>
