import { createRouter, createWebHashHistory } from 'vue-router'
import PageManagement from './views/PageManagement.vue'
import PageViewer from './views/PageViewer.vue'
import CreatePage from './views/CreatePage.vue'
import PageList from './views/PageList.vue'
import PageEdit from './views/PageEdit.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:index?',
      name: 'Home',
      component: PageViewer,
      props: true
    },
    {
      path: '/pages',
      component: PageManagement,
      children: [
        {
          path: '',
          name: 'Pages',
          component: PageList
        },
        {
          path: 'create',
          name: 'Create A New Page',
          component: CreatePage
        },
        {
          path: ':index/edit',
          name: 'Edit Page',
          component: PageEdit,
          props: true
        }
      ]
    }
  ]
})

export default router
