<template>
  <NavBar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  ></NavBar>

  <PageViewer :page="pages[activePage]"></PageViewer>
</template>

<script>
import PageViewer from './components/PageViewer.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
    PageViewer
  },
  data() {
    return {
      activePage: 0,
      pages: [
        {
          link: { text: 'Home', url: 'index.html' },
          pageTitle: 'Home',
          pageContent: 'This is the home page'
        },
        {
          link: { text: 'About', url: 'about.html' },
          pageTitle: 'About',
          pageContent: 'This is the about page'
        },
        {
          link: { text: 'Contacts', url: 'contact.html' },
          pageTitle: 'Contacts',
          pageContent: 'This is the contacts page'
        }
      ]
    }
  }
}
</script>
