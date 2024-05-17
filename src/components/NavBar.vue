<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavBarLink
          v-for="(page, index) in pages.filter((page) => page.published)"
          class="nav-item"
          :key="index"
          :index="index"
          :page="page"
        ></NavBarLink>

        <li>
          <RouterLink to="/pages" class="nav-link" activeClass="active">Pages</RouterLink>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Theme</button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavBarLink from './NavBarLink.vue'

export default {
  components: {
    NavBarLink
  },
  inject: ['$pages', '$bus'],
  data() {
    return {
      theme: 'light',
      pages: []
    }
  },
  created() {
    this.pages = this.$pages.getAllPages()

    this.$bus.$on('page-updated', () => {
      this.pages = [...this.$pages.getAllPages()]
    })

    this.$bus.$on('page-created', () => {
      this.pages = [...this.$pages.getAllPages()]
    })
  },
  methods: {
    changeTheme() {
      const theme = this.theme == 'light' ? 'dark' : 'light'
      this.theme = theme
    }
  }
}
</script>
