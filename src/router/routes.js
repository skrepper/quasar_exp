const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/qslider',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/QsliderPage.vue') }],
  },
  {
    path: '/compositionapi',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CompositionApiPage.vue') }], 
  },
  {
    path: '/tick',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NexttickPage.vue') }], 
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
        {
            path: '/book',
            component: () => import('layouts/MainLayout.vue'),
            children: [{ path: '', component: () => import('components/olu/BooksList.vue') }],
        },
        {
            path: '/book/edit/:bookId?',
            component: () => import('layouts/MainLayout.vue'),
            children: [{ path: '', component: () => import('components/olu/BooksForm.vue') }],
        },
        {
            name: 'book-item',
            path: '/book/:bookId(\\d+)',
            component: () => import('layouts/MainLayout.vue'),
            children: [{ path: '', component: () => import('components/olu/BookItem.vue') }],
        },
];

export default routes;
