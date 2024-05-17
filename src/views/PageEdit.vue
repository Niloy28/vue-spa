<template>
  <h4>Edit Page {{ page.pageTitle }}</h4>
  <div class="container mb-3">
    <form action="">
      <div class="d-flex justify-content-evenly">
        <div class="flex-fill p-2">
          <div class="mb-3">
            <label for="page-title" class="form-label"> Page Title </label>
            <input
              type="text"
              name="page-title"
              id="page-title"
              class="form-control"
              v-model="page.pageTitle"
            />
          </div>

          <div class="mb-3">
            <label for="page-content" class="form-label">Page Content</label>
            <textarea
              type="text"
              name="page-content"
              id="page-content"
              class="form-control"
              rows="5"
              v-model="page.pageContent"
            ></textarea>
          </div>
        </div>

        <div class="p-2 flex-grow-1">
          <div class="mb-3">
            <label for="page-name" class="form-label"> Page Name </label>
            <input
              type="text"
              name="page-name"
              id="page-name"
              class="form-control"
              v-model="page.link.text"
            />
          </div>

          <div>
            <input type="checkbox" name="publish" id="publish" v-model="page.published" />
            <label for="publish" class="form-label ms-2">Publish the page?</label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button
          type="button"
          class="btn btn-primary m-3"
          :disabled="isFormInvalid"
          @click.prevent="updatePage"
        >
          Update Page
        </button>
        <button class="btn btn-secondary m-2" @click.prevent="goToPageList">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const { index } = defineProps(['index'])
const pages = inject('$pages')
const bus = inject('$bus')

const page = pages.getSinglePage(index)

function updatePage() {
  pages.editPage(index, page)

  bus.$emit('page-updated')

  goToPageList()
}

function goToPageList() {
  router.push({ path: '/pages' })
}
</script>
