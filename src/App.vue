<template>
  <NavBar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  ></NavBar>

  <PageViewer v-if="pages.length > 0" :page="pages[activePage]"></PageViewer>

  <CreatePage :page-created="createPage"></CreatePage>
</template>

<script>
import PageViewer from './components/PageViewer.vue'
import NavBar from './components/NavBar.vue'
import CreatePage from './components/CreatePage.vue'

export default {
  components: {
    NavBar,
    PageViewer,
    CreatePage
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
    },
    createPage(page) {
      this.pages.push(page)
    }
  }
}
</script>
