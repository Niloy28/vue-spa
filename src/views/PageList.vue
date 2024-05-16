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
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in $pages.getAllPages()" :key="index">
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { inject } from 'vue'

const $pages = inject('$pages')
</script>
