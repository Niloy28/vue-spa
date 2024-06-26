const pagesKey = 'pages'

const pagesJson = localStorage.getItem(pagesKey)

let pages
if (pagesJson) {
  pages = JSON.parse(pagesJson)
} else {
  pages = await fetch('pages.json').then((res) => res.json())
  localStorage.setItem(pagesKey, JSON.stringify(pages))
}

function saveToLocalStorage() {
  localStorage.setItem(pages, JSON.stringify(pages))
}

export default {
  getAllPages() {
    return pages
  },

  getSinglePage(index) {
    if (index < 0 || index >= pages.length) {
      throw new Error('Invalid index')
    }

    return pages[index]
  },

  addPage(newPage) {
    pages.push(newPage)

    saveToLocalStorage()
  },

  editPage(index, page) {
    if (index < 0 || index >= pages.length) {
      throw new Error('Invalid index')
    }

    pages[index] = page
    saveToLocalStorage()
  },

  deletePage(index) {
    pages.splice(index, 1)

    saveToLocalStorage()
  }
}
