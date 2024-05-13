<template>
  <li>
    <a
      :href="page.link.url"
      class="nav-link"
      :class="activeClasses"
      :title="`This link goes to the ${page.link.text} page`"
      @click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{ page.link.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: ['page', 'index', 'isActive'],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive
      }
    }
  }
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
