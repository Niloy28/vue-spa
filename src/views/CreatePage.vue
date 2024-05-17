<template>
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
              v-model="pageTitle"
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
              v-model="pageContent"
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
              v-model="pageName"
            />
          </div>

          <div>
            <input type="checkbox" name="publish" id="publish" v-model="published" />
            <label for="publish" class="form-label ms-2">Publish the page?</label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button
          type="button"
          class="btn btn-primary m-2"
          :disabled="isFormInvalid"
          @click.prevent="submitForm"
        >
          Create Page
        </button>
        <button type="button" class="btn btn-secondray m-2" @click.prevent="goToPageList">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const pageName = ref('')
const pageTitle = ref('')
const pageContent = ref('')
const published = ref(true)

const bus = inject('$bus')
const pages = inject('$pages')
const router = useRouter()

function submitForm() {
  // Create a new page object from the form data
  const newPage = {
    link: { text: pageName.value },
    pageTitle: pageTitle.value,
    pageContent: pageContent.value,
    published: published.value
  }

  pages.addPage(newPage)

  bus.$emit('page-created', newPage)
  goToPageList()
}

function goToPageList() {
  router.push({ path: '/pages' })
}

const isFormInvalid = computed(() => !pageTitle.value || !pageContent.value || !pageName.value)

watch(pageTitle, (newTitle, oldTitle) => {
  // Check if the new title matches the old title
  if (pageName.value == oldTitle) {
    // If it does, update the page name with the new title
    pageName.value = newTitle
  }
})
</script>
