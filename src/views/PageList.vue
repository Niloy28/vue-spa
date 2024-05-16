<template>
  <h4>Pages</h4>

  <div class="text-end">
    <RouterLink to="/pages/create" class="btn btn-primary btn-small">New Page</RouterLink>
  </div>

  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <td>Title</td>
        <td>Link Text</td>
        <td>Published</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)">
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'Yes' : 'No' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const $pages = inject('$pages')

function goToPage(index) {
  router.push({ path: `/pages/${index}/edit` })
}
</script>

<style scoped>
.table.table-striped.table-hover tbody tr:hover {
  cursor: pointer;
}
</style>
