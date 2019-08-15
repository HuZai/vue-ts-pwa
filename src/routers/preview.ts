export default [
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/preview/Preview.vue')
  },
  {
    path: '/preview/layout',
    name: 'Previewlayout',
    component: () => import('../views/preview/layout.vue')
  }
]
