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

          <div class="mb-3">
            <label for="page-url" class="form-label">Page URL</label>
            <input
              type="text"
              name="page-url"
              id="page-url"
              class="form-control"
              v-model="pageUrl"
            />
          </div>

          <div>
            <input type="checkbox" name="publish" id="publish" v-model="publish" />
            <label for="publish" class="form-label ms-2">Publish the page?</label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button
          type="button"
          class="btn btn-primary"
          :disabled="isFormInvalid"
          @click.prevent="submitForm()"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['pageCreated'],
  computed: {
    isFormInvalid() {
      return !this.pageTitle || !this.pageContent || !this.pageName || !this.pageUrl
    }
  },
  data() {
    return {
      pageTitle: '',
      pageContent: '',
      pageName: '',
      pageUrl: '',
      publish: true
    }
  },
  methods: {
    submitForm() {
      const newPage = {
        link: { text: this.pageName, url: `${this.pageUrl}.html` },
        pageTitle: this.pageTitle,
        pageContent: this.pageContent
      }

      if (this.publish) {
        this.pageCreated(newPage)
      } else {
        console.log(newPage)
      }

      this.pageTitle = this.pageContent = this.pageName = this.pageUrl = ''
      this.publish = true
    },
    computePageUrl(pageName) {
      return `${pageName.toLowerCase().replace(' ', '-')}.html`
    }
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.pageName == oldTitle) {
        this.pageName = newTitle
      }
    },
    pageName(newName, oldName) {
      if (this.pageUrl.length == 0 || this.pageUrl == this.computePageUrl(oldName)) {
        this.pageUrl = this.computePageUrl(newName)
      }
    }
  }
}
</script>

<style scoped></style>
