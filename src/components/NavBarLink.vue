<template>
  <li>
    <RouterLink
      :to="`/${index}`"
      class="nav-link"
      active-class="active"
      aria-current="page"
      :title="`This link goes to the ${page.link.text} page`"
      >{{ page.link.text }}</RouterLink
    >
  </li>
</template>

<script>
export default {
  props: ['page', 'index']
}
</script>
