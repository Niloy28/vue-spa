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
    /**
     * Submits the form and creates a new page.
     *
     * @param {Object} newPage - The new page to create.
     */
    submitForm() {
      // Create a new page object from the form data
      const newPage = {
        link: { text: this.pageName, url: `${this.pageUrl}.html` },
        pageTitle: this.pageTitle,
        pageContent: this.pageContent
      }

      // If the page is being published, call the `pageCreated` prop with
      // the new page object.
      if (this.publish) {
        this.pageCreated(newPage)
      } else {
        // If the page is not being published, log the new page object
        // to the console.
        console.log(newPage)
      }

      // Reset the form data to empty strings and set `publish` back to true.
      this.pageTitle = this.pageContent = this.pageName = this.pageUrl = ''
      this.publish = true
    },
    /**
     * Computes the page URL based on the page name.
     *
     * @param {string} pageName - The page name to compute the URL for
     * @returns {string} The computed page URL
     */
    computePageUrl(pageName) {
      // Compute the page URL by taking the page name, converting it to
      // lowercase and replacing spaces with hyphens. The ".html"
      // extension is appended to the end of the URL.
      return `${pageName.toLowerCase().replace(' ', '-').trim()}.html`
    }
  },
  watch: {
    /**
     * Watches the `pageTitle` property and updates the `pageName` property
     * if the new title matches the old title.
     *
     * @param {string} newTitle - The new title to set
     * @param {string} oldTitle - The old title to compare
     */
    pageTitle(newTitle, oldTitle) {
      // Check if the new title matches the old title
      if (this.pageName == oldTitle) {
        // If it does, update the page name with the new title
        this.pageName = newTitle
      }
    },
    /**
     * Updates the page URL based on the new page name.
     *
     * @param {string} newName - The new page name.
     * @param {string} oldName - The old page name.
     *
     * This function checks if the page URL is empty or if the new page
     * name matches the old page name. If either of those conditions are
     * true, it updates the page URL with the new page name and the
     * ".html" extension. If the new page name is a change from the old
     * page name, it will update the page URL with the new page name.
     */
    pageName(newName, oldName) {
      if (this.pageUrl.length == 0 || this.pageUrl == this.computePageUrl(oldName)) {
        this.pageUrl = this.computePageUrl(newName)
      }
    }
  }
}
</script>

<style scoped></style>
